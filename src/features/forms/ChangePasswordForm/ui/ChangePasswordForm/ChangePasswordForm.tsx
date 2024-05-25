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
  password: undefined,
  newPassword: undefined,
  repeatPassword: undefined,
};

const {
  onSubmit,
  validate,
}: Pick<FormikConfig<ChangePasswordFormValues>, 'onSubmit' | 'validate'> = {
  onSubmit: (values) => console.log(values),
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

  const { touched, errors, submitCount, handleBlur, handleSubmit, handleChange, submitForm } =
    formManager;

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
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        label="Введите текущий пароль"
        required
        errorMessage={helpPassword}
        defaultValue={initialValues.password}
      />
      <TextField
        name="newPassword"
        onChange={handleChange}
        onBlur={handleBlur}
        label="Придумайте новый пароль"
        required
        errorMessage={helpNewPassword}
        defaultValue={initialValues.newPassword}
      />
      <TextField
        name="repeatPassword"
        onChange={handleChange}
        onBlur={handleBlur}
        label="Повторите пароль"
        required
        errorMessage={helpRepeatPassword}
        defaultValue={initialValues.repeatPassword}
      />
      <Button label="Изменить пароль" onClick={submitForm} />
    </Form>
  );
});

ChangePasswordForm.displayName = 'ChangePasswordForm';
