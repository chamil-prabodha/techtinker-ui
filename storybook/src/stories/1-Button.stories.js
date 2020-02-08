import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { SimpleButton } from 'techtinker-ui';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const CustomButton = () => (
  <SimpleButton text='Click Me!' onClick={action('clicked')}/>
);
