import React, { useState } from 'react';
import { Product } from '../../../../shared/types/Product';
import './HotPricesSlider.module.scss';
// eslint-disable-next-line max-len
import { SliderLeftRoundButton } from '../../../../shared/ui/buttons/sliderLerfRound';
// eslint-disable-next-line max-len
import { SliderRightRoundButton } from '../../../../shared/ui/buttons/sliderRightRound';
import { ProductCard } from '../../../../shared/ui/productCard';
import styles from './HotPricesSlider.module.scss';
import { useSliderPerPage } from '../../../../shared/hooks/useSliderPerPage';
import { getIndexes } from '../../../../shared/utils/getIndexes';

type Props = {
  products: Product[];
};

export const HotPricesSlider: React.FC<Props> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPage = useSliderPerPage();

  const discounted = products
    .filter(product => product.fullPrice > product.price)
    .map(product => ({
      ...product,
      discount: product.fullPrice - product.price,
    }))
    .sort((product1, product2) => product2.discount - product1.discount)
    .slice(0, 30);

  const totalProducts = discounted.length;
  const { firstIndex, lastIndex } = getIndexes(perPage, currentPage);
  const currentProducts = discounted.slice(firstIndex, lastIndex);
  const safePerPage = Math.max(1, perPage);
  const totalPages = Math.max(1, Math.ceil(totalProducts / safePerPage));
  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h2 className={styles.categoryTitle}>Hot prices</h2>
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
            <ProductCard product={product} showFullPrice key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
