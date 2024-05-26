import React, { memo, useMemo } from 'react';
import { FormikConfig, useFormik } from 'formik/dist';
import { ProductCategorySelect } from 'src/features/forms/ProductForm/ui/ProductCategorySelect';
import { ProductField } from 'src/features/forms/ProductForm/ui/ProductField';
import { createRandomProduct, Product } from 'src/homeworks/ts1/3_write';
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
}

export const ProductForm = memo(({ id, className }: ProductFormProps) => {
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
        console.log(values);
        resetForm({ values: initialValues });
      },
      validate: (values) => {
        const errors = {} as ProductFormErrors;
        if (isNotDefinedString(values.name)) {
          errors.name = 'Обязательное поле';
        }
        if (isNotDefinedString(values.categoryId)) {
          errors.categoryId = 'Обязательное поле';
        }
        if (!values.photo.match(/.+\.(png|jpg|jpeg|gif|woff)/)?.length) {
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
    [id]
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
