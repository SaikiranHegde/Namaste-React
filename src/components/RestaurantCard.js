import { defaultTo } from "ramda";

// Inline CSS
// Presentational Component
const RestaurantCard = (props) => {
  return (
    <section className="rest-card" style={{
      width: '220px',
      height: '280px',
    }}>
      <img alt={props.restData?.name} className="rest-img" src={props.restData?.image} />
      <div className="rest-name text-gray-700 p-[1px]">{defaultTo('Asha Tiffins', props.restData.name)}</div>
      <div className="rest-info">{props.restData?.cuisines}</div>
      <div className="rest-info">{props.restData?.rating} Stars</div>
      <div className="rest-info">{props.restData?.eta}</div>
    </section>
  );
}

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <section>
        <div className="text-xs w-max bg-gray-400 p-1 rounded-sm absolute mt-[2px] ml-[2px]">Promoted</div>
        <RestaurantCard restData={props.restData}/>
      </section>
    );
  }
}

export default RestaurantCard;