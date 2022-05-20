import styles from "../styles/Gift.module.css";

export function Gift() {
  return(
    <div id={styles.gift}>
      <div className={styles.cover}></div>
      <div className={styles.body}></div>
      <div className={styles.loop1}></div>
      <div className={styles.loop2}></div>
    </div>
  );
}