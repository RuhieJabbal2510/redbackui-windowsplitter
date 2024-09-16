import { ValuePicker } from './ValuePicker';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const meta = {
	title: 'Components/ValuePicker',
	component: ValuePicker,
} satisfies Meta<typeof ValuePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
	label: 'Select value',
	options: [
		{ value: 'option-1', label: 'Option 1' },
		{ value: 'option-2', label: 'Option 2' },
		{ value: 'option-3', label: 'Option 3' },
		{ value: 'option-4', label: 'Option 4' },
		{ value: 'option-5', label: 'Option 5' }
	],
	onChange: action('Selection changed'),
	defaultValue: 'option-2'
};

const disableControls = {
	parameters: {
		controls: {
			disable: true
		},
		actions: {
			disable: false
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
