import { FC } from 'react';
import { TooltipContainer, TooltipText } from './Tooltip.style';
 
type TooltipProps = {
  text: string;
  tooltip: string;
};
 
export const Tooltip: FC<TooltipProps> = ({ text, tooltip }) => ( <TooltipContainer> {text} <TooltipText>{tooltip}</TooltipText> </TooltipContainer>
);
 