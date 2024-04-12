import { useCallback, useMemo, useState } from 'react';
import { getProducts } from 'src/entities/Product/mocks/productsMocks';
import { ProductListItemProps } from 'src/entities/Product/ui/ProductListItem';

interface UseProductsListResult {
  products: ProductListItemProps[] | null;
  isLoading: boolean;
  loadMoreProducts: () => void;
}

export const useProductsList = (): UseProductsListResult => {
  const [products, setProducts] = useState<ProductListItemProps[]>(() => getProducts(12));
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreProducts = useCallback(() => {
    if (isLoading) return;

    setIsLoading(true);
    setTimeout(() => {
      setProducts((products) => {
        return [...products, ...getProducts(12)];
      });
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  return useMemo(
    () => ({
      products,
      isLoading,
      loadMoreProducts,
    }),
    [isLoading, loadMoreProducts, products]
  );
};
