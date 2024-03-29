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
      <div className="rest-name text-gray-700 p-[5px]">{defaultTo('Asha Tiffins', props.restData.name)}</div>
      <div className="rest-info">{props.restData?.cuisines}</div>
      <div className="rest-info">4.5 Stars</div>
      <div className="rest-info">15 - 20 mins</div>
    </section>
  );
}

export default RestaurantCard;