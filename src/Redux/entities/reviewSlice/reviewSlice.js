import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../data/normalizedData";

const initialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {}),
  ids: normalizedReviews.map((review) => review.id),
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
    selectReviewsIds: (state) => state.ids,
  },
});

export const { selectReviewById, selectReviewsIds } = reviewSlice.selectors;
