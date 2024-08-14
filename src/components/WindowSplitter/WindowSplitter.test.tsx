import { renderWithDeps } from '../../../jest.utils'; // Assuming you have a similar utility as in your Alert component
import { WindowSplitter } from './WindowSplitter';
import { fireEvent } from '@testing-library/react'; // Import fireEvent

describe('<WindowSplitter />', () => {
  it('renders', () => {
    const { getByTestId } = renderWithDeps(<WindowSplitter />);
    const splitter = getByTestId('splitter-handle');
    expect(splitter).toBeInTheDocument();
  });

  it('can drag splitter', () => {
    const { getByTestId } = renderWithDeps(<WindowSplitter />);
    const splitter = getByTestId('splitter-handle');
    fireEvent.mouseDown(splitter);
    fireEvent.mouseMove(document, { clientX: 200 });
    fireEvent.mouseUp(document);
    // Add more assertions as needed
  });
});


