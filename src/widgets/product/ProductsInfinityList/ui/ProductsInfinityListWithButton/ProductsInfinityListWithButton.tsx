import React, { memo } from 'react';
import cn from 'clsx';
import { selectCatalogIsLoading, selectCatalogProductsList } from 'src/entities/Product';
import { loadMoreProducts } from 'src/entities/Product/model/services/loadMoreProducts';
import { ProductsList } from 'src/entities/Product/ui/ProductsList';
import { CartButton } from 'src/features/CartButton/ui/CartButton';
import { useAppDispatch, useAppSelector } from 'src/shared/lib/hooks';
import { Button } from 'src/shared/ui/Button';
import s from '../../styles/ProductsInfinityList.module.scss';

interface ProductsInfinityListWithButtonProps {
  className?: string;
}

export const ProductsInfinityListWithButton = memo(
  ({ className }: ProductsInfinityListWithButtonProps) => {
    const products = useAppSelector(selectCatalogProductsList);
    const isLoading = useAppSelector(selectCatalogIsLoading);

    const dispatch = useAppDispatch();

    const handleLoadMore = () => {
      if (isLoading) return;
      dispatch(loadMoreProducts());
    };

    return (
      <div className={cn(s.outer, className)}>
        <ProductsList
          className={s.list}
          products={products}
          isLoading={isLoading}
          renderCartButton={(product) => <CartButton product={product} />}
        />
        <Button
          className={s.button}
          label="Показать еще"
          onClick={handleLoadMore}
          variant="secondary"
          size="m"
          disabled={isLoading}
        />
      </div>
    );
  }
);

ProductsInfinityListWithButton.displayName = 'ProductsInfinityListWithButton';
