import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../data/normalizedData";

const initialState = {
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {}),
  ids: normalizedUsers.map((user) => user.id),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  selectors: {
    selectUserById: (state, id) => state.entities[id],
    selectUsersIds: (state) => state.ids,
  },
});

export const { selectUserById, selectUsersIds } = userSlice.selectors;
