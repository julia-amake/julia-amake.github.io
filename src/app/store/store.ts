import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from 'src/entities/Cart';
import { catalogReducer } from 'src/entities/Product';
import { profileReducer, userReducer } from 'src/entities/User';
import { $api } from 'src/shared/api/api';
import { appReducer } from '../model/slices/appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    profile: profileReducer,
    cart: cartReducer,
    catalog: catalogReducer,
  },
  devTools: __IS_DEV__,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
        },
      },
    }),
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
