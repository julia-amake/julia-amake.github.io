import { useCallback, useMemo, useState } from 'react';
import { Product } from 'src/entities/Product';
import { getProducts } from 'src/entities/Product/mocks/productsMocks';

interface UseProductsListResult {
  products: Product[] | null;
  isLoading: boolean;
  loadMoreProducts: () => void;
}

export const useProductsList = (count: number = 12): UseProductsListResult => {
  const [products, setProducts] = useState<Product[]>(() => getProducts(count));
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreProducts = useCallback(() => {
    if (isLoading) return;

    setIsLoading(true);
    setTimeout(() => {
      setProducts((products) => {
        return [...products, ...getProducts(count)];
      });
      setIsLoading(false);
    }, 1000);
  }, [count, isLoading]);

  return useMemo(
    () => ({
      products,
      isLoading,
      loadMoreProducts,
    }),
    [isLoading, loadMoreProducts, products]
  );
};
