import { type PayloadAction } from '@reduxjs/toolkit';
import { AxiosError, type AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { login, loginFailed } from 'src/entities/User';
import { AuthFormValues } from 'src/features/forms/AuthForm';
import { AuthResult } from 'src/features/forms/AuthForm/model/types/authTypes';
import { $api } from 'src/shared/api/api';
import { COMMAND_ID } from 'src/shared/consts/api';
import { getErrorMessage } from 'src/shared/lib/utils/axios/axiosErrorHandler';

const ERROR_SIGN_IN_MESSAGE = 'Ошибка авторизации';
const ERROR_SIGN_UP_MESSAGE = 'Ошибка регистрации';

function* fetchSingInSaga(params: PayloadAction<AuthFormValues>) {
  try {
    const response: AxiosResponse<AuthResult> = yield call($api.post, '/signin', params.payload);
    yield put(login(response.data.token));
  } catch (err) {
    yield put(
      loginFailed(getErrorMessage(err as Error | AxiosError<Response>, ERROR_SIGN_IN_MESSAGE))
    );
  }
}

function* fetchSingUpSaga(params: PayloadAction<AuthFormValues>) {
  try {
    const response: AuthResult = yield call($api.post, '/signup', {
      ...params.payload,
      commandId: COMMAND_ID,
    });
    yield put(login(response.token));
  } catch (err) {
    yield put(
      loginFailed(getErrorMessage(err as Error | AxiosError<Response>, ERROR_SIGN_UP_MESSAGE))
    );
  }
}

export function* authSaga() {
  yield takeEvery('user/loginFetch', fetchSingInSaga);
  yield takeEvery('user/registerFetch', fetchSingUpSaga);
}
