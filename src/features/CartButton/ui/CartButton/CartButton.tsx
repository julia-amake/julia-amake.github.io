import React, { memo, useCallback } from 'react';
import cn from 'clsx';
import { addProductToCart, removeProductFromCart, selectCartProducts } from 'src/entities/Cart';
import { Product } from 'src/entities/Product';
import { useAppDispatch, useAppSelector } from 'src/shared/lib/hooks';
import { Button, ButtonProps, ButtonSize } from 'src/shared/ui/Button';
import BugIcon from 'src/shared/assets/icons/Bag.svg';
import MinusIcon from 'src/shared/assets/icons/Minus.svg';
import PlusIcon from 'src/shared/assets/icons/Plus.svg';
import s from './CartButton.module.scss';

interface CartButtonProps extends ButtonProps {
  product: Product;
  size?: ButtonSize;
}

export const CartButton = memo(({ product, size = 's', disabled, className }: CartButtonProps) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectCartProducts);
  const { id } = product;
  const count = products[id]?.quantity || 0;

  const handleAddProduct = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  const handleRemoveProduct = useCallback(() => {
    dispatch(removeProductFromCart(id));
  }, [dispatch, id]);

  const button = (() => (
    <Button label="В корзину" full icon={BugIcon} size={size} onClick={handleAddProduct} />
  ))();

  const controls = (() => (
    <>
      <Button size={size} icon={MinusIcon} disabled={disabled} onClick={handleRemoveProduct} />
      <span className={s.count}>{count}</span>
      <Button size={size} icon={PlusIcon} disabled={disabled} onClick={handleAddProduct} />
    </>
  ))();

  return <div className={cn(s.outer, className)}>{count > 0 ? controls : button}</div>;
});

CartButton.displayName = 'CartButton';
