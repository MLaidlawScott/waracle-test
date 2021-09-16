import { Story, Meta } from '@storybook/react';

import Button from './Button';

export default {
  component: Button,
  title: 'atoms/Button',
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['solid', 'outline', 'ghost', 'link'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  variant: 'solid',
  isLoading: false,
  isDisabled: false,
};
