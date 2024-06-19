import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_TOKEN_KEY } from 'src/shared/consts/localStorage';
import {
  fetchSignUpThunk,
  fetchSingInThunk,
} from 'src/widgets/Header/ui/UserBar/model/services/fetchSingInThunk';
import { fakeUserData, TEST_TOKEN } from '../../mocks/data';
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
    login: (state, { payload }: PayloadAction<string>) => {
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, TEST_TOKEN);
      state.token = payload;
      state.userData = payload ? fakeUserData : null;
    },
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
    selectIsAuth: (state) => !!state.userData,
    selectAuthLoading: (state) => state.isLoading,
    selectAuthError: (state) => state.error,
  },
});

export const { login, logout, setNewPassword } = userSlice.actions;
export const { selectToken, selectUserData, selectIsAuth, selectAuthLoading, selectAuthError } =
  userSlice.selectors;
export const userReducer = userSlice.reducer;
