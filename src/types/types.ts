export interface RestaurantData {
  id: number;
  name: string;
  image: string;
  cuisines: string;
  rating: number;
  eta: string;
  promoted: boolean;
}

export interface RestaurantCardProps {
  restData: RestaurantData;
  setShowIndex?: Function;
}

export interface UserContextType {
  userName: string;
  setUserName?: Function;
}

export interface SubMenu {
  id: number;
  name: string;
  price: number;
}

export interface RestaurantMenuProps {
  id: number;
  name: string;
  cuisines: string;
  menu: {
    recommended: SubMenu[];
    popular: SubMenu[];
  }
}

export interface CartState {
  items: SubMenu[];
}