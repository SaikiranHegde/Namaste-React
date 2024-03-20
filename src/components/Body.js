import RestaurantCard from "./RestaurantCard";
import { map, filter, gte } from "ramda";
import { RestaurantData } from "../utils/consts";
import { useState } from "react";

const Body = () => {
  // Stateful value and a function to update it
  const [restData, setRestData] = useState(RestaurantData);

  return (
    <section className="content-container">
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