import { createAppAsyncThunk } from 'src/shared/types/storeTypes';
import { getNormalizedProducts } from '../../lib/utils/getNormalizedProducts';
import { Products } from '../types/productTypes';

export const loadMoreProducts = createAppAsyncThunk()(
  'catalog/loadMoreProducts',
  async (_, { getState }) => {
    const products = getState().catalog.products;
    return await new Promise<Products>((resolve) => {
      setTimeout(() => {
        resolve({ ...products, ...getNormalizedProducts() });
      }, 1000);
    });
  }
);
