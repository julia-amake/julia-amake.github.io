import { AuthFormValues } from 'src/features/forms/AuthForm';
import { AuthResult } from 'src/features/forms/AuthForm/model/types/authTypes';
import { rtkApi } from 'src/shared/api/rtkApi';
import { COMMAND_ID } from 'src/shared/consts/api';
import { LOCAL_STORAGE_TOKEN_KEY } from 'src/shared/consts/localStorage';
import { ErrorResponse } from 'src/shared/lib/utils/axios/axiosErrorHandler';

export const authApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    signInRTK: build.mutation<AuthResult, AuthFormValues>({
      query: (arg) => ({
        url: '/signin',
        method: 'POST',
        body: arg,
      }),
      transformErrorResponse: (response: { data: ErrorResponse; status: number }) =>
        response.data.errors[0].message || response.status,
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, data.token);
        } catch (error) {
          console.error('Ошибка авторизации:', error);
        }
      },
    }),
    signUpRTK: build.mutation<AuthResult, AuthFormValues>({
      query: (arg) => ({
        url: '/signup',
        method: 'POST',
        body: {
          ...arg,
          commandId: COMMAND_ID,
        },
      }),
      transformErrorResponse: (response: { data: ErrorResponse; status: number }) =>
        response.data.errors[0].message || response.status,
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, data.token);
        } catch (error) {
          console.error('Ошибка регистрации:', error);
        }
      },
    }),
  }),
});

export const { useSignInRTKMutation, useSignUpRTKMutation } = authApi;
export const { signInRTK, signUpRTK } = authApi.endpoints;
