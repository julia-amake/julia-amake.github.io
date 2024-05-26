import React, { memo } from 'react';
import { FormikConfig, useFormik } from 'formik/dist';
import { getValidates, isNotDefinedString } from 'src/shared/lib/utils/validation/common';
import { FormProps } from 'src/shared/types/formTypes';
import { Button } from 'src/shared/ui/Button';
import { Form } from 'src/shared/ui/Form';
import { Heading } from 'src/shared/ui/Heading';
import { TextField } from 'src/shared/ui/TextField';

export interface ProfileFormValues {
  name: string;
  about: string;
}

type ProfileFormErrors = Record<keyof ProfileFormValues, string>;
type ProfileFormProps = FormProps<ProfileFormValues>;

const {
  onSubmit,
  validate,
  initialValues,
}: Pick<FormikConfig<ProfileFormValues>, 'onSubmit' | 'validate' | 'initialValues'> = {
  initialValues: {
    name: '',
    about: '',
  },
  onSubmit: (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: initialValues });
  },
  validate: (values) => {
    const errors = {} as ProfileFormErrors;
    if (isNotDefinedString(values.name)) {
      errors.name = 'Обязательное поле';
    }
    return errors;
  },
};

export const ProfileForm = memo(({ className }: ProfileFormProps) => {
  const formManager = useFormik<ProfileFormValues>({
    initialValues,
    onSubmit,
    validate,
  });

  const {
    values,
    submitForm,
    touched,
    errors,
    submitCount,
    handleBlur,
    handleSubmit,
    handleChange,
  } = formManager;

  const { help: helpName } = getValidates(errors.name, touched.name, submitCount);
  const { help: helpAbout } = getValidates(errors.about, touched.about, submitCount);

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <Heading as="h1" size="h5">
        Изменить профиль
      </Heading>
      <TextField
        value={values.name}
        autoFocus
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        label="Придумайте себе псевдоним"
        required
        errorMessage={helpName}
        defaultValue={initialValues.name}
      />
      <TextField
        value={values.about}
        name="about"
        onChange={handleChange}
        onBlur={handleBlur}
        label="Напишите что-нибудь о себе"
        errorMessage={helpAbout}
        defaultValue={initialValues.about}
      />
      <Button label="Изменить профиль" onClick={submitForm} />
    </Form>
  );
});

ProfileForm.displayName = 'ProfileForm';
