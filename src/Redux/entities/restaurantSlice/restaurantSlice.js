import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../data/normalizedData";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map((restaurant) => restaurant.id),
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  selectors: {
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantsIds: (state) => state.ids,
  },
});

export const { selectRestaurantById, selectRestaurantsIds } =
  restaurantSlice.selectors;
