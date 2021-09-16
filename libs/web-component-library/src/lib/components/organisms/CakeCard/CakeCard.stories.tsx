import { Story, Meta } from '@storybook/react';

import CakeCard from './CakeCard';

export default {
  component: CakeCard,
  title: 'organisms/CakeCard',
} as Meta;

const defaultArgs = {
  name: 'Sponge',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cake_competition_%2814287027130%29.jpg/1280px-Cake_competition_%2814287027130%29.jpg',
};

const Template: Story = (args) => <CakeCard {...defaultArgs} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
