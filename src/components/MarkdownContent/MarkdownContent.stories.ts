import { MarkdownContent } from './MarkdownContent';
import type { Meta, StoryObj } from '@storybook/react';
import demoContent from './MarkdownContentDemoFile.mdx';

const meta = {
	title: 'Components/MarkdownContent',
	component: MarkdownContent,
} satisfies Meta<typeof MarkdownContent>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
	markdown: demoContent
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
