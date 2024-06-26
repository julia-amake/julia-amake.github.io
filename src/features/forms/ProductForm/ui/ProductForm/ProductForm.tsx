import React, { memo, useMemo } from 'react';
import { faker } from '@faker-js/faker';
import { FormikConfig, useFormik } from 'formik/dist';
import { addProduct, Category, Product } from 'src/entities/Product';
import { ProductCategorySelect } from 'src/features/forms/ProductForm/ui/ProductCategorySelect';
import { ProductField } from 'src/features/forms/ProductForm/ui/ProductField';
import { createRandomProduct } from 'src/homeworks/ts1/3_write';
import { categories } from 'src/homeworks/ts1/mocks';
import { useAppDispatch } from 'src/shared/lib/hooks';
import { isNotDefinedString } from 'src/shared/lib/utils/validation/common';
import { FormProps } from 'src/shared/types/formTypes';
import { Button } from 'src/shared/ui/Button';
import { Form } from 'src/shared/ui/Form';
import { Heading } from 'src/shared/ui/Heading';
import { ProductFormData } from '../../types/ProductFormTypes';

const product: Product = createRandomProduct('05052024');
const productData: ProductFormData = (() => {
  return {
    ...product,
    id: undefined,
    createdAt: undefined,
    category: undefined,
    categoryId: product.category.id,
  };
})();

type ProductFormErrors = Record<keyof ProductFormData, string>;
interface ProductFormProps extends FormProps<ProductFormData> {
  id?: string;
  onSubmitAction?: () => void;
}

export const ProductForm = memo(({ onSubmitAction, id, className }: ProductFormProps) => {
  const dispatch = useAppDispatch();

  const {
    onSubmit,
    validate,
    initialValues,
  }: Pick<
    FormikConfig<ProductFormData>,
    'onSubmit' | 'validate' | 'initialValues' | 'enableReinitialize'
  > = useMemo(
    () => ({
      initialValues: id
        ? productData
        : {
            name: '',
            desc: '',
            photo: '',
            price: 0,
            categoryId: '',
          },
      onSubmit: (values, { resetForm }) => {
        const { categoryId, ...otherValues } = values;
        dispatch(
          addProduct({
            ...otherValues,
            id: faker.string.uuid(),
            createdAt: String(new Date()),
            category: categories.find((c) => c.id === categoryId) as Category,
          })
        );
        resetForm({ values: initialValues });
        onSubmitAction?.();
      },
      validate: (values) => {
        const errors = {} as ProductFormErrors;
        if (isNotDefinedString(values.name)) {
          errors.name = 'Обязательное поле';
        }
        if (isNotDefinedString(values.categoryId)) {
          errors.categoryId = 'Обязательное поле';
        }
        if (!values.photo?.match(/.+\.(png|jpg|jpeg|gif|woff)/)?.length) {
          errors.photo = 'Допустимые форматы изображений: jpg, jpeg, woff, png, gif';
        }
        if (isNotDefinedString(values.photo)) {
          errors.photo = 'Обязательное поле';
        }
        if (isNotDefinedString(String(values.price || ''))) {
          errors.price = 'Обязательное поле';
        }
        if (values.oldPrice && values.oldPrice <= values.price) {
          errors.oldPrice = 'Старая цена должна быть больше текущей';
        }
        return errors;
      },
      enableReinitialize: true,
    }),
    [dispatch, id, onSubmitAction]
  );

  const formManager = useFormik<ProductFormData>({
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

  return (
    <Form onSubmit={handleSubmit} className={className}>
      <Heading as="h1" size="h5">
        {id ? `Редактировать ${product.name}` : 'Создать товар'}
      </Heading>
      <ProductField
        value={values.name}
        name="name"
        label="Название"
        required
        touched={!!touched.name}
        errorMessage={errors.name}
        submitCount={submitCount}
        onBlur={handleBlur}
        onChange={handleChange}
        {...(id ? { defaultValue: product.name } : { autoFocus: true })}
      />
      <ProductField
        value={values.desc}
        name="desc"
        label="Описание"
        required
        touched={!!touched.desc}
        errorMessage={errors.desc}
        submitCount={submitCount}
        onBlur={handleBlur}
        onChange={handleChange}
        {...(id ? { defaultValue: product.desc } : {})}
      />
      <ProductField
        value={values.photo}
        name="photo"
        label="Изображение"
        required
        touched={!!touched.photo}
        errorMessage={errors.photo}
        submitCount={submitCount}
        onBlur={handleBlur}
        onChange={handleChange}
        {...(id ? { defaultValue: product.photo } : {})}
      />
      <ProductCategorySelect
        name="categoryId"
        required
        touched={!!touched.categoryId}
        errorMessage={errors.categoryId}
        submitCount={submitCount}
        onChange={handleChange}
        value={values.categoryId}
      />
      <ProductField
        value={values.price || ''}
        name="price"
        label="Цена"
        type="number"
        required
        touched={!!touched.price}
        errorMessage={errors.price}
        submitCount={submitCount}
        onBlur={handleBlur}
        onChange={handleChange}
        {...(id ? { defaultValue: String(product.price || '') } : {})}
      />
      <ProductField
        value={values.oldPrice || ''}
        name="oldPrice"
        label="Старая цена"
        type="number"
        required
        touched={!!touched.oldPrice}
        errorMessage={errors.oldPrice}
        submitCount={submitCount}
        onBlur={handleBlur}
        onChange={handleChange}
        {...(id ? { defaultValue: String(product.oldPrice || '') } : {})}
      />
      <Button label="Сохранить" onClick={submitForm} />
    </Form>
  );
});

ProductForm.displayName = 'ProductForm';
