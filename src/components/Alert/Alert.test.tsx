import { screen } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import { Alert } from './Alert';
import { axe } from 'jest-axe';

describe('<Alert />', () => {
	it('renders', () => {
		renderWithDeps(<Alert>Example alert</Alert>);

		expect( screen.getByText('Example alert')).toBeInTheDocument();
	});

	it('has no accessibility violations', async () => {
		const { container } = renderWithDeps(<Alert>Example alert</Alert>);
		const results = await axe(container);

		expect(results).toHaveNoViolations();
	});

	describe('default theme accessibility', () => {
		['success', 'info', 'warning', 'error'].forEach(type => {
			it(`has no accessibility violations for type "${type}" in default theme`, async () => {
				// @ts-expect-error TS2322: Type string is not assignable to type 'success' | 'info' | 'warning' | 'error' | undefined
				const { container } = renderWithDeps(<Alert type={type}>Example alert</Alert>);
				const results = await axe(container);

				expect(results).toHaveNoViolations();
			});
		});
	});
});
