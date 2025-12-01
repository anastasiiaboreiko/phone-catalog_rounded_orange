import React from 'react';
import { Product } from '../../../../shared/types/Product';
import './HotPricesSlider.module.scss';
// eslint-disable-next-line max-len
import { SliderLeftRoundButton } from '../../../../shared/ui/buttons/sliderLerfRound';
// eslint-disable-next-line max-len
import { SliderRightRoundButton } from '../../../../shared/ui/buttons/sliderRightRound';
import { ProductCard } from '../../../../shared/ui/productCard';
import styles from './HotPricesSlider.module.scss';

type Props = {
  products: Product[];
};

export const HotPricesSlider: React.FC<Props> = ({ products }) => {
  // eslint-disable-next-line no-console
  console.log('products:', products.length);
  const discounted = products
    .filter(product => product.fullPrice > product.price)
    .map(product => ({
      ...product,
      discount: product.fullPrice - product.price,
    }))
    .sort((product1, product2) => product2.discount - product1.discount);

  // eslint-disable-next-line no-console
  console.log('discounted:', discounted.length);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h2>Hot prices</h2>
        <div className={styles.sliderButtons}>
          <SliderLeftRoundButton />
          <SliderRightRoundButton />
        </div>
      </div>
      <div className={styles.products}>
        {discounted.map(product => (
          <ProductCard product={product} showFullPrice key={product.id} />
        ))}
      </div>
    </div>
  );
};
