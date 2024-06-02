import React, { memo } from 'react';
import cn from 'clsx';
import { Heading } from 'src/shared/ui/Heading';
import { ProductsInfinityList } from 'src/widgets/product/ProductsInfinityList';
import s from './CatalogPage.module.scss';

interface CatalogPageProps {
  className?: string;
}

export const CatalogPage = memo((props: CatalogPageProps) => {
  const { className } = props;

  return (
    <div className={cn(s.outer, className)}>
      <Heading as="h1" size="h3">
        Каталог
      </Heading>
      <ProductsInfinityList />
    </div>
  );
});

CatalogPage.displayName = 'CatalogPage';
