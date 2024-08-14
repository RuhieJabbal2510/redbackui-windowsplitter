import styled from 'styled-components';

export const SplitterContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const SplitterPane = styled.div`
  flex: 1;
  overflow: auto;
`;

export const SplitterHandle = styled.div`
  width: 5px;
  cursor: ew-resize;
  background-color: #ccc;
  z-index: 1;
`;

