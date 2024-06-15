import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { selectCatalogProducts } from 'src/entities/Product';
import { ProductDetails } from 'src/entities/Product/ui/ProductDetails';
import { CartButton } from 'src/features/CartButton/ui/CartButton';
import { useAppSelector } from 'src/shared/lib/hooks';

export const ProductDetailsPage = memo(() => {
  const { id } = useParams();
  console.log(id);
  const product = useAppSelector(selectCatalogProducts)[id || ''];

  if (!product) return 'Нет такого товара';

  const { name, price, category, desc, photo } = product;

  return (
    <ProductDetails
      title={name}
      price={price}
      category={category}
      desc={desc}
      {...(photo ? { pics: [photo] } : {})}
      cartBtn={<CartButton product={product} />}
    />
  );
});

ProductDetailsPage.displayName = 'ProductDetailsPage';
