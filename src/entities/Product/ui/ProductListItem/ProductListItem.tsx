import React, { memo, ReactElement } from 'react';
import cn from 'clsx';
import { Category } from 'src/homeworks/ts1/3_write';
import { formatNumberToLocal } from 'src/shared/lib/utils';
import { PicWrapper } from 'src/shared/ui/PicWrapper';
import s from './ProductListItem.module.scss';

export interface ProductListItemProps {
  id: string;
  name: string;
  desc?: string;
  price: number;
  oldPrice?: number;
  photo?: string;
  category: Category;
  createdAt: string;
  className?: string;
  cartBtn: ReactElement;
}

export const ProductListItem = memo(
  ({ name, desc, photo, price, oldPrice, className, cartBtn }: ProductListItemProps) => {
    return (
      <article className={cn(s.outer, className)}>
        <div className={s.picWrapper}>
          <PicWrapper className={s.pic} pic={photo} alt={name} />
        </div>
        <div className={s.content}>
          <div className={s.prices}>
            <ins className={s.price}>{formatNumberToLocal(price)} руб.</ins>
            {oldPrice && <del className={s.oldPrice}>{formatNumberToLocal(oldPrice)} руб.</del>}
          </div>
          <div className={s.about}>
            <h3 className={s.title}>{name}</h3>
            {desc && <p className={s.desc}>&nbsp;— {desc}</p>}
          </div>
        </div>
        <div className={s.cart}>{cartBtn}</div>
      </article>
    );
  }
);

ProductListItem.displayName = 'ProductListItem';
