import React, { memo, ReactElement } from 'react';
import cn from 'clsx';
import { formatNumberToLocal } from 'src/shared/lib/utils';
import { PicWrapper } from 'src/shared/ui/PicWrapper';
import s from './CartItem.module.scss';

export interface CartItemProps {
  title: string;
  desc?: string;
  count: number;
  price: number;
  pic?: string;
  className?: string;
  removeBtn: ReactElement;
}

export const CartItem = memo(
  ({ title, desc, count, price, pic, className, removeBtn }: CartItemProps) => {
    return (
      <div className={cn(s.outer, className)}>
        <div className={s.about}>
          <PicWrapper className={s.pic} pic={pic} />
          <div className={s.info}>
            <p className={s.title}>{title}</p>
            {desc && <p className={s.desc}>{desc}</p>}
          </div>
        </div>
        <div className={s.count}>{count}</div>
        <div className={s.price}>{formatNumberToLocal(price * count)} руб.</div>
        {removeBtn}
      </div>
    );
  }
);

CartItem.displayName = 'CartItem';
