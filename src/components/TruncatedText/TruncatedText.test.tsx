import { screen } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import { TruncatedText } from './TruncatedText';
import { axe } from 'jest-axe';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis faucibus mattis. Sed eget magna urna. Quisque posuere vehicula pharetra. Pellentesque bibendum condimentum lacus, at elementum justo ultrices ut. Ut at ipsum vel metus condimentum venenatis. Ut varius nisi in massa porttitor mollis. Pellentesque ac auctor quam.';

describe('<TruncatedText />', () => {
	it('renders', () => {
		renderWithDeps(<TruncatedText text={text} lines={1}/>);

		expect(screen.getByText('Lorem ipsum dolor sit amet', { exact:false })).toBeVisible();
	});

	it('has no accessibility violations', async () => {
		const { container } = renderWithDeps(<TruncatedText text={text} lines={1}/>);
		const results = await axe(container);

		expect(results).toHaveNoViolations();
	});
});
