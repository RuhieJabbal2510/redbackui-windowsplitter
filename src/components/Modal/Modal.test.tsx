import { renderWithDeps } from '../../../jest.utils';
import { fireEvent, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('<Modal />', () => {
	it('renders', () => {
		renderWithDeps(<Modal />);

		const modal = screen.getByTestId('Modal');

		expect(modal).toBeInTheDocument();
	});

	it('opens the modal when clicking the Open button', () => {
		renderWithDeps(<Modal />);

		const openButton = screen.getByText('Open modal');
		fireEvent.click(openButton);

		// Check if the modal content is visible
		const modalTitle = screen.getByText('Text in a modal');
		expect(modalTitle).toBeVisible();
	});

	it('closes the modal when clicking the Close button', () => {
		renderWithDeps(<Modal />);

		const openButton = screen.getByText('Open modal');
		fireEvent.click(openButton);

		// Check if the modal is opened
		const modalTitle = screen.getByText('Text in a modal');
		expect(modalTitle).toBeVisible();

		// Click the close button
		const closeButton = screen.getByText('Close');
		fireEvent.click(closeButton);

		// Check if the modal content is no longer visible
		expect(modalTitle).not.toBeVisible();
	});
});