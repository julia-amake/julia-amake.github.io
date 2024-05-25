import React, { memo } from 'react';
import { categories } from 'src/homeworks/ts1/mocks';
import { getValidates } from 'src/shared/lib/utils/validation/common';
import { Select, SelectOption, SelectProps } from 'src/shared/ui/Select/Select';

interface ProductCategorySelectProps extends Omit<SelectProps<string>, 'options'> {
  errorMessage?: string;
  submitCount: number;
  touched: boolean;
  options?: never;
}

export const ProductCategorySelect = memo(
  ({ errorMessage = '', touched, submitCount, ...otherProps }: ProductCategorySelectProps) => {
    const { help } = getValidates(errorMessage, touched, submitCount);
    const options: SelectOption<string>[] = categories.map(({ id, name }) => ({
      value: id,
      content: name,
    }));

    return <Select errorMessage={help} options={options} {...otherProps} />;
  }
);

ProductCategorySelect.displayName = 'ProductCategorySelect';
