import styles from './Column.module.css';

const Column = () => {
  return (
    <div className={styles.column}>
      <div className={styles.column__header}></div>
      <div className={styles.column__content}></div>
    </div>
  );
};

export default Column;
