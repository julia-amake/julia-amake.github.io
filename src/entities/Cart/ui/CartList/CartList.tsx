import React, { memo, ReactElement } from 'react';
import cn from 'clsx';
import { useSelector } from 'react-redux';
import { selectCartProductsList } from '../../model/slices/CartSlice';
import { CartItem } from '../CartItem';
import s from './CartList.module.scss';

interface CartListProps {
  removeButton: (id: string) => ReactElement;
  isLoading?: boolean;
  className?: string;
}

export const CartList = memo(({ removeButton, className }: CartListProps) => {
  const products = useSelector(selectCartProductsList);

  if (!products.length) return 'В корзине ничего нет';

  return (
    <div className={cn(s.outer, className)}>
      {products?.map(({ product, quantity }) => (
        <CartItem
          title={product.name}
          desc={product.desc}
          count={quantity}
          price={product.price}
          pic={product.photo}
          removeBtn={removeButton(product.id)}
          key={product.id}
        />
      ))}
    </div>
  );
});

CartList.displayName = 'CartList';
