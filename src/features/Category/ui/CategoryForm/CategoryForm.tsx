import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { useFormik } from 'formik';
import { FormikHelpers } from 'formik/dist';
import { useFetchCategoryByIdQuery } from 'src/entities/Category/api/categoriesApi';
import { CategoryParams } from 'src/entities/Category/model/types/categoriesTypes';
import { useEditCategoryMutation } from 'src/features/Category/api/categoryMutationApi';
import { getValidates, isNotDefinedString } from 'src/shared/lib/utils/validation/common';
import { Button } from 'src/shared/ui/Button';
import { Form } from 'src/shared/ui/Form';
import { Heading } from 'src/shared/ui/Heading';
import { Text } from 'src/shared/ui/Text';
import { TextField } from 'src/shared/ui/TextField';

type CategoryFormErrors = Record<keyof CategoryParams, string>;

interface CategoryFormProps {
  id?: string;
  onSubmitAction?: () => void;
  className?: string;
}

export const CategoryForm = memo(({ onSubmitAction, id, className }: CategoryFormProps) => {
  const {
    data: category,
    isLoading: categoryLoading,
    error: categoryError,
  } = useFetchCategoryByIdQuery(id || '', { skip: !id });
  const [editCategory, { isLoading: createCategoryLoading, error: createCategoryError }] =
    useEditCategoryMutation();

  const initialValues = useMemo(
    () => ({
      name: category?.name || '',
      photo: category?.photo || '',
    }),
    [category]
  );

  const onSubmit = useCallback(
    (values: CategoryParams, { resetForm }: FormikHelpers<CategoryParams>) => {
      editCategory({ values, id });
      resetForm({ values: initialValues });
      onSubmitAction?.();
    },
    [editCategory, id, initialValues, onSubmitAction]
  );

  const validate = useCallback((values: CategoryParams) => {
    const errors = {} as CategoryFormErrors;
    if (isNotDefinedString(values.name)) {
      errors.name = 'Обязательное поле';
    }
    if (values.photo && !values.photo?.match(/.+\.(png|jpg|jpeg|gif|woff)/)?.length) {
      errors.photo = 'Допустимые форматы изображений: jpg, jpeg, woff, png, gif';
    }
    return errors;
  }, []);

  const formManager = useFormik<CategoryParams>({
    initialValues,
    onSubmit,
    validate,
    enableReinitialize: true,
  });

  const {
    values,
    status,
    setStatus,
    submitForm,
    touched,
    errors,
    submitCount,
    handleBlur,
    handleSubmit,
    handleChange,
  } = formManager;

  useEffect(() => {
    if (createCategoryError) setStatus(createCategoryError);
  }, [createCategoryError, setStatus]);

  const { help: helpName } = getValidates(errors.name, touched.name, submitCount);

  if (categoryLoading) return <Text>Загружаем данные категории...</Text>;
  if (categoryError) return <Text>{categoryError as string}</Text>;

  return (
    <Form onSubmit={handleSubmit} className={className}>
      <Heading as="h1" size="h5">
        {category ? `Редактировать ${category.name}` : 'Создать категорию'}
      </Heading>
      <TextField
        value={values.name}
        name="name"
        label="Название"
        required
        errorMessage={helpName}
        onBlur={handleBlur}
        onChange={handleChange}
        {...(category ? { defaultValue: category.name } : { autoFocus: true })}
      />
      <TextField
        value={values.photo}
        name="photo"
        label="Изображение"
        errorMessage={errors.photo}
        onBlur={handleBlur}
        onChange={handleChange}
        {...(category ? { defaultValue: category.photo } : {})}
      />
      {status && (
        <Text size="s" color="error">
          {status}
        </Text>
      )}
      <Button
        label="Сохранить"
        onClick={submitForm}
        disabled={categoryLoading || createCategoryLoading}
      />
    </Form>
  );
});

CategoryForm.displayName = 'CategoryForm';
