import { useReducer } from "react";

const INITIAL_FORM = { user: "", text: "", rating: 1 };

function reducer(state, { type, payload }) {
  switch (type) {
    case "setName":
      return {
        ...state,
        user: payload,
      };
    case "setText":
      return {
        ...state,
        text: payload,
      };
    case "increaseRating":
      return {
        ...state,
        rating: payload,
      };
    case "decreaseRating":
      return {
        ...state,
        rating: payload,
      };
    case "save":
      return INITIAL_FORM;
  }
}

export function useReviewForm() {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

  const setName = (value) => dispatch({ type: "setName", payload: value });
  const setText = (value) => dispatch({ type: "setText", payload: value });
  const increaseRating = (value) =>
    dispatch({ type: "increaseRating", payload: value });
  const decreaseRating = (value) =>
    dispatch({ type: "decreaseRating", payload: value });
  const save = (value) => dispatch({ type: "save", payload: value });

  return {
    form,
    setName,
    setText,
    increaseRating,
    decreaseRating,
    save,
  };
}
