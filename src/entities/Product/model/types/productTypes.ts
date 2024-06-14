import { CategoryName } from '../../mocks/productsMocks';

export interface Category {
  id: string;
  name: CategoryName;
  photo?: string;
}

export interface Product {
  id: string;
  name: string;
  photo?: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
}
