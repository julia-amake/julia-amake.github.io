export { CartList } from './ui/CartList';
export {
  cartReducer,
  setProductsFromLocalStorage,
  addProductToCart,
  removeProductFromCart,
  clearCart,
  selectCartProducts,
  selectCartProductsList,
} from './model/slices/CartSlice';

export type { CartSchema } from './model/types/CartTypes';
