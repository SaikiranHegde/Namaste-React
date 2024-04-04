import React from "react";
import { useEffect, useState } from "react";
import { individualRestaurantData } from "../utils/consts";
import { delay, of } from "rxjs";
import { useParams } from "react-router-dom";
import { find, propEq } from "ramda";
import { isNilOrEmpty } from "../utils/util";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { RestaurantMenuProps, SubMenu } from "../types/types";

const RestaurantMenu: React.FC = () => {
  const [selectedRestData, setSelectedRestData] = useState<RestaurantMenuProps>();

  // Route path param for selected restaurant
  const { id } = useParams();

  const dispatch = useDispatch();
  const onMenuClick = (menu: SubMenu) => {
    // Dispatch addItem action
    dispatch(addItem(menu));
  }

  useEffect(() => {
    const sub = of(individualRestaurantData)
      .pipe(
        delay(1000)
      ).subscribe((data: RestaurantMenuProps[]) => {
        setSelectedRestData(find(propEq(+id!, 'id'), data));
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
        <div className="text-lg font-semibold">{selectedRestData?.name}</div>
        <div className="text-xs">{selectedRestData?.cuisines}</div>
        <div className="mt-3">
          <div className="text-base font-medium">Recommended</div>
          <div className="flex flex-col gap-y-2">
            {selectedRestData?.menu?.recommended?.map((menu: SubMenu) => (
              <div
                className="rest-info w-max p-4 border border-solid border-gray-600 bg-white rounded cursor-pointer"
                key={menu.id}
                onClick={() => {
                  onMenuClick(menu);
                }}
              >
                {menu.name} - Rs.{menu.price}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3">
          <div className="text-base font-medium">Popular</div>
          <div className="flex flex-col gap-y-2">
            {selectedRestData?.menu?.popular?.map((menu: SubMenu) => (
              <div
                className="rest-info w-max p-4 border border-solid border-gray-600 bg-white rounded cursor-pointer"
                key={menu.id}
                onClick={() => {
                  onMenuClick(menu);
                }}
              >
                {menu.name} - Rs.{menu.price}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestaurantMenu;