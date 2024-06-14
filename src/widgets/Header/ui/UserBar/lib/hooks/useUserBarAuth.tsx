import { useCallback } from 'react';
import { useFormik } from 'formik';
import { FormikHelpers } from 'formik/dist';
import { login } from 'src/entities/User';
import { TEST_TOKEN } from 'src/entities/User/mocks/data';
import { AuthFormValues } from 'src/features/forms/AuthForm';
import { useAppDispatch } from 'src/shared/lib/hooks';
import { validate } from '../utils/validate';

const initialValues: AuthFormValues = {
  email: '',
  password: '',
};

export const useUserBarAuth = (onSubmit?: () => void) => {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (values: AuthFormValues, { resetForm }: FormikHelpers<AuthFormValues>) => {
      console.log(values);
      dispatch(login(TEST_TOKEN));
      resetForm({ values: initialValues });
      onSubmit?.();
    },
    [dispatch, onSubmit]
  );

  return useFormik<AuthFormValues>({
    initialValues,
    onSubmit: handleSubmit,
    validate,
  });
};
