import styled from 'styled-components';
import { getLuminance, shade, tint } from 'polished';

export const StyledModal = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 400px;
	background-color: ${(props) => {
		const bgColor = props.theme.colors.background || '#ffffff';
		const isDark = getLuminance(bgColor) < 0.5;
		return isDark ? tint(0.1, bgColor) : 'white';
	}};
	border: 2px solid #000;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
	padding: ${(props) => props.theme.spacing.md || '16px'};
	z-index: 10000; /* Increase z-index to ensure it is above other elements */

	h2 {
		margin: 0;
		font-size: ${(props) => props.theme.fontSizes.lg || '1.5rem'};
	}

	p {
		margin-top: ${(props) => props.theme.spacing.sm || '8px'};
		margin-bottom: 0;
		font-size: ${(props) => props.theme.fontSizes.md || '1rem'};
		color: ${(props) => {
		const textColor = props.theme.colors.text || '#000000';
		const isDark = getLuminance(props.theme.colors.background || '#ffffff') < 0.5;
		return isDark ? tint(0.1, textColor) : shade(0.2, textColor);
	}};
	}
`;
