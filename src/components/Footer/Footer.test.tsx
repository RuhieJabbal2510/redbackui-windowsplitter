import { screen } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import { Footer } from './Footer';

describe('<Footer />', () => {
	it('renders', () => {
		renderWithDeps(<Footer/>);

		const footer = screen.getByTestId('Footer');

		expect(footer).toBeInTheDocument();
	});
});
