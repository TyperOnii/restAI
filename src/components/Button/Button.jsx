import classes from "./Button.module.css";

export default function Button({ children, styles, onClick }) {
  return (
    <button
      className={[classes.default, classes[styles]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
