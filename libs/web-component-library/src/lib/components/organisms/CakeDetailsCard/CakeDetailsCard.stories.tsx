import { Story, Meta } from '@storybook/react';

import CakeDetailsCard, { Props } from './CakeDetailsCard';

export default {
  component: CakeDetailsCard,
  title: 'organisms/CakeDetailsCard',
} as Meta;

const defaultArgs = {
  name: 'Sponge',
  yumFactor: 4,
  comment: 'A really nice sponge.',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cake_competition_%2814287027130%29.jpg/1280px-Cake_competition_%2814287027130%29.jpg',
};

const Template: Story = (args) => (
  <CakeDetailsCard {...defaultArgs} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
