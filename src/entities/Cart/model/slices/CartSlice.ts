import { createSlice, current, type PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'src/entities/Product';
import { LOCAL_STORAGE_CART_PRODUCTS_KEY } from 'src/shared/consts/localStorage';
import { CartSchema } from '../types/CartTypes';

interface AddProductToCartPayload {
  product: Product;
  quantity: number;
}

interface RemoveProductToCartPayload {
  id: string;
  removeAll: boolean;
}

const initialState: CartSchema = {
  products: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProductsFromLocalStorage: (state) => {
      const cart = localStorage.getItem(LOCAL_STORAGE_CART_PRODUCTS_KEY);
      if (!cart) return;
      state.products = JSON.parse(cart);
    },
    addProductToCart: {
      reducer: (state, { payload }: PayloadAction<AddProductToCartPayload>) => {
        const { product, quantity } = payload;
        const cartProduct = state.products[product.id];

        if (cartProduct) {
          cartProduct.quantity += quantity;
        } else
          state.products[product.id] = {
            product: product,
            quantity,
          };
        localStorage.setItem(
          LOCAL_STORAGE_CART_PRODUCTS_KEY,
          JSON.stringify(current(state).products)
        );
      },
      prepare: (product: Product, quantity = 1) => ({
        payload: { product, quantity },
      }),
    },
    removeProductFromCart: {
      reducer: (state, { payload }: PayloadAction<RemoveProductToCartPayload>) => {
        const { id, removeAll } = payload;
        const product = state.products[id];
        if (!product) return;
        if (removeAll || product.quantity <= 1) {
          delete state.products[id];
        } else {
          product.quantity--;
        }
        localStorage.setItem(
          LOCAL_STORAGE_CART_PRODUCTS_KEY,
          JSON.stringify(current(state).products)
        );
      },
      prepare: (id: string, removeAll = false) => ({ payload: { id, removeAll } }),
    },
    clearCart: (state) => {
      state.products = {};
    },
  },
  selectors: {
    selectCartProducts: (state) => state.products,
    selectCartProductsList: (state) => Object.values(state.products),
  },
});

export const { setProductsFromLocalStorage, addProductToCart, removeProductFromCart, clearCart } =
  cartSlice.actions;
export const { selectCartProducts, selectCartProductsList } = cartSlice.selectors;
export const cartReducer = cartSlice.reducer;
