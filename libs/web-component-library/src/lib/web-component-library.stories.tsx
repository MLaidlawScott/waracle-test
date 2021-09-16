import { Story, Meta } from '@storybook/react';
import {
  WebComponentLibrary,
  WebComponentLibraryProps,
} from './web-component-library';

export default {
  component: WebComponentLibrary,
  title: 'WebComponentLibrary',
} as Meta;

const Template: Story<WebComponentLibraryProps> = (args) => (
  <WebComponentLibrary {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
