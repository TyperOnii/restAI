import Counter from "./Counter";

export default function ContainerRating({
  rating,
  increaseRatingHandler,
  decreaseRatingHandler,
}) {
  return (
    <Counter
      value={rating}
      increment={(e) => {
        e.preventDefault();
        rating < 5 && increaseRatingHandler(rating + 1);
      }}
      decrement={(e) => {
        e.preventDefault();
        rating > 1 && decreaseRatingHandler(rating - 1);
      }}
    />
  );
}
