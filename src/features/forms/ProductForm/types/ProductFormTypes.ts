import { Product } from 'src/homeworks/ts1/3_write';

export interface ProductFormData extends Omit<Product, 'id' | 'createdAt' | 'category'> {
  categoryId: string;
}
