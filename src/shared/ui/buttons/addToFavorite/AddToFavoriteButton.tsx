import styles from './AddToFavoriteButton.module.scss';

export const AddToFavoriteButton = () => {
  return (
    <button className={styles.button}>
      <img
        src={`${process.env.PUBLIC_URL}/img/icons/favorites.svg`}
        alt="favorite"
      />
    </button>
  );
};
