import { render } from '@testing-library/react';
import { Tooltip } from './Tooltip';
import { axe } from 'jest-axe';

describe('<Tooltip />', () => {
	it('renders the tooltip component', () => {
		const { getByText } = render(<Tooltip text="Hover over me" tooltip="Tooltip text" />);
		expect(getByText('Hover over me')).toBeInTheDocument();
	});

	it('has no accessibility violations', async () => {
		const { container } = render(<Tooltip text="Hover over me" tooltip="Tooltip text" />);
		const results = await axe(container);
		
		expect(results).toHaveNoViolations();
	});
});
