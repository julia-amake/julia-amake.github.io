import React, { memo } from 'react';
import { ProductCartList } from 'src/entities/Product/ui/ProductCartList';
import { RemoveProductFromCart } from 'src/features/RemoveProductFromCart/ui/RemoveProductFromCart';
import { Heading } from 'src/shared/ui/Heading';
import s from './CartPage.module.scss';

export const CartPage = memo(() => {
  return (
    <div className={s.outer}>
      <Heading as="h1" size="h3">
        Корзина
      </Heading>
      <ProductCartList removeButton={<RemoveProductFromCart />} />
    </div>
  );
});

CartPage.displayName = 'CartPage';
