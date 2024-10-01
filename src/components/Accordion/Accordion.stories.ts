import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
	title: 'Components/Accordion',
	component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const defaultProps = {
	items: [
		{ title: 'Section 1', content: 'Content for section 1' },
		{ title: 'Section 2', content: 'Content for section 2' },
	],
};

export const Default: Story = {
	args: {
		...defaultProps,
	},
};
