import styled from 'styled-components';
import { shade } from 'polished';

export const StyledMarkdownContent = styled.div`
	background: ${props => props.theme.colors.background};
	padding: ${props => props.theme.spacing.md};
	
	p {
		margin-top: 0;
	}
	
	pre:has(code) {
		padding: ${props => props.theme.spacing.sm};
		background: ${props => shade(0.05, props.theme.colors.background)};
		
		code {
            font-family: 'Fira Code', 'Source Code Pro', 'Courier New', 'Courier', monospace;
            font-size: ${props => props.theme.fontSizes.sm};
		}
	}
`;
