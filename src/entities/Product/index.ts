export { ProductsList } from './ui/ProductsList';
export type { Product, Category } from './model/types/productTypes';
export {
  catalogReducer,
  addProduct,
  selectCatalogProducts,
  selectCatalogProductsList,
  selectCatalogIsLoading,
} from './model/slices/catalogSlice';

export { type CatalogSchema } from './model/types/productTypes';
