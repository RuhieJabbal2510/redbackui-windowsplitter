import styled from 'styled-components';
 
export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;
 
export const TooltipText = styled.div`
  visibility: hidden;
  width: 120px;
  background-color: ${({ theme }) => theme?.colors?.tooltipBg || '#555'};
  color: ${({ theme }) => theme?.colors?.tooltipText || '#fff'};
  text-align: center;
  padding: ${({ theme }) => theme?.spacing?.xs || '5px'};
  border-radius: ${({ theme }) => theme?.borderRadius?.sm || '6px'};
  position: absolute;
  z-index: 1;
  bottom: 20%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  ${TooltipContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;