import styles from './SliderLeftRoundButton.module.scss';

export const SliderLeftRoundButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon} aria-hidden="true" />
    </button>
  );
};
