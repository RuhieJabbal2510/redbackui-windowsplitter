import { screen, fireEvent } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import { SortableTable } from './SortableTable';
import { axe } from 'jest-axe';

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

describe('<SortableTable />', () => {
	it('renders', () => {
		renderWithDeps(<SortableTable {...defaultProps} />);

		const sortableTable = screen.getByTestId('SortableTable');

		expect(sortableTable).toBeInTheDocument();
	});

	it('has no accessibility violations', async () => {
		const { container } = renderWithDeps(<SortableTable {...defaultProps} />);
		const results = await axe(container);

		expect(results).toHaveNoViolations();
	});

	it('renders with the data sorted by the initial sort field', () => {
		renderWithDeps(<SortableTable {...defaultProps} />);

		// Check a pseudo-random selection of rows for the expected values
		const rows = screen.getAllByRole('row');
		expect(rows[1]).toHaveTextContent('Example name 5');
		expect(rows[2]).toHaveTextContent('Example name 9');
		expect(rows[4]).toHaveTextContent('Example name 7');
		expect(rows[9]).toHaveTextContent('Example name 6');
	});

	it('sorts by another field when the button in the column header is clicked', () => {
		renderWithDeps(<SortableTable {...defaultProps} />);

		const nameButton = screen.getByRole('button', { name: /Name\s*/i });
		fireEvent.click(nameButton);

		// Check a pseudo-random selection of rows for the expected values
		const rows = screen.getAllByRole('row');
		expect(rows[1]).toHaveTextContent('Example name 9');
		expect(rows[5]).toHaveTextContent('Example name 5');
		expect(rows[9]).toHaveTextContent('Example name 1');
	});
});
