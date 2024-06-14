import React, { memo } from 'react';
import { getValidates } from 'src/shared/lib/utils/validation/common';
import { FormProps } from 'src/shared/types/formTypes';
import { Button } from 'src/shared/ui/Button';
import { Form } from 'src/shared/ui/Form';
import { Heading } from 'src/shared/ui/Heading';
import { TextField } from 'src/shared/ui/TextField';
import { useChangePasswordForm } from '../../lib/hooks/useChangePasswordForm';

export interface ChangePasswordFormValues {
  password?: string;
  newPassword?: string;
  repeatPassword?: string;
}

type ChangePasswordFormProps = FormProps<ChangePasswordFormValues>;

export const ChangePasswordForm = memo(({ className }: ChangePasswordFormProps) => {
  const {
    values,
    touched,
    errors,
    submitCount,
    handleBlur,
    handleSubmit,
    handleChange,
    submitForm,
  } = useChangePasswordForm();

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
