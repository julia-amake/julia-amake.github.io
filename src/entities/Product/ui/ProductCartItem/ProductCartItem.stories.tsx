import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { RemoveProductFromCart } from 'src/features/RemoveProductFromCart/ui/RemoveProductFromCart';
import { ProductCartItem } from './ProductCartItem';

const meta: Meta<typeof ProductCartItem> = {
  title: 'entities/ProductCartItem',
  component: ProductCartItem,
  args: {
    title: 'Название товара',
    desc: 'Короткое описание товара в\u00A0две строки приходит обрезан...',
    count: 1,
    pic: 'https://amake.ru/assets/img/abs/rain-1.jpg',
    price: 5600,
    removeBtn: <RemoveProductFromCart />,
  },
};

export default meta;

const Template: StoryFn<typeof ProductCartItem> = (args) => (
  <div style={{ width: 560 }}>
    <ProductCartItem {...args} />
  </div>
);

export const Default = Template.bind({});
export const NoImage = Template.bind({});
export const NoDescription = Template.bind({});

Default.args = {};
NoImage.args = { pic: undefined };
NoDescription.args = { desc: undefined };
