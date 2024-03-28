import React, { ReactElement } from 'react';
import cn from 'clsx';
import { formatNumberToLocal } from 'src/shared/lib/utils';
import { PicWrapper } from 'src/shared/ui/PicWrapper';
import s from './ProductListItem.module.scss';

export interface ProductListItemProps {
  title: string;
  desc?: string;
  price: number;
  pic?: string;
  className?: string;
  cartBtn: ReactElement;
}

export const ProductListItem = ({
  title,
  desc,
  pic,
  price,
  className,
  cartBtn,
}: ProductListItemProps) => {
  return (
    <article className={cn(s.outer, className)}>
      <PicWrapper className={s.pic} pic={pic} alt={title} />
      <div className={s.content}>
        <div className={s.price}>{formatNumberToLocal(price)} руб.</div>
        <div className={s.about}>
          <h3 className={s.title}>{title}</h3>
          {desc && <p className={s.desc}>&nbsp;— {desc}</p>}
        </div>
      </div>
      <div className={s.cart}>{cartBtn}</div>
    </article>
  );
};
