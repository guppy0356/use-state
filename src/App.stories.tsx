import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from 'storybook/test';
import App from './App';

const meta: Meta<typeof App> = {
  component: App,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof App>;

export const Default: Story = {};

export const InteractiveFlow: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('初期表示は0である', async () => {
      await expect(canvas.getByText('0')).toBeInTheDocument();
    });

    await step('プラスボタンを押すとカウントが1に増える', async () => {
      const incrementBtn = canvas.getByRole('button', { name: '+' });
      await userEvent.click(incrementBtn);
      await expect(canvas.getByText('1')).toBeInTheDocument();
    });

    await step('マイナスボタンを押すとカウントが0に戻る', async () => {
      const decrementBtn = canvas.getByRole('button', { name: '-' });
      await userEvent.click(decrementBtn);
      await expect(canvas.getByText('0')).toBeInTheDocument();
    });
  },
};
