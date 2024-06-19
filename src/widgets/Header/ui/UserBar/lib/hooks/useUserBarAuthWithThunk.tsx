import { useCallback, useEffect } from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { selectAuthError, selectAuthLoading } from 'src/entities/User';
import { AuthFormValues } from 'src/features/forms/AuthForm';
import { useAppDispatch } from 'src/shared/lib/hooks';
import {
  fetchSignUpThunk,
  fetchSingInThunk,
} from 'src/widgets/Header/ui/UserBar/model/services/fetchSingInThunk';
import { UserBarAuthMode } from '../../ui/UserBarAuth/UserBarAuth';

const initialValues: AuthFormValues = {
  email: '',
  password: '',
};

export const useUserBarAuthWithThunk = (mode: UserBarAuthMode, onSubmit?: () => void) => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const isSignInMode = mode === 'signIn';

  const handleSubmit = useCallback(
    async (values: AuthFormValues) => {
      if (isLoading) return;

      dispatch((isSignInMode ? fetchSingInThunk : fetchSignUpThunk)(values));
    },
    [dispatch, isLoading, isSignInMode]
  );

  const manager = useFormik<AuthFormValues>({
    initialValues,
    onSubmit: handleSubmit,
    validate: undefined,
  });

  useEffect(() => {
    if (isLoading) return;
    if (error) return manager.setStatus(error);
    manager.resetForm({ values: initialValues });
    onSubmit?.();
    // manager в зависимости вызовет переполнение стека
    // eslint-disable-next-line
  }, [error, onSubmit, isLoading]);

  return manager;
};
