import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getNormalizedProducts } from '../../lib/utils/getNormalizedProducts';
import { loadMoreProducts } from '../services/loadMoreProducts';
import { CatalogSchema, Product, Products } from '../types/productTypes';

const initialState: CatalogSchema = {
  products: getNormalizedProducts(),
  isLoading: false,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<Product>) => {
      state.products[payload.id] = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMoreProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadMoreProducts.fulfilled, (state, { payload }: PayloadAction<Products>) => {
        state.products = payload;
        state.isLoading = false;
      })
      .addCase(loadMoreProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
  selectors: {
    selectCatalogProducts: (state) => state.products,
    selectCatalogProductsList: (state) => Object.values(state.products),
    selectCatalogIsLoading: (state) => state.isLoading,
  },
});

export const { addProduct } = catalogSlice.actions;
export const { selectCatalogProducts, selectCatalogProductsList, selectCatalogIsLoading } =
  catalogSlice.selectors;
export const catalogReducer = catalogSlice.reducer;
