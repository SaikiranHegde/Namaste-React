import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

const appStore = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export type AppState = ReturnType<typeof appStore.getState>

export default appStore;