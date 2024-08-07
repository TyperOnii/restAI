import styles from "./User.module.css";

export default function User({ name }) {
  return <h2 className={styles.name}>{name}</h2>;
}
