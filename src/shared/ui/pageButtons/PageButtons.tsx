import React from 'react';
import styles from './PageButtons.module.scss';
import { getPageIndexes } from '../../utils/getPageIndexes';

type Props = {
  pages: number[];
  onPageChange: (page: number) => void;
  currentPage: number;
};

export const PageButtons: React.FC<Props> = ({
  pages,
  onPageChange,
  currentPage,
}) => {
  // const getPageIndexes = () => {
  //   const lastPage = pages[pages.length - 1];
  //   let firstIndex = 0;
  //   let lastIndex = 3;

  //   if (currentPage <= 4) {
  //     firstIndex = 0;
  //     lastIndex = firstIndex + 3;
  //   } else if (currentPage === lastPage) {
  //     lastIndex = lastPage - 1;
  //     firstIndex = lastIndex - 3;
  //   } else {
  //     lastIndex = currentPage - 1;
  //     firstIndex = lastIndex - 3;
  //   }

  //   return { firstIndex, lastIndex };
  // };
  const { firstIndex, lastIndex } = getPageIndexes(currentPage);
  const currentPages = pages.slice(firstIndex, lastIndex);

  // eslint-disable-next-line no-console
  console.log('firstIndex, lastIndex', firstIndex, lastIndex);

  return (
    <div className={styles.pageButtons}>
      {currentPages.map(page => (
        <button
          key={page}
          className={page === currentPage ? styles.buttonActive : styles.button}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
