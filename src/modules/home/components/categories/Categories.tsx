import React from 'react';
import { Product } from '../../../../shared/types/Product';
import styles from './Categories.module.scss';
import phoneImg from '../../../../img/category-phones1 copy.png';
import tabletImg from '../../../../img/category-tablets copy.png';
import accessoryImg from '../../../../img/category-assessories1.png';
import { Link, useSearchParams } from 'react-router-dom';

type Props = {
  products: Product[];
};

export const Categories: React.FC<Props> = ({ products }) => {
  const [searchParams] = useSearchParams();

  const phones = products.filter(
    product => product.category === 'phones',
  ).length;
  const tablets = products.filter(
    product => product.category === 'tablets',
  ).length;
  const accessories = products.filter(
    product => product.category === 'accessories',
  ).length;

  const categories = [
    {
      name: 'Mobile phones',
      quantity: phones,
      img: phoneImg,
      bgColor: '#6D6474',
      pathname: 'phones',
    },
    {
      name: 'Tablets',
      quantity: tablets,
      img: tabletImg,
      bgColor: '#8D8D92',
      pathname: 'tablets',
    },
    {
      name: 'Accessories',
      quantity: accessories,
      img: accessoryImg,
      bgColor: '#973D5F',
      pathname: 'accessories',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.categoryTitle}>Shop by category</h2>
      <div className={styles.categories}>
        {categories.map(category => (
          <Link
            to={{
              pathname: `/${category.pathname}`,
              search: searchParams.toString(),
            }}
            key={category.name}
            className={styles.categoryCard}
            onClick={() => {}}
          >
            <div
              className={styles.categoryImg}
              style={{ backgroundColor: category.bgColor }}
            >
              <img
                src={category.img}
                alt={category.name}
                className={styles.img}
              />
            </div>
            <div className={styles.categoryInfo}>
              <h4 className={styles.sectionTitle}>{category.name}</h4>
              <p className={`body-text ${styles.info}`}>
                {category.quantity} models
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
