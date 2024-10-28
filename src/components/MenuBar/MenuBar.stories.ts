import { MenuBar } from './MenuBar';
import { action } from '@storybook/addon-actions'; // Use 'action' instead of 'fn'
import type { Meta, StoryObj } from '@storybook/react';
import { themeColorSubset } from '../../types';

const meta: Meta<typeof MenuBar> = {
	title: 'Components/MenuBar',
	component: MenuBar,
	argTypes: {
		color: { control: 'select', options: Object.keys(themeColorSubset) },
	},
	args: {
		color: 'primary',
		items: [
			{ label: 'Home', link: '/', onClick: action('Home clicked') },
			{ label: 'About', link: '/about', onClick: action('About clicked') },
			{ label: 'Contact', link: '/contact', onClick: action('Contact clicked') },
		],
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		color: 'primary',
	},
};

export const Secondary: Story = {
	args: {
		color: 'secondary',
	},
};

export const WithCustomItems: Story = {
	args: {
		items: [
			{ label: 'Services', link: '/services', onClick: action('Services clicked') },
			{ label: 'Blog', link: '/blog', onClick: action('Blog clicked') },
		],
	},
};
