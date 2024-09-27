import { SortableTable } from './SortableTable';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/SortableTable',
	component: SortableTable,
} satisfies Meta<typeof SortableTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
	columns: [
		{ value: 'id', label: 'ID', sortable: false, format: 'number' },
		{ value: 'name', label: 'Name', sortable: true },
		{ value: 'location', label: 'Location', sortable: true },
		{ value: 'score', label: 'Score', sortable: true, format: 'number' },
	],
	initialData: [
		{ id: '1', name: 'Example name 1', location: 'Some location', score: '4.5' },
		{ id: '2', name: 'Example name 2', location: 'Some location', score: '7.5' },
		{ id: '3', name: 'Example name 3', location: 'Some other location', score: '2.5' },
		{ id: '4', name: 'Example name 4', location: 'Another location', score: '5.0' },
		{ id: '5', name: 'Example name 5', location: 'Random location', score: '0.5' },
		{ id: '6', name: 'Example name 6', location: 'Another location', score: '8.0' },
		{ id: '7', name: 'Example name 7', location: 'Some location', score: '3.5' },
		{ id: '8', name: 'Example name 8', location: 'Another location', score: '6.25' },
		{ id: '9', name: 'Example name 9', location: 'Some other location', score: '1.5' },
	],
	initialSortField: 'score'
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
