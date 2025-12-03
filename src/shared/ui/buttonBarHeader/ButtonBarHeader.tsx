import { NavLink, useLocation } from 'react-router-dom';
import React from 'react';
import styles from './ButtonBarHeader.module.scss';

type Props = {
  className?: string;
};

export const ButtonBarHeader: React.FC<Props> = ({ className = '' }) => {
  const location = useLocation();
  const isBurgerOpen = location.pathname === '/burgerMenu';

  return (
    <div className={`${styles.buttonBar} ${className}`}>
      <NavLink
        to="favorites"
        className={({ isActive }) =>
          isActive ? styles.activeButton : styles.button
        }
      >
        <img
          src={`${process.env.PUBLIC_URL}/img/icons/favorites.svg`}
          alt="Favorite"
          className={styles.img}
        />
      </NavLink>
      <NavLink
        to="cart"
        className={({ isActive }) =>
          isActive ? styles.activeButton : styles.button
        }
      >
        <img src={`${process.env.PUBLIC_URL}/img/icons/cart.svg`} alt="Cart" />
      </NavLink>
      <NavLink
        to={isBurgerOpen ? '/' : '/burgerMenu'}
        className={styles.buttonMobile}
      >
        <img
          src={
            isBurgerOpen
              ? `${process.env.PUBLIC_URL}/img/icons/close.svg`
              : `${process.env.PUBLIC_URL}/img/icons/menu.svg`
          }
          alt={isBurgerOpen ? 'Close menu' : 'Open menu'}
        />
      </NavLink>
    </div>
  );
};
