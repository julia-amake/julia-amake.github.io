import { AxiosError } from 'axios';
import { login } from 'src/entities/User';
import { AuthFormValues } from 'src/features/forms/AuthForm';
import { AuthResult } from 'src/features/forms/AuthForm/model/types/authTypes';
import { COMMAND_ID } from 'src/shared/consts/api';
import { errorHandler } from 'src/shared/lib/utils';
import { createAppAsyncThunk } from 'src/shared/types/storeTypes';

const ERROR_SIGN_IN_MESSAGE = 'Ошибка авторизации';
const ERROR_SIGN_UP_MESSAGE = 'Ошибка регистрации';

export const fetchSingInThunk = createAppAsyncThunk()(
  'auth/signin',
  async (params: AuthFormValues, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;

    try {
      const response = await extra.api.post<AuthResult>('/signin', params);
      if (!response.data) return rejectWithValue(ERROR_SIGN_IN_MESSAGE);
      dispatch(login(response.data.token));
      return response.data;
    } catch (err) {
      return errorHandler(
        err as Error | AxiosError<Response>,
        rejectWithValue,
        ERROR_SIGN_IN_MESSAGE
      );
    }
  }
);

export const fetchSignUpThunk = createAppAsyncThunk()(
  'auth/signup',
  async (params: AuthFormValues, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;

    try {
      const response = await extra.api.post<AuthResult>('/signup', {
        ...params,
        commandId: COMMAND_ID,
      });
      if (!response.data) return rejectWithValue(ERROR_SIGN_UP_MESSAGE);
      dispatch(login(response.data.token));
      return response.data;
    } catch (err) {
      return errorHandler(
        err as Error | AxiosError<Response>,
        rejectWithValue,
        ERROR_SIGN_UP_MESSAGE
      );
    }
  }
);
