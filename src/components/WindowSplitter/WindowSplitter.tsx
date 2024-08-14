import { FC, useState } from 'react';
import { SplitterContainer, SplitterPane, SplitterHandle } from './WindowSplitter.style';

type WindowSplitterProps = {
  initialPaneSize?: number;
};

export const WindowSplitter: FC<WindowSplitterProps> = ({ initialPaneSize = 50 }) => {
  const [paneSize, setPaneSize] = useState(initialPaneSize);

  const handleDrag = (e: MouseEvent) => {
    const newSize = (e.clientX / window.innerWidth) * 100;
    setPaneSize(newSize);
  };

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <SplitterContainer>
      <SplitterPane style={{ width: `${paneSize}%` }} />
      <SplitterHandle
        data-testid="splitter-handle"
        onMouseDown={handleMouseDown}
      />
      <SplitterPane style={{ width: `${100 - paneSize}%` }} />
    </SplitterContainer>
  );
};

