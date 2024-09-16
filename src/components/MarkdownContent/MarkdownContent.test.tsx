import { screen } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import { MarkdownContent } from './MarkdownContent';

const mockContent = '## Demo Markdown Content';

const mockMarkdown = jest.fn().mockImplementation(() => {
	const convertedContent = mockContent.replace(/^##\s(.*)$/, '<h2>$1</h2>');
	const parser = new DOMParser();
	const doc = parser.parseFromString(convertedContent, 'text/html');
	const htmlContent = doc.body.innerHTML;

	return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
});

describe('<MarkdownContent />', () => {
	it('renders the content', () => {
		renderWithDeps(<MarkdownContent markdown={mockMarkdown} />);

		expect(screen.getByRole('heading', { name: 'Demo Markdown Content' })).toBeVisible();
	});
});
