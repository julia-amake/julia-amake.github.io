import React, { memo, useRef } from 'react';
import { ProductsList } from 'src/entities/Product/ui/ProductsList';
import { useInfiniteScroll } from 'src/shared/lib/hooks';
import { Button } from 'src/shared/ui/Button';
import { useProductsList } from '../../lib/hooks/useProductsList';
import s from '../../styles/ProductsInfinityList.module.scss';

interface ProductsInfinityListProps {
  className?: string;
}

export const ProductsInfinityList = memo(({ className }: ProductsInfinityListProps) => {
  const { products, isLoading, loadMoreProducts } = useProductsList();

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useInfiniteScroll({ triggerRef, wrapperRef, action: loadMoreProducts });

  return (
    <div className={className} ref={wrapperRef}>
      <ProductsList className={s.list} products={products} isLoading={isLoading} />
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
