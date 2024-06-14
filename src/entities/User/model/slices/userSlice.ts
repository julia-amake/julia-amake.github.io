import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_TOKEN_KEY } from 'src/shared/consts/localStorage';
import { fakeUserData, TEST_TOKEN } from '../../mocks/data';
import { UserSchema } from '../types/userTypes';

export const userInitialState: UserSchema = {
  token: '',
  userData: null,
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
  selectors: {
    selectToken: (state) => state.token,
    selectUserData: (state) => state.userData,
    selectIsAuth: (state) => !!state.userData,
  },
});

export const { login, logout, setNewPassword } = userSlice.actions;
export const { selectToken, selectUserData, selectIsAuth } = userSlice.selectors;
export const userReducer = userSlice.reducer;
