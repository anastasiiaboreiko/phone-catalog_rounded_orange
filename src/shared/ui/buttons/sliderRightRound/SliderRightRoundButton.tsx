import styles from './SliderRightRoundButton.module.scss';

export const SliderRightRoundButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon} aria-hidden="true" />
    </button>
  );
};
