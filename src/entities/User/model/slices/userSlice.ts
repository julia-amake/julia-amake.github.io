import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_TOKEN_KEY } from 'src/shared/consts/localStorage';
import { signInRTK, signUpRTK } from 'src/widgets/Header/ui/UserBar/api/authApi';
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
  rejected(state: UserSchema, error = '') {
    state.isLoading = false;
    state.error = error;
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    login: (state, { payload }: PayloadAction<string>) => {
      handlers.fulfilled(state);
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, payload);
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
  extraReducers: (builder) =>
    builder
      .addMatcher(signInRTK.matchPending, (state) => {
        handlers.pending(state);
      })
      .addMatcher(signInRTK.matchFulfilled, (state, { type, payload: { token } }) => {
        userSlice.caseReducers.login(state, { type, payload: token });
      })
      .addMatcher(signInRTK.matchRejected, (state, { payload }) => {
        handlers.rejected(state, payload as unknown as string);
      })
      .addMatcher(signUpRTK.matchPending, (state) => {
        handlers.pending(state);
      })
      .addMatcher(signUpRTK.matchFulfilled, (state, { type, payload: { token } }) => {
        userSlice.caseReducers.login(state, { type, payload: token });
      })
      .addMatcher(signUpRTK.matchRejected, (state, { payload }) => {
        handlers.rejected(state, payload as unknown as string);
      }),

  selectors: {
    selectToken: (state) => state.token,
    selectUserData: (state) => state.userData,
    selectIsAuth: (state): boolean => !!userSlice.getSelectors().selectUserData(state),
  },
});

export const { login, logout, setNewPassword } = userSlice.actions;
export const { selectToken, selectUserData, selectIsAuth } = userSlice.selectors;
export const userReducer = userSlice.reducer;
