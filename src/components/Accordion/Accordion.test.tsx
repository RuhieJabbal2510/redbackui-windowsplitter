import { screen, fireEvent } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import { Accordion } from './Accordion'; 
import { axe } from 'jest-axe';

describe('<Accordion />', () => {
	it('renders', () => {
		renderWithDeps(<Accordion items={[{ title: 'Title', content: 'Content' }]} />);
		
		const titleElement = screen.getByText('Title');
		
		expect(titleElement).toBeInTheDocument();
	});

	it('toggles content on click', () => {
		renderWithDeps(<Accordion items={[{ title: 'Title', content: 'Content' }]} />);
		
		const titleElement = screen.getByText('Title');
		fireEvent.click(titleElement);
		
		const contentElement = screen.getByText('Content');
		expect(contentElement).toBeVisible();

		fireEvent.click(titleElement);
		expect(contentElement).not.toBeVisible();
	});

	it('has no accessibility violations', async () => {
		const { container } = renderWithDeps(<Accordion items={[{ title: 'Title', content: 'Content' }]} />);
		const results = await axe(container);
		
		expect(results).toHaveNoViolations();
	});
});


