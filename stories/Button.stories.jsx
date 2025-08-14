import React from 'react';
import { fn } from 'storybook/test';
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/your-file-id/your-figma-file-name?node-id=0%3A1',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Primary = (args) => <Button {...args} />;
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = (args) => <Button {...args} />;
Secondary.args = {
  label: 'Button',
};

export const Large = (args) => <Button {...args} />;
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = (args) => <Button {...args} />;
Small.args = {
  size: 'small',
  label: 'Button',
};
