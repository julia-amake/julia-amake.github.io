import { Product } from 'src/entities/Product';

export interface ProductFormData extends Omit<Product, 'id' | 'createdAt' | 'category'> {
  categoryId: string;
}
