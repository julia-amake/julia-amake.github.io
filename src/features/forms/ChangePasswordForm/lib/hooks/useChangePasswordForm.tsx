import { useFormik } from 'formik';
import { FormikHelpers } from 'formik/dist';
import { selectUserData, setNewPassword } from 'src/entities/User';
import { useAppDispatch, useAppSelector } from 'src/shared/lib/hooks';
import { isNotDefinedString } from 'src/shared/lib/utils/validation/common';
import { ChangePasswordFormValues } from '../../ui/ChangePasswordForm/ChangePasswordForm';

export type ChangePasswordFormErrors = Record<keyof ChangePasswordFormValues, string>;

const initialValues = {
  password: '',
  newPassword: '',
  repeatPassword: '',
};

export const useChangePasswordForm = () => {
  const user = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();

  const validate = (values: ChangePasswordFormValues) => {
    const errors = {} as ChangePasswordFormErrors;
    if (isNotDefinedString(values.password)) {
      errors.password = 'Обязательное поле';
    }
    if (user?.password !== values.password) {
      errors.password = 'Неверный пароль';
    }
    if (isNotDefinedString(values.newPassword)) {
      errors.newPassword = 'Обязательное поле';
    }
    if (isNotDefinedString(values.repeatPassword)) {
      errors.repeatPassword = 'Обязательное поле';
    }
    if (values.password === values.newPassword) {
      errors.newPassword = 'Новый пароль должен отличаться от старого';
    }
    if (values.repeatPassword !== values.newPassword) {
      errors.newPassword = 'Пароли не совпадают';
      errors.repeatPassword = 'Пароли не совпадают';
    }
    return errors;
  };

  const onSubmit = (
    values: ChangePasswordFormValues,
    { resetForm }: FormikHelpers<ChangePasswordFormValues>
  ) => {
    if (values.newPassword) dispatch(setNewPassword(values.newPassword));
    resetForm({ values: initialValues });
  };

  return useFormik<ChangePasswordFormValues>({
    initialValues,
    onSubmit,
    validate,
  });
};
