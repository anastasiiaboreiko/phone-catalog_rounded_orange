import React from 'react';
import styles from './AddToFavoriteButton.module.scss';

type Props = {
  onFavorite: () => void;
  isProductFavorite: boolean | undefined;
};

export const AddToFavoriteButton: React.FC<Props> = ({
  onFavorite,
  isProductFavorite,
}) => {
  return (
    <button className={styles.button} onClick={onFavorite}>
      {!isProductFavorite ? (
        <img
          src={`${process.env.PUBLIC_URL}/img/icons/favorites.svg`}
          alt="favorite"
        />
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/img/icons/favoritesSelected.svg`}
          alt="favoriteSelected"
        />
      )}
    </button>
  );
};
