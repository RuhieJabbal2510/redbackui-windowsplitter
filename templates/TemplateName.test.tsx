import { screen } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import TemplateName from './TemplateName';
import { axe } from 'jest-axe';

describe('<TemplateName />', () => {
	it('renders', () => {
		renderWithDeps(<TemplateName />);

		const templateName = screen.getByTestId('TemplateName');

		expect(templateName).toBeInTheDocument();
	});

	it('has no accessibility violations', async () => {
		const { container } = renderWithDeps(<TemplateName />);
		const results = await axe(container);

		expect(results).toHaveNoViolations();
	});
});
