import { useCallback } from 'react';
import { useFormik } from 'formik';
import { FormikHelpers } from 'formik/dist';
import { login } from 'src/entities/User';
import { AuthFormValues } from 'src/features/forms/AuthForm';
import { AuthResult } from 'src/features/forms/AuthForm/model/types/authTypes';
import { $api } from 'src/shared/api/api';
import { COMMAND_ID } from 'src/shared/consts/api';
import { useAppDispatch } from 'src/shared/lib/hooks';
import { errorHandler } from 'src/shared/lib/utils';
import { UserBarAuthMode } from '../../ui/UserBarAuth/UserBarAuth';

const initialValues: AuthFormValues = {
  email: '',
  password: '',
};

export const useUserBarAuth = (mode: UserBarAuthMode, onSubmit?: () => void) => {
  const dispatch = useAppDispatch();

  const isSignInMode = mode === 'signIn';

  const handleSubmit = useCallback(
    (values: AuthFormValues, { resetForm, setStatus }: FormikHelpers<AuthFormValues>) => {
      if (isSignInMode) {
        $api
          .post<AuthResult>('/signin', values)
          .then((r) => {
            dispatch(login(r.data.token));
            resetForm({ values: initialValues });
            onSubmit?.();
          })
          .catch((err) => errorHandler(err, setStatus));
      } else {
        $api
          .post<AuthResult>('/signup', {
            ...values,
            commandId: COMMAND_ID,
          })
          .then((r) => {
            dispatch(login(r.data.token));
            resetForm({ values: initialValues });
            onSubmit?.();
          })
          .catch((err) => errorHandler(err, setStatus));
      }
    },
    [dispatch, isSignInMode, onSubmit]
  );

  return useFormik<AuthFormValues>({
    initialValues,
    onSubmit: handleSubmit,
    validate: undefined,
  });
};
