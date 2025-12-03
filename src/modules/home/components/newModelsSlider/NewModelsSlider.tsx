// eslint-disable-next-line max-len
import React, { useState } from 'react';
import { Product } from '../../../../shared/types/Product';
// eslint-disable-next-line max-len
import { SliderLeftRoundButton } from '../../../../shared/ui/buttons/sliderLerfRound';
// eslint-disable-next-line max-len
import { SliderRightRoundButton } from '../../../../shared/ui/buttons/sliderRightRound/SliderRightRoundButton';
import './NewModelsSlider.module.scss';
import styles from './NewModelsSlider.module.scss';
import { ProductCard } from '../../../../shared/ui/productCard/ProductCard';
import { useSliderPerPage } from '../../../../shared/hooks/useSliderPerPage';
import { getIndexes } from '../../../../shared/utils/getIndexes';

type Props = {
  products: Product[];
};

export const NewModelsSlider: React.FC<Props> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPage = useSliderPerPage();

  const newPositions = [...products].filter(product => product.year === 2022);

  const totalProducts = newPositions.length;
  const { firstIndex, lastIndex } = getIndexes(perPage, currentPage);
  const currentProducts = newPositions.slice(firstIndex, lastIndex);
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

  // eslint-disable-next-line no-console
  console.log(
    'currentPage',
    currentPage,
    'totalProducts:',
    totalProducts,
    'lastIndex:',
    lastIndex,
    'firstIndex:',
    firstIndex,
    'currentProducts:',
    currentProducts,
  );

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
