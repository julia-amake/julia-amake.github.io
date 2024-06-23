import { AuthFormValues } from 'src/features/forms/AuthForm';
import { AuthResult } from 'src/features/forms/AuthForm/model/types/authTypes';
import { rtkApi } from 'src/shared/api/rtkApi';
import { COMMAND_ID } from 'src/shared/consts/api';
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
    }),
  }),
});

export const { useSignInRTKMutation, useSignUpRTKMutation } = authApi;
