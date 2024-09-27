import { screen, fireEvent }  from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import { Button } from './Button';
import { axe } from 'jest-axe';
import { themes } from '../../themes';
import { ThemeColor } from '../../types';

const mockClick = jest.fn();

describe('<Button />', () => {
	it('renders', () => {
		renderWithDeps(<Button label="Test button" onClick={mockClick}/>);

		expect(screen.getByRole('button', { name: 'Test button' })).toBeVisible();
	});

	it('has no accessibility violations (default props)', async () => {
		const { container } = renderWithDeps(<Button label="Test button" onClick={mockClick}/>);
		const results = await axe(container);

		expect(results).toHaveNoViolations();
	});

	describe('default theme accessibility', () => {
		Object.keys(themes.default.colors).forEach((color: ThemeColor) => {
			it(`has no accessibility violations for "${String(color)}" colour in default theme - solid style`, async () => {
				const { container } = renderWithDeps(<Button color={color} appearance="solid" label="Test button" onClick={mockClick} />);
				const results = await axe(container);

				expect(results).toHaveNoViolations();
			});
		});

		Object.keys(themes.default.colors).forEach((color: ThemeColor) => {
			it(`has no accessibility violations for "${String(color)}" colour in default theme - outline stype`, async () => {
				const { container } = renderWithDeps(<Button color={color} appearance="outline" label="Test button" onClick={mockClick} />);
				const results = await axe(container);

				expect(results).toHaveNoViolations();
			});
		});
	});

	it('calls the click handler',  () => {
		renderWithDeps(<Button label="Test button" onClick={mockClick}/>);

		const button = screen.getByRole('button', { name: 'Test button' });

		fireEvent.click(button);

		expect(mockClick).toHaveBeenCalledTimes(1);
	});
});
