import { useContext } from 'react';
import { BannerSlider } from './components/bannerSlider/BannerSlidaer';
import { Categories } from './components/categories/Categories';
import { HotPricesSlider } from './components/hotPricesSlider/HotPricesSlider';
import { NewModelsSlider } from './components/newModelsSlider/NewModelsSlider';
import styles from './HomePage.module.scss';
// import { Product } from '../../shared/types/Product';
// import { getProducts } from '../../shared/api/api';
import { ProductsContext } from '../../shared/context/ProductsContext';

export const HomePage = () => {
  const { loading, errorMessage } = useContext(ProductsContext);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.titleHidden}>Product Catalog</h1>
      <h1 className={styles.title}>
        <span className={styles.desktopText}>
          Welcome to Nice Gadgets store!
        </span>
        <span className={styles.mobileText}>
          Welcome to Nice
          <br />
          Gadgets store!
        </span>
      </h1>

      {!loading && !errorMessage && (
        <>
          <BannerSlider />
          <NewModelsSlider />
          <Categories />
          <HotPricesSlider />
        </>
      )}
    </div>
  );
};
