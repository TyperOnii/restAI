import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurantSlice/restaurantSlice";
import { dishSlice } from "./entities/dishSlice/dishSlice";
import { reviewSlice } from "./entities/reviewSlice/reviewSlice";
import { userSlice } from "./entities/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});
