import RestaurantCard from "./RestaurantCard";
import { map, filter, gte, includes, toLower } from "ramda";
import { FETCH_MENU_URL, restaurantData } from "../utils/consts";
import { useEffect, useState } from "react";
import { isNotNullOrEmpty, isNilOrEmpty } from "../utils/util";
import { delay, of } from "rxjs";
import { Input } from 'antd';
import { Link } from "react-router-dom";
import { useAppOnline } from "../utils/useAppOnline";
import Loader from "./Loader";
const { Search } = Input;

const Body = () => {
  // Stateful value and a function to update it
  const [restData, setRestData] = useState();
  const [filteredRestData, setFilteredRestData] = useState();
  const [searchText, setSearchText] = useState();

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
      .subscribe((data) => {
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

  const onSearch = (value) => {
    setSearchText(value);
    setFilteredRestData(
      filter((rest) => includes(toLower(value), toLower(rest?.name)), restData)
    );
  };

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
          {map(
            (restData) => (
              <Link
                className="text-decoration-none color-inherit"
                key={restData.id}
                to={`/restaurant/1`}
              >
                <RestaurantCard restData={restData} />
              </Link>
            ),
            filteredRestData
          )}
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