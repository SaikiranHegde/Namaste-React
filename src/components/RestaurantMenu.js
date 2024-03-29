import { useEffect, useState } from "react";
import { individualRestaurantData } from "../utils/consts";
import { delay, of } from "rxjs";
import { useParams } from "react-router-dom";
import { find, map, propEq } from "ramda";
import { isNilOrEmpty } from "../utils/util";
import Loader from "./Loader";

const RestaurantMenu = () => {
  const [selectedRestData, setSelectedRestData] = useState();

  // Route path param for selected restaurant
  const { id } = useParams();

  useEffect(() => {
    const sub = of(individualRestaurantData)
      .pipe(
        delay(1000)
      ).subscribe((data) => {
        setSelectedRestData(find(propEq(+id, 'id'), data));
      });

      return function unsub() {
        sub.unsubscribe();
      };
  }, [id]);

  if (isNilOrEmpty(selectedRestData)) {
    return <Loader />;
  }

  return (
    <section>
      <div className="rest-name">{selectedRestData.name}</div>
      <div className="rest-info">{selectedRestData.cuisines}</div>
      <div className="menu-container">
        {map(
          (menu) => (
            <div className="rest-info" key={menu.id}>
              {menu.name} - Rs.{menu.price}
            </div>
          ),
          selectedRestData?.menu
        )}
      </div>
    </section>
  );
}

export default RestaurantMenu;