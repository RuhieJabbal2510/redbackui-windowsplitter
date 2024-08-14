import { WindowSplitter } from './WindowSplitter';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/WindowSplitter',
  component: WindowSplitter,
} satisfies Meta<typeof WindowSplitter>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
  initialPaneSize: 50, // Example prop, adjust as needed
};

const disableControls = {
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
  }
};

export const Demo: Story = {
  args: {
    ...defaultProps
  },
  tags: ['excludeFromSidebar']
};

export const Default: Story = {
  args: {
    ...defaultProps
  },
  ...disableControls
};

export const CustomSize: Story = {
  args: {
    ...defaultProps,
    initialPaneSize: 70
  },
  ...disableControls
};
