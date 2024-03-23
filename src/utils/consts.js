// Mock Data
export const restaurantData = [
  {
    id: 1,
    name: "Asha Tiffins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iyhixkvgcssweqmvesfk",
    cuisines: "South Indian, North Indian, Chinese",
    rating: 4.5,
    eta: "15 - 20 mins",
  },
  {
    id: 2,
    name: "Udupi Food Hub",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hpulkfkzoh6kamqaaxdx",
    cuisines: "South Indian, North Indian, Chats",
    rating: 4.0,
    eta: "20 - 25 mins",
  },
  {
    id: 3,
    name: "A2B - Adyar Ananda Bhavan",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/25628dc877707a25db5891c1e1c74b67",
    cuisines: "South Indian, North Indian, Deserts",
    rating: 3.9,
    eta: "30 - 45 mins",
  },
  {
    id: 4,
    name: "McDonalds - Brookefield",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f62564e14944753903849c4ef673af4d",
    cuisines: "Burgers, Beverages",
    rating: 4.1,
    eta: "30 - 45 mins",
  },
  {
    id: 5,
    name: "KFC",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wwbhls455g2syydrkmvo",
    cuisines: "American, Burgers, Snacks",
    rating: 4,
    eta: "30 -35 mins"
  }
];

// Swiggy API
export const FETCH_MENU_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721";

export const individualRestaurantData = [
  {
    id: 1,
    name: "Asha Tiffins",
    cuisines: "South Indian, North Indian, Chinese",
    menu: [
      {
        id: 1,
        name: "Masala Dosa",
        price: 80
      },
      {
        id: 2,
        name: "Idli Vada",
        price: 110
      },
      {
        id: 3,
        name: "Poori Saagu",
        price: 80
      },
      {
        id: 4,
        name: "Chole Bature",
        price: 120
      },
      {
        id: 5,
        name: "Paani Puri",
        price: 60
      }
    ]
  }
];

// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/hpncnz3sfv3gigsukkts - Image for Menu