import { screen, fireEvent } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import { ValuePicker } from './ValuePicker';
import { injectable } from 'react-magnetic-di';
import Select from 'react-select';

const mockChange = jest.fn();
const defaultProps = {
	label: 'Select value',
	options: [
		{ value: 'option-1', label: 'Option 1' },
		{ value: 'option-2', label: 'Option 2' },
		{ value: 'option-3', label: 'Option 3' },
		{ value: 'option-4', label: 'Option 4' },
		{ value: 'option-5', label: 'Option 5' }
	],
	onChange: mockChange,
	defaultValue: 'option-2'
};

describe('<ValuePicker />', () => {
	it('renders the component', () => {
		renderWithDeps(<ValuePicker {...defaultProps} />);

		expect(screen.getByTestId('ValuePicker')).toBeVisible();
	});

	it('has an accessible label', () => {
		renderWithDeps(<ValuePicker {...defaultProps} />);

		expect(screen.getByRole('combobox')).toHaveAccessibleName('Select value Option 2');
	});

	it('displays the default value on initial render', () => {
		renderWithDeps(<ValuePicker {...defaultProps} />);

		expect(screen.getByText('Option 2')).toBeVisible();
		expect(screen.queryByText('Option 1')).toBeNull();
	});

	it('supports number options', () => {
		renderWithDeps(
			<ValuePicker {...defaultProps}
				options={[
					{ value: 100, label: '100' },
					{ value: 200, label: '200' },
					{ value: 300, label: '300' }
				]}
				defaultValue={200}
			/>
		);

		expect(screen.getByText('200')).toBeVisible();
	});

	it('calls the change handler with the new selection on click', () => {
		renderWithDeps(
			<ValuePicker {...defaultProps} />,
			// Open the menu by default for this test
			[injectable(Select, (props) => <Select {...props} menuIsOpen />)]
		);

		screen.getByRole('option', { name: 'Option 3' }).click();

		expect(mockChange).toHaveBeenCalledWith('option-3');
	});

	it('supports making a selection with keyboard navigation', () => {
		renderWithDeps(
			<ValuePicker {...defaultProps} />,
			// Open the menu by default and move focus to it for this test
			[injectable(Select, (props) => <Select {...props} menuIsOpen autoFocus />)]
		);

		const select = screen.getByRole('listbox');

		fireEvent.keyDown(select, { key: 'ArrowDown' });
		fireEvent.keyDown(select, { key: 'ArrowDown' });
		fireEvent.keyDown(select, { key: 'Enter' });

		expect(mockChange).toHaveBeenCalledWith('option-4');
	});
});
