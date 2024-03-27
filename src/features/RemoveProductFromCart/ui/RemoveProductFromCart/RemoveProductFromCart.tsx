import React from 'react';
import cn from 'clsx';
import { Button } from 'src/shared/ui/Button';
import RemoveIcon from 'src/shared/assets/icons/Trash.svg';
import s from './RemoveProductFromCart.module.scss';

interface RemoveProductFromCartProps {
  className?: string;
}

export const RemoveProductFromCart = ({ className }: RemoveProductFromCartProps) => {
  return (
    <Button
      className={cn(s.outer, className)}
      icon={{ element: RemoveIcon }}
      variant="clean"
      size="xs"
    />
  );
};
