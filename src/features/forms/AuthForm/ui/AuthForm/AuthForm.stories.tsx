import React from 'react';
import type { Meta } from '@storybook/react';
import { StoryFn } from '@storybook/react';
import { FormikConfig, useFormik } from 'formik/dist';
import { isNotDefinedString } from 'src/shared/lib/utils/validation/common';
import { AuthForm, AuthFormErrors, AuthFormValues } from './AuthForm';

const meta: Meta<typeof AuthForm> = {
  title: 'features/forms/AuthForm',
  component: AuthForm,
  args: {},
};

export default meta;

const {
  onSubmit,
  validate,
  initialValues,
}: Pick<FormikConfig<AuthFormValues>, 'onSubmit' | 'validate' | 'initialValues'> = {
  initialValues: {
    email: '',
    password: '',
  },
  onSubmit: (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: initialValues });
  },
  validate: (values) => {
    const errors = {} as AuthFormErrors;
    if (isNotDefinedString(values.email)) {
      errors.email = 'Обязательное поле';
    }
    if (values.email && !values.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)?.length) {
      errors.email = 'Некорректный email';
    }
    if (!values.password.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/)?.length) {
      errors.password =
        'Пароль должен быть не короче 8 символов и содержать хотя бы одну цифру, заглавную и строчную буквы';
    }
    if (isNotDefinedString(values.password)) {
      errors.password = 'Обязательное поле';
    }
    return errors;
  },
};

const Template: StoryFn<typeof AuthForm> = (args) => {
  const formManager = useFormik<AuthFormValues>({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div style={{ maxWidth: 480 }}>
      <AuthForm {...args} formManager={formManager} />
    </div>
  );
};

export const SingIn = Template.bind({});
SingIn.args = { title: 'Войти' };
export const SignUp = Template.bind({});
SignUp.args = { title: 'Зарегистрироваться' };
