import styles from "./Board.module.css";

interface BoardProps {
  readonly width?: number;
  readonly height?: number;
}

export const Board = ({ width, height }: BoardProps) => {
  const w = width ?? 2;
  const h = height ?? 2;

  const spaces = [];

  return (
    <div className={styles.container}>
      <div className={`${styles.space}`}></div>
      <div className={`${styles.space} ${styles["out-of-bounds"]}`}></div>
      <div className={`${styles.space} ${styles["out-of-bounds"]}`}></div>
      <div className={`${styles.space}`}></div>

      <div className={`${styles.space} ${styles["out-of-bounds"]}`}></div>
      <div className={`${styles.space} ${styles["in-bounds"]}`}></div>
      <div className={`${styles.space} ${styles["in-bounds"]}`}></div>
      <div className={`${styles.space} ${styles["out-of-bounds"]}`}></div>

      <div className={`${styles.space} ${styles["out-of-bounds"]}`}></div>
      <div className={`${styles.space} ${styles["in-bounds"]}`}></div>
      <div className={`${styles.space} ${styles["in-bounds"]}`}></div>
      <div className={`${styles.space} ${styles["out-of-bounds"]}`}></div>

      <div className={`${styles.space}`}></div>
      <div className={`${styles.space} ${styles["out-of-bounds"]}`}></div>
      <div className={`${styles.space} ${styles["out-of-bounds"]}`}></div>
      <div className={`${styles.space}`}></div>
    </div>
  );
};
