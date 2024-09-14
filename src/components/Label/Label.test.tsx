import { screen } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import { Label } from './Label';
import { axe } from 'jest-axe';

describe('<Label />', () => {
	it('renders', () => {
		renderWithDeps(<Label type="info" text="Test label"/>);

		expect(screen.getByText('Test label')).toBeVisible();
	});

	it('has no accessibility violations', async () => {
		const { container } = renderWithDeps(<Label type="info" text="Test label"/>);
		const results = await axe(container);

		expect(results).toHaveNoViolations();
	});

	describe('default theme accessibility', () => {
		['success', 'info', 'warning', 'error'].forEach(type => {
			it(`has no accessibility violations for type "${type}" in default theme`, async () => {
				// @ts-expect-error TS2322: Type string is not assignable to type 'success' | 'info' | 'warning' | 'error' | undefined
				const { container } = renderWithDeps(<Label type={type} text="Test label"/>);
				const results = await axe(container);

				expect(results).toHaveNoViolations();
			});
		});
	});
});
