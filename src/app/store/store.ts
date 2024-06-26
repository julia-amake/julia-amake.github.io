import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from 'src/app/model/sagas/rootWatcher';
import { cartReducer } from 'src/entities/Cart';
import { catalogReducer } from 'src/entities/Product';
import { profileReducer, userReducer } from 'src/entities/User';
import { $api } from 'src/shared/api/api';
import { rtkApi } from 'src/shared/api/rtkApi';
import { appReducer } from '../model/slices/appSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    profile: profileReducer,
    cart: cartReducer,
    catalog: catalogReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  devTools: __IS_DEV__,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
        },
      },
    }).concat(rtkApi.middleware, sagaMiddleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootWatcher);
