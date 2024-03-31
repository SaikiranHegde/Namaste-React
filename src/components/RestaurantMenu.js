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
    <section className="flex justify-center">
      <div>
        <div className="text-lg font-semibold">{selectedRestData.name}</div>
        <div className="text-xs">{selectedRestData.cuisines}</div>
        <div className="mt-3">
          <div className="text-base font-medium">Recommended</div>
          {map(
            (menu) => (
              <div className="rest-info" key={menu.id}>
                {menu.name} - Rs.{menu.price}
              </div>
            ),
            selectedRestData?.menu.recommended
          )}
        </div>
        <div className="mt-3">
          <div className="text-base font-medium">Popular</div>
          {map(
            (menu) => (
              <div className="rest-info" key={menu.id}>
                {menu.name} - Rs.{menu.price}
              </div>
            ),
            selectedRestData?.menu.popular
          )}
        </div>
      </div>
    </section>
  );
}

export default RestaurantMenu;