import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from 'src/entities/Cart';
import { profileReducer, userReducer } from 'src/entities/User';
import { appReducer } from '../model/slices/appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    profile: profileReducer,
    cart: cartReducer,
  },
  devTools: __IS_DEV__,
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore['dispatch'];
