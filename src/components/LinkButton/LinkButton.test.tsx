import { screen } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import { LinkButton } from './LinkButton';
import { axe } from 'jest-axe';
import { themes } from '../../themes';
import { ThemeColor } from '../../types';

describe('<LinkButton />', () => {
	it('renders', () => {
		renderWithDeps(<LinkButton label="Test link" href="#" />);

		expect(screen.getByRole('link', { name: 'Test link' })).toBeVisible();
	});

	it('has no accessibility violations (default props)', async () => {
		const { container } = renderWithDeps(<LinkButton label="Test link" href="#" />);
		const results = await axe(container);

		expect(results).toHaveNoViolations();
	});

	describe('default theme accessibility', () => {
		Object.keys(themes.default.colors).forEach((color: ThemeColor) => {
			it(`has no accessibility violations for "${String(color)}" colour in default theme - solid style`, async () => {
				const { container } = renderWithDeps(<LinkButton color={color} appearance="solid" label="Test link" href="#" />);
				const results = await axe(container);

				expect(results).toHaveNoViolations();
			});
		});

		Object.keys(themes.default.colors).forEach((color: ThemeColor) => {
			it(`has no accessibility violations for "${String(color)}" colour in default theme - outline stype`, async () => {
				const { container } = renderWithDeps(<LinkButton color={color} appearance="outline" label="Test link" href="#" />);
				const results = await axe(container);

				expect(results).toHaveNoViolations();
			});
		});
	});
});
