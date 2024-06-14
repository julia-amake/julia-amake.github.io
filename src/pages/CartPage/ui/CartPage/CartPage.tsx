import React, { memo, useCallback } from 'react';
import { CartList } from 'src/entities/Cart';
import { RemoveProductFromCart } from 'src/features/RemoveProductFromCart';
import { Heading } from 'src/shared/ui/Heading';
import s from './CartPage.module.scss';

export const CartPage = memo(() => {
  const renderRemoveButton = useCallback((id: string) => {
    return <RemoveProductFromCart id={id} removeAll />;
  }, []);

  return (
    <div className={s.outer}>
      <Heading as="h1" size="h3">
        Корзина
      </Heading>
      <CartList removeButton={renderRemoveButton} />
    </div>
  );
});

CartPage.displayName = 'CartPage';
