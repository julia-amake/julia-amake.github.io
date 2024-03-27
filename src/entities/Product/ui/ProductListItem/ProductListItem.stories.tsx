import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { CartButton } from 'src/widgets/product/CartButton/ui/CartButton';
import { ProductListItem } from './ProductListItem';

const meta: Meta<typeof ProductListItem> = {
  title: 'entities/ProductListItem',
  component: ProductListItem,
  args: {
    title: 'Название товара',
    desc: 'Короткое описание товара в\u00A0две строки приходит обрезан...',
    pic: 'https://amake.ru/assets/img/abs/rain-1.jpg',
    price: 5600,
    cartBtn: <CartButton count={0} size={'s'} />,
  },
};

export default meta;

const Template: StoryFn<typeof ProductListItem> = (args) => (
  <div style={{ width: 270 }}>
    <ProductListItem {...args} />
  </div>
);

export const Default = Template.bind({});
export const NoImage = Template.bind({});
export const NoDescription = Template.bind({});

Default.args = {};

NoImage.args = {
  pic: undefined,
};

NoDescription.args = {
  desc: undefined,
};
