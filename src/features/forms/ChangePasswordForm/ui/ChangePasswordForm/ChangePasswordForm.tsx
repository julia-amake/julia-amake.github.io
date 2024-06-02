import React, { memo } from 'react';
import { FormikConfig, useFormik } from 'formik/dist';
import { getValidates, isNotDefinedString } from 'src/shared/lib/utils/validation/common';
import { FormProps } from 'src/shared/types/formTypes';
import { Button } from 'src/shared/ui/Button';
import { Form } from 'src/shared/ui/Form';
import { Heading } from 'src/shared/ui/Heading';
import { TextField } from 'src/shared/ui/TextField';

export interface ChangePasswordFormValues {
  password?: string;
  newPassword?: string;
  repeatPassword?: string;
}

export type ChangePasswordFormErrors = Record<keyof ChangePasswordFormValues, string>;

const initialValues: ChangePasswordFormValues = {
  password: '',
  newPassword: '',
  repeatPassword: '',
};

const {
  onSubmit,
  validate,
}: Pick<FormikConfig<ChangePasswordFormValues>, 'onSubmit' | 'validate'> = {
  onSubmit: (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: initialValues });
  },
  validate: (values) => {
    const errors = {} as ChangePasswordFormErrors;
    if (isNotDefinedString(values.password)) {
      errors.password = 'Обязательное поле';
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
  },
};

type ChangePasswordFormProps = FormProps<ChangePasswordFormValues>;

export const ChangePasswordForm = memo(({ className }: ChangePasswordFormProps) => {
  const formManager = useFormik<ChangePasswordFormValues>({
    initialValues,
    onSubmit,
    validate,
  });

  const {
    values,
    touched,
    errors,
    submitCount,
    handleBlur,
    handleSubmit,
    handleChange,
    submitForm,
  } = formManager;

  const { help: helpPassword } = getValidates(errors.password, touched.password, submitCount);
  const { help: helpNewPassword } = getValidates(
    errors.newPassword,
    touched.newPassword,
    submitCount
  );
  const { help: helpRepeatPassword } = getValidates(
    errors.repeatPassword,
    touched.repeatPassword,
    submitCount
  );

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <Heading as="h2" size="h5">
        Изменить пароль
      </Heading>
      <TextField
        value={values.password}
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        label="Введите текущий пароль"
        required
        errorMessage={helpPassword}
      />
      <TextField
        value={values.newPassword}
        name="newPassword"
        onChange={handleChange}
        onBlur={handleBlur}
        label="Придумайте новый пароль"
        required
        errorMessage={helpNewPassword}
      />
      <TextField
        value={values.repeatPassword}
        name="repeatPassword"
        onChange={handleChange}
        onBlur={handleBlur}
        label="Повторите пароль"
        required
        errorMessage={helpRepeatPassword}
      />
      <Button label="Сохранить изменения" onClick={submitForm} />
    </Form>
  );
});

ChangePasswordForm.displayName = 'ChangePasswordForm';
