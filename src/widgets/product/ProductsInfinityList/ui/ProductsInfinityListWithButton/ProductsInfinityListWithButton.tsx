import React, { memo } from 'react';
import cn from 'clsx';
import { ProductsList } from 'src/entities/Product/ui/ProductsList';
import { CartButton } from 'src/features/CartButton/ui/CartButton';
import { Button } from 'src/shared/ui/Button';
import { useProductsList } from '../../lib/hooks/useProductsList';
import s from '../../styles/ProductsInfinityList.module.scss';

interface ProductsInfinityListWithButtonProps {
  className?: string;
}

export const ProductsInfinityListWithButton = memo(
  ({ className }: ProductsInfinityListWithButtonProps) => {
    const { products, isLoading, loadMoreProducts } = useProductsList();

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
          onClick={loadMoreProducts}
          variant="secondary"
          size="m"
          disabled={isLoading}
        />
      </div>
    );
  }
);

ProductsInfinityListWithButton.displayName = 'ProductsInfinityListWithButton';
