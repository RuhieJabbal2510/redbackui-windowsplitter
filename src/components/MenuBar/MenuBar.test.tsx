import { screen, fireEvent } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import { MenuBar } from './MenuBar';

const mockClick = jest.fn();

describe('<MenuBar />', () => {
	const menuItems = [
		{ label: 'Home', link: '/', onClick: mockClick },
		{ label: 'About', link: '/about', onClick: mockClick },
		{ label: 'Contact', link: '/contact', onClick: mockClick },
	];

	it('renders the menu items', () => {
		renderWithDeps(<MenuBar items={menuItems} />);

		expect(screen.getByText('Home')).toBeVisible();
		expect(screen.getByText('About')).toBeVisible();
		expect(screen.getByText('Contact')).toBeVisible();
	});

	it('calls onClick when a menu item is clicked', () => {
		renderWithDeps(<MenuBar items={menuItems} />);

		fireEvent.click(screen.getByText('Home'));
		expect(mockClick).toHaveBeenCalledTimes(1);
	});
});
