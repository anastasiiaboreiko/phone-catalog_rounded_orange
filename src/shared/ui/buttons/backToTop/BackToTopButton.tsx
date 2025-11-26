import styles from './BackToTopButton.module.scss';
// import sliderButton from './slider_button.svg';

export const BackToTopButton = ({ className = '' }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {/* <img src={sliderButton} alt="Back to top" /> */}
      <span className={styles.icon} aria-hidden="true" />
    </button>
  );
};
