import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../data/normalizedData";

const initialState = {
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;
    return acc;
  }, {}),
  ids: normalizedDishes.map((dish) => dish.id),
};

export const dishSlice = createSlice({
  name: "dish",
  initialState,
  selectors: {
    selectDishById: (state, id) => state.entities[id],
    selectDishesIds: (state) => state.ids,
  },
});

export const { selectDishById, selectDishesIds } = dishSlice.selectors;
