// import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
// import favorite from '../../../img/icons/favourites.svg';
// import cart from '../../../img/icons/cart.svg';
// import burgerMenu from '../../../img/icons/menu.svg';
// import close from '../../../img/icons/close.svg';
import { Logo } from '../../ui/logo';
import { NavBarHeader } from '../../ui/navBarHeader';
import { ButtonBarHeader } from '../../ui/buttonBarHeader/ButtonBarHeader';

export const Header = () => {
  // const location = useLocation();
  // const isBurgerOpen = location.pathname === '/burgerMenu';

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.navBar}>
          <Logo imgClassName={styles.navLogo} />
          <NavBarHeader className={`uppercase ${styles.navLinks}`} />
        </div>
        <ButtonBarHeader />
        {/* <div className={styles.buttonBar}>
          <NavLink
            to="favorites"
            className={({ isActive }) =>
              isActive ? styles.activeButton : styles.button
            }
          >
            <img src={favorite} alt="Favorite" className={styles.img} />
          </NavLink>
          <NavLink
            to="cart"
            className={({ isActive }) =>
              isActive ? styles.activeButton : styles.button
            }
          >
            <img src={cart} alt="Cart" />
          </NavLink>
          <NavLink
            to={isBurgerOpen ? '/' : '/burgerMenu'}
            className={styles.buttonMobile}
          >
            <img
              src={isBurgerOpen ? close : burgerMenu}
              alt={isBurgerOpen ? 'Close menu' : 'Open menu'}
            />
          </NavLink>
        </div> */}
      </div>
    </header>
  );
};
