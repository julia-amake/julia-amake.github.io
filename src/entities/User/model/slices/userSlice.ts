import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { AuthFormValues } from 'src/features/forms/AuthForm';
import { LOCAL_STORAGE_TOKEN_KEY } from 'src/shared/consts/localStorage';
import {
  fetchSignUpThunk,
  fetchSingInThunk,
} from 'src/widgets/Header/ui/UserBar/model/services/fetchSingInThunk';
import { fakeUserData } from '../../mocks/data';
import { UserSchema } from '../types/userTypes';

export const userInitialState: UserSchema = {
  token: '',
  userData: null,
  isLoading: false,
  error: '',
};

const handlers = {
  pending(state: UserSchema) {
    state.isLoading = true;
    state.error = '';
  },
  fulfilled(state: UserSchema) {
    state.isLoading = false;
    state.error = '';
  },
  rejected(state: UserSchema, { payload }: PayloadAction<string | undefined>) {
    state.isLoading = false;
    state.error = payload;
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    loginFetch: (state, action: PayloadAction<AuthFormValues>) => {
      handlers.pending(state);
    },
    registerFetch: (state, action: PayloadAction<AuthFormValues>) => {
      handlers.pending(state);
    },
    login: (state, { payload }: PayloadAction<string>) => {
      handlers.fulfilled(state);
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, payload);
      state.token = payload;
      state.userData = payload ? fakeUserData : null;
    },
    loginFailed: handlers.rejected,
    logout: (state) => {
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, userInitialState.token);
      state.token = userInitialState.token;
      state.userData = null;
    },
    setNewPassword: (state, { payload }: PayloadAction<string>) => {
      if (payload && state.userData) state.userData.password = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingInThunk.pending, handlers.pending)
      .addCase(fetchSingInThunk.fulfilled, handlers.fulfilled)
      .addCase(fetchSingInThunk.rejected, handlers.rejected)
      .addCase(fetchSignUpThunk.pending, handlers.pending)
      .addCase(fetchSignUpThunk.fulfilled, handlers.fulfilled)
      .addCase(fetchSignUpThunk.rejected, handlers.rejected);
  },
  selectors: {
    selectToken: (state) => state.token,
    selectUserData: (state) => state.userData,
    selectIsAuth: (state): boolean => !!userSlice.getSelectors().selectUserData(state),
    selectAuthLoading: (state) => state.isLoading,
    selectAuthError: (state) => state.error,
  },
});

export const { loginFetch, registerFetch, login, loginFailed, logout, setNewPassword } =
  userSlice.actions;
export const { selectToken, selectUserData, selectIsAuth, selectAuthLoading, selectAuthError } =
  userSlice.selectors;
export const userReducer = userSlice.reducer;
