import { NavLink } from 'react-router-dom';
import styles from './PhonesPage.module.scss';
import { SortOption } from '../../../shared/types/SortOption';
import { useContext, useState } from 'react';
import { SortBySelect } from '../../../shared/ui/sortBySelect';
import { ItemsOnPageSelect } from '../../../shared/ui/itemsOnPageSelect';
import { ProductsList } from '../../../shared/ui/productsList';
import { ProductsContext } from '../../../shared/context/ProductsContext';
// eslint-disable-next-line max-len
import { SliderLeftRoundButton } from '../../../shared/ui/buttons/sliderLerfRound';
import { getIndexes } from '../../../shared/utils/getIndexes';
// eslint-disable-next-line max-len
import { SliderRightRoundButton } from '../../../shared/ui/buttons/sliderRightRound';
import { PageButtons } from '../../../shared/ui/pageButtons/PageButtons';

export const PhonesPage = () => {
  const { products } = useContext(ProductsContext);
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [perPage, setPerPage] = useState<number | 'all'>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalProducts = products.filter(
    product => product.category === 'phones',
  );
  // const pageQuantity = Math.max(1, Math.ceil(totalProducts.length / +perPage));
  const pageQuantity =
    perPage === 'all'
      ? 1
      : Math.max(1, Math.ceil(totalProducts.length / perPage));
  const { firstIndex, lastIndex } = getIndexes(
    perPage,
    currentPage,
    totalProducts.length,
  );
  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= pageQuantity;

  const handleLeftButtonClick = () => {
    if (!prevDisabled) {
      setCurrentPage(currentPage - 1);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleRightButtonClick = () => {
    if (!nextDisabled) {
      setCurrentPage(currentPage + 1);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentProducts = totalProducts.slice(firstIndex, lastIndex);
  const pages = Array.from({ length: pageQuantity }, (_, i) => i + 1);

  // eslint-disable-next-line no-console
  console.log('pages', pages);

  // eslint-disable-next-line no-console
  console.log('currentPage', currentPage);

  // eslint-disable-next-line no-console
  console.log('currentProducts: ', currentProducts);

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <NavLink to="/" className={styles.button}>
          <img
            src={`${process.env.PUBLIC_URL}/img/icons/home.svg`}
            alt="Favorite"
            className={styles.img}
          />
        </NavLink>
        <img
          src={`${process.env.PUBLIC_URL}/img/icons/arrowRight.svg`}
          alt="arrow right"
        />
        <p className={styles.sectionTitle}>Phones</p>
      </div>
      <h1 className={styles.title}>Mobile Phones</h1>
      <p className={`body-text ${styles.info}`}>
        {totalProducts.length} models
      </p>

      <div className={styles.specsBlock}>
        <SortBySelect value={sortOption} onChange={setSortOption} />
        <ItemsOnPageSelect
          value={perPage}
          onChange={value => {
            setCurrentPage(1); // логічно скидати на першу сторінку
            setPerPage(
              typeof value === 'number' || value === 'all'
                ? value
                : Number(value),
            );
          }}
        />
      </div>

      <ProductsList phones={currentProducts} />
      <div className={styles.pageButtonsBar}>
        <SliderLeftRoundButton
          onPageChange={handleLeftButtonClick}
          prevDisabled={prevDisabled}
        />
        <PageButtons
          pages={pages}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />

        <SliderRightRoundButton
          onPageChange={handleRightButtonClick}
          nextDisabled={nextDisabled}
        />
      </div>
    </div>
  );
};
