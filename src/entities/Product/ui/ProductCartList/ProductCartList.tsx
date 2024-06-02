import React, { memo, ReactElement } from 'react';
import cn from 'clsx';
import { useProductsList } from 'src/widgets/product/ProductsInfinityList/lib/hooks/useProductsList';
import { ProductCartItem } from '../ProductCartItem';
import s from './ProductCartList.module.scss';

interface ProductCartListProps {
  removeButton: ReactElement;
  isLoading?: boolean;
  className?: string;
}

export const ProductCartList = memo(({ removeButton, className }: ProductCartListProps) => {
  const { products } = useProductsList(3);

  return (
    <div className={cn(s.outer, className)}>
      {products?.map((p) => (
        <ProductCartItem
          title={p.name}
          desc={p.desc}
          count={1}
          price={p.price}
          pic={p.photo}
          removeBtn={removeButton}
          key={p.id}
        />
      ))}
    </div>
  );
});

ProductCartList.displayName = 'ProductCartList';
