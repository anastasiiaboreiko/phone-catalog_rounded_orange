// eslint-disable-next-line max-len
import React, { useContext, useState } from 'react';
// eslint-disable-next-line max-len
import { SliderLeftRoundButton } from '../../../../shared/ui/buttons/sliderLerfRound';
// eslint-disable-next-line max-len
import { SliderRightRoundButton } from '../../../../shared/ui/buttons/sliderRightRound/SliderRightRoundButton';
import './NewModelsSlider.module.scss';
import styles from './NewModelsSlider.module.scss';
import { ProductCard } from '../../../../shared/ui/productCard/ProductCard';
import { useSliderPerPage } from '../../../../shared/hooks/useSliderPerPage';
import { getIndexes } from '../../../../shared/utils/getIndexes';
import { ProductsContext } from '../../../../shared/context/ProductsContext';

export const NewModelsSlider = () => {
  //#region Context and Variables
  const { products } = useContext(ProductsContext);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const perPage = useSliderPerPage();
  const newProducts = products.filter(product => product.year === 2022);
  const productsQuantity = newProducts.length;
  const totalPages = Math.max(1, Math.ceil(productsQuantity / perPage));

  const { firstIndex, lastIndex } = getIndexes(perPage, currentPage);
  const currentProducts = newProducts.slice(firstIndex, lastIndex);

  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;
  //#endregion

  //#region Handlers
  const handleLeftButtonClick = () => {
    if (!prevDisabled) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRightButtonClick = () => {
    if (!nextDisabled) {
      setCurrentPage(currentPage + 1);
    }
  };
  //#endregion

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h2 className={styles.categoryTitle}>
          <span className={styles.tabletText}>Brand new models</span>
          <span className={styles.mobileText}>
            Brand new
            <br />
            models
          </span>
        </h2>
        <div className={styles.sliderButtons}>
          <SliderLeftRoundButton
            onPageChange={handleLeftButtonClick}
            prevDisabled={prevDisabled}
          />
          <SliderRightRoundButton
            onPageChange={handleRightButtonClick}
            nextDisabled={nextDisabled}
          />
        </div>
      </div>
      <div className={styles.productsOuter}>
        <div className={styles.products}>
          {currentProducts.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
