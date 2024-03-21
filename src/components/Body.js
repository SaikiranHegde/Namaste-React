import RestaurantCard from "./RestaurantCard";
import { map, filter, gte } from "ramda";
import { FETCH_MENU_URL, RestaurantData } from "../utils/consts";
import { useEffect, useState } from "react";
import { Flex, Spin, Skeleton  } from 'antd';
import { isNotNullOrEmpty, isNilOrEmpty } from "../utils/util";

const Body = () => {
  // Stateful value and a function to update it
  const [restData, setRestData] = useState();

  const fetchRestaurantData = async () => {
    // const data = await fetch(FETCH_MENU_URL);
    // const json = await data.json();

    const data = await Promise.resolve(RestaurantData);
    setTimeout(() => {
      setRestData(data);
    }, 1500);
  }

  useEffect(() => {
    fetchRestaurantData();
  });

  if (isNilOrEmpty(restData)) {
    return <Flex align="center" justify="center" gap="middle">
      <Spin size="large"/>
      {/* <Skeleton active /> */}
    </Flex>;
  }

  // Body component
  return (
    < section className="content-container">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          setRestData(filter((rest) => gte(rest?.rating, 4), restData));
        }}>Top Rated Restaurants</button>
      </div>
      <div className="rest-container">
        {map(
          (restData) => (
            <RestaurantCard restData={restData} key={restData.id} />
          ),
          restData
        )}
      </div>
    </section>
  );
}

export default Body;  