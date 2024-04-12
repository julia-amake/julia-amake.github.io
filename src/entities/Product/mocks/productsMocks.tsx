import React from 'react';
import { ProductListItemProps } from 'src/entities/Product/ui/ProductListItem';
import { createRandomProduct, Product } from 'src/homeworks/ts1/3_write';
import { CartButton } from 'src/widgets/product/CartButton/ui/CartButton';

export const getProducts = (count: number): ProductListItemProps[] => {
  if (count < 1) return [];
  return Array.from({ length: count }, () => {
    const product: Product = createRandomProduct(String(new Date()));
    return { ...product, cartBtn: <CartButton count={0} /> };
  });
};
