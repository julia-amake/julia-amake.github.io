import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'src/shared/types/storeTypes';
import { getNormalizedProducts } from '../../lib/utils/getNormalizedProducts';
import { Products } from '../types/productTypes';

export const loadMoreProducts = createAsyncThunk<Products, void, ThunkConfig>(
  'catalog/loadMoreProducts',
  async (_, { getState }) => {
    const products = getState().catalog.products;
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...products, ...getNormalizedProducts() });
      }, 1000);
    });
  }
);
