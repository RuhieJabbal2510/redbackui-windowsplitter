import styled from 'styled-components';
import { readableColor, transparentize } from 'polished';

export const StyledValuePicker = styled.div`
	label > div > div {
        background: ${props => props.theme.colors.background};
        color: ${props => readableColor(props.theme.colors.background)};
        cursor: pointer;
		
		[data-value])	{
            color: ${props => readableColor(props.theme.colors.background)} !important;
		}
    }
	
	[role="listbox"] {
		border: 1px solid ${props => props.theme.colors.subtle};
        background: ${props => props.theme.colors.background};
        color: ${props => readableColor(props.theme.colors.background)};
        cursor: pointer;
		
		[role="option"] {
			color: ${props => readableColor(props.theme.colors.background)};
			cursor: pointer;
			text-decoration: underline;
			text-decoration-color: transparent;
			
			&:hover, &:focus, &:focus-visible, &:active {
				background: ${props => transparentize(0.2, props.theme.colors.subtle)};
                color: ${props => readableColor(transparentize(0.8, props.theme.colors.subtle))};
				text-decoration-color: currentColor;
			}
			
			&[aria-selected="true"] {
				background: ${props => props.theme.colors.primary};
				color: ${props => readableColor(props.theme.colors.primary)};
			}
		}
	}
`;

export const StyledValuePickerLabel = styled.label`
	span {
		font-size: ${props => props.theme.fontSizes.sm};
		display: block;
	}
`;