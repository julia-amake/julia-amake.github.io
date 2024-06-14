import React from 'react';
import type { Meta } from '@storybook/react';
import { StoryFn } from '@storybook/react';
import { fakeProduct } from 'src/entities/Product/mocks/productsMocks';
import { CartButton } from './CartButton';

const meta: Meta<typeof CartButton> = {
  title: 'widgets/CartButton',
  component: CartButton,
  args: {
    product: fakeProduct,
  },
};

export default meta;

const Template: StoryFn<typeof CartButton> = (args) => (
  <div style={{ width: 220 }}>
    <CartButton {...args} />
  </div>
);

export const Default = Template.bind({});
export const SizeXS = Template.bind({});
export const SizeS = Template.bind({});
export const SizeM = Template.bind({});

Default.args = {};
SizeXS.args = { size: 'xs' };
SizeS.args = { size: 's' };
SizeM.args = { size: 'm' };
