import { NavLink } from 'react-router-dom';
import { NavBarHeader } from '../../../../shared/ui/navBarHeader';
import styles from './BurgerMenuPage.module.scss';

export const BurgerMenuPage = () => {
  return (
    <div className={styles.menuContent}>
      <main className={styles.menuMain}>
        <NavBarHeader className={`uppercase ${styles.navLinks}`} />
      </main>
      <footer className={styles.menuFooter}>
        <NavLink
          to="/favorites"
          // className={styles.footerButton}
          className={({ isActive }) =>
            isActive ? styles.footerButtonActive : styles.footerButton
          }
        >
          <img
            className={styles.img}
            src={`${process.env.PUBLIC_URL}/img/icons/favorites.svg`}
            alt="Favorite"
          />
        </NavLink>

        <NavLink to="/cart" className={styles.footerButton}>
          <img
            className={styles.img}
            src={`${process.env.PUBLIC_URL}/img/icons/cart.svg`}
            alt="Cart"
          />
        </NavLink>
      </footer>
    </div>
  );
};
