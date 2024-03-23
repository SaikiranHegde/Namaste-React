import { useEffect, useState } from "react";
import { individualRestaurantData } from "../utils/consts";
import { delay, of } from "rxjs";
import { useParams } from "react-router-dom";
import { find, map, propEq } from "ramda";
import { isNilOrEmpty } from "../utils/util";
import { Flex, Spin } from "antd";

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
  }, []);

  if (isNilOrEmpty(selectedRestData)) {
    return <Flex align="center" justify="center" gap="middle">
      <Spin size="large"/>
    </Flex>;
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