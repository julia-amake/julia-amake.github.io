import { Product } from 'src/entities/Product';

export interface CartProduct {
  product: Product;
  quantity: number;
}

export type CartItems = { [id: string]: CartProduct };

export interface CartSchema {
  products: CartItems;
}
