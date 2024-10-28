import { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
 
const meta: Meta<typeof Tooltip> = { title: 'Components/Tooltip', component: Tooltip,
};
 
export default meta;
type Story = StoryObj<typeof Tooltip>;
 
const defaultProps = { text: 'Hover over me', tooltip: 'This is a tooltip',
};
 
export const Default: Story = { args: { ...defaultProps, },
};
 