// eslint-disable-next-line max-len
import React from 'react';
import { Product } from '../../../../shared/types/Product';
// eslint-disable-next-line max-len
import { SliderLeftRoundButton } from '../../../../shared/ui/buttons/sliderLerfRound';
// eslint-disable-next-line max-len
import { SliderRightRoundButton } from '../../../../shared/ui/buttons/sliderRightRound/SliderRightRoundButton';
import './NewModelsSlider.module.scss';
import styles from './NewModelsSlider.module.scss';
import { ProductCard } from '../../../../shared/ui/productCard/ProductCard';

type Props = {
  products: Product[];
};

export const NewModelsSlider: React.FC<Props> = ({ products }) => {
  const newPositions = [...products].filter(product => product.year === 2022);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h2>Brand new models</h2>
        <div className={styles.sliderButtons}>
          <SliderLeftRoundButton />
          <SliderRightRoundButton />
        </div>
      </div>
      <div className={styles.products}>
        {newPositions.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
