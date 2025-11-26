import { useEffect, useState } from 'react';
import { BannerSlider } from './components/bannerSlider/BannerSlidaer';
import { Categories } from './components/categories/Categories';
import { HotPricesSlider } from './components/hotPricesSlider/HotPricesSlider';
import { NewModelsSlider } from './components/newModelsSlider/NewModelsSlider';
import styles from './HomePage.module.scss';
import { Product } from '../../shared/types/Product';
import { getProducts } from '../../shared/api/api';

export const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setErrorMessage(false);

    getProducts()
      .then(setProducts)
      .catch(() => setErrorMessage(true))
      .finally(() => setLoading(false));
  }, []);

  // eslint-disable-next-line no-console, no-console
  // console.log('newPositions: ', newPositions);

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
          <NewModelsSlider products={products} />
          <Categories products={products} />
          <HotPricesSlider products={products} />
        </>
      )}
    </div>
  );
};
