import { Story, Meta } from '@storybook/react';

import Header from './Header';

export default {
  component: Header,
  title: 'molecules/Header',
} as Meta;

const defaultArgs = {
  title: 'Home',
};

const Template: Story = (args) => <Header {...defaultArgs} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
