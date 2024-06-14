import React, { memo } from 'react';
import { getValidates } from 'src/shared/lib/utils/validation/common';
import { FormProps } from 'src/shared/types/formTypes';
import { Button } from 'src/shared/ui/Button';
import { Form } from 'src/shared/ui/Form';
import { Heading } from 'src/shared/ui/Heading';
import { TextField } from 'src/shared/ui/TextField';
import { useProfileForm } from '../../lib/hooks/useProfileForm';

export interface ProfileFormValues {
  name: string;
  about: string;
}

type ProfileFormProps = FormProps<ProfileFormValues>;

export const ProfileForm = memo(({ className }: ProfileFormProps) => {
  const {
    initialValues,
    values,
    submitForm,
    touched,
    errors,
    submitCount,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useProfileForm();

  const { help: helpName } = getValidates(errors.name, touched.name, submitCount);
  const { help: helpAbout } = getValidates(errors.about, touched.about, submitCount);

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <Heading as="h1" size="h5">
        Изменить данные
      </Heading>
      <TextField
        value={values.name}
        autoFocus={!values.name}
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
      <Button label="Сохранить изменения" onClick={submitForm} full={false} />
    </Form>
  );
});

ProfileForm.displayName = 'ProfileForm';
