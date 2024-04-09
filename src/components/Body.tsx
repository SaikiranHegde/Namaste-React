import React from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { map, filter, gte, includes, toLower } from "ramda";
import { FETCH_MENU_URL, restaurantData } from "../utils/consts";
import { useEffect, useState } from "react";
import { isNotNullOrEmpty, isNilOrEmpty } from "../utils/util";
import { delay, of } from "rxjs";
import { Input } from 'antd';
import { Link } from "react-router-dom";
import { useAppOnline } from "../hooks/useAppOnline";
import Loader from "./Loader";
import { RestaurantData } from "../types/types";
const { Search } = Input;

const Body: React.FC = () => {
  // Stateful value and a function to update it
  const [restData, setRestData] = useState<RestaurantData[]>([]);
  const [filteredRestData, setFilteredRestData] = useState<RestaurantData[]>([]);;
  const [searchText, setSearchText] = useState<string>();

  // showIndex state variable will be updated in Child component using setShowIndex
  const [showIndex, setShowIndex] = useState<number>(0);

  // Using Promise
  const fetchRestaurantData = async () => {
    // const data = await fetch(FETCH_MENU_URL);
    // const json = await data.json();
    // use RxJS fromFetch and try the same

    const data = await Promise.resolve(restaurantData);
    setTimeout(() => {
      setRestData(data);
    }, 1500);
  };

  useEffect(() => {
    // fetchRestaurantData();

    // Using RxJS
    const subscription = of(restaurantData)
      .pipe(delay(1500))
      .subscribe((data: RestaurantData[]) => {
        setRestData(data);
        setFilteredRestData(data);
      });

    // Called when component unmounts
    return function unsub() {
      subscription.unsubscribe();
    };
  }, []); // [restData] -> Dependency array with variable

  // useAppOnline custom hook
  const appOnline = useAppOnline();

  // Conditional rendering
  if (isNilOrEmpty(restData)) {
    return <Loader />
  }

  const onSearch = (value: string) => {
    setSearchText(value);
    setFilteredRestData(
      filter((rest) => includes(toLower(value), toLower(rest?.name)), restData)
    );
  };

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  if (appOnline) {
    // Body component
    return (
      <section className="content-container">
        <div className="filter">
          <Search
            placeholder="Search Restaurants"
            defaultValue={searchText}
            onSearch={onSearch}
            enterButton
          />
          <button
            className="filter-btn"
            onClick={() => {
              setFilteredRestData(
                filter((rest) => gte(rest?.rating, 4), restData)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="rest-container">
          {filteredRestData?.map((restData: RestaurantData) => (
            <Link
              className="text-decoration-none color-inherit"
              key={restData.id}
              to={`/restaurant/1`}
            >
              {/* { restData.promoted ? <RestaurantCardPromoted restData={restData} /> : <RestaurantCard restData={restData} /> } */}
              {/* Pass setShowIndex, so that we can use it to set showIndex from RestaurantCard */}
              {
                <RestaurantCard
                  restData={restData}
                  setShowIndex={() => setShowIndex(restData.id)}
                />
              }
            </Link>
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <div className="header-2">
        Looks like you are offline. Please check your internet connection!!
      </div>
    );
  }
};

export default Body;  