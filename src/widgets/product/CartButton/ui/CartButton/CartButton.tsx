import React from 'react';
import cn from 'clsx';
import { Button, ButtonProps, ButtonSize } from 'src/shared/ui/Button';
import BugIcon from 'src/shared/assets/icons/Bag.svg';
import MinusIcon from 'src/shared/assets/icons/Minus.svg';
import PlusIcon from 'src/shared/assets/icons/Plus.svg';
import s from './CartButton.module.scss';

interface CartButtonProps extends ButtonProps {
  count: number;
  size?: ButtonSize;
}

export const CartButton = ({ count, size = 's', disabled, className }: CartButtonProps) => {
  if (count < 0) throw new Error('count не может быть отрицательным');

  const button = (() => (
    <Button label="В корзину" full icon={{ element: BugIcon }} size={size} />
  ))();

  const controls = (() => (
    <>
      <Button size={size} icon={{ element: MinusIcon }} disabled={disabled} />
      <span className={s.count}>{count}</span>
      <Button size={size} icon={{ element: PlusIcon }} disabled={disabled} />
    </>
  ))();

  return <div className={cn(s.outer, className)}>{count > 0 ? controls : button}</div>;
};
