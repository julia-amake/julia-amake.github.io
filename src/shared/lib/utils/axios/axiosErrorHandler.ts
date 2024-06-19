import { AxiosError, isAxiosError } from 'axios';

interface ErrorResponseItem {
  message: string;
}

export interface ErrorResponse {
  errors: ErrorResponseItem[];
}

export const errorHandler = <Response = ErrorResponse>(
  err: Error | AxiosError<Response>,
  onError: (err: string) => void,
  defaultMassage = 'Неизвестная ошибка'
) => {
  const message = isAxiosError(err)
    ? err.response?.data.errors[0]?.message || err.message
    : defaultMassage;
  return onError(message);
};
