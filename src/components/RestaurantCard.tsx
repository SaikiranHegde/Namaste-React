import React from "react";
import { defaultTo } from "ramda";
import { RestaurantCardProps } from "../types/types";

// Inline CSS
// Presentational Component
const RestaurantCard: React.FC<RestaurantCardProps> = ({ restData, setShowIndex }) => {
  return (
    <section className="rest-card" style={{
      width: '220px',
      height: '280px',
    }}>
      <img alt={restData?.name} className="rest-img" src={restData?.image} />
      <div className="rest-name text-gray-700 p-[1px]">{defaultTo('Asha Tiffins', restData.name)}</div>
      <div className="rest-info">{restData?.cuisines}</div>
      <div className="rest-info">{restData?.rating} Stars</div>
      <div className="rest-info">{restData?.eta}</div>
      {/* {setShowIndex()} -> This is a callback function which internally calls Parents components setShowIndex(index) */}
    </section>
  );
}

// Higher Order Component
export const withPromotedLabel = (RestaurantCard: any) => {
  return ({ restData }: RestaurantCardProps) => {
    return (
      <section>
        <div className="text-xs w-max bg-gray-400 p-1 rounded-sm absolute mt-[2px] ml-[2px]">Promoted</div>
        <RestaurantCard restData={restData}/>
      </section>
    );
  }
}

export default RestaurantCard;