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
      url: 'https://www.figma.com/slides/U4nGJ2fpIwLmA6cVMbVVN6/Untitled?node-id=1-42&t=FImyPRGF9lNb383m-1',
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
