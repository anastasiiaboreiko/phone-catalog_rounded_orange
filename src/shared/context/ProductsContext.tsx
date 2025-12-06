import React, { useEffect, useMemo, useState } from 'react';
import { Product } from '../types/Product';
import { getProducts } from '../api/api';

export const ProductsContext = React.createContext({
  products: [] as Product[],
  loading: false,
  errorMessage: false,
});

type Props = {
  children: React.ReactNode;
};

export const ProductsProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    setLoading(true);
    setErrorMessage(false);

    getProducts()
      .then(setProducts)
      .catch(() => setErrorMessage(true))
      .finally(() => setLoading(false));
  }, []);

  const value = useMemo(
    () => ({
      products,
      loading,
      errorMessage,
    }),
    [products, loading, errorMessage],
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
