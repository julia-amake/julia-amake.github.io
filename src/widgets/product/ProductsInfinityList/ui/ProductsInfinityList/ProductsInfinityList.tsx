import React, { memo, useRef } from 'react';
import {
  Product,
  ProductsList,
  selectCatalogIsLoading,
  selectCatalogProductsList,
} from 'src/entities/Product';
import { loadMoreProducts } from 'src/entities/Product/model/services/loadMoreProducts';
import { CartButton } from 'src/features/CartButton/ui/CartButton';
import { useAppDispatch, useAppSelector, useInfiniteScroll } from 'src/shared/lib/hooks';
import { Button } from 'src/shared/ui/Button';
import s from '../../styles/ProductsInfinityList.module.scss';

interface ProductsInfinityListProps {
  className?: string;
}

export const ProductsInfinityList = memo(({ className }: ProductsInfinityListProps) => {
  const products = useAppSelector(selectCatalogProductsList);
  const isLoading = useAppSelector(selectCatalogIsLoading);
  const dispatch = useAppDispatch();

  const handleLoadMore = () => {
    if (isLoading) return;
    dispatch(loadMoreProducts());
  };

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useInfiniteScroll({ triggerRef, wrapperRef, action: handleLoadMore });

  return (
    <div className={className} ref={wrapperRef}>
      <ProductsList
        className={s.list}
        products={products}
        isLoading={isLoading}
        renderCartButton={(product: Product) => <CartButton product={product} />}
      />
      <Button
        className={s.button}
        label="Показать еще"
        variant="secondary"
        size="m"
        disabled={isLoading}
        ref={triggerRef}
        onClick={loadMoreProducts}
      />
    </div>
  );
});

ProductsInfinityList.displayName = 'ProductsInfinityList';
