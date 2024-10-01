import styled from 'styled-components';

export const AccordionContainer = styled.div`
	width: 100%;
`;

export const AccordionItem = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.border || '#ccc'};
	margin-bottom: ${({ theme }) => theme.spacing.xs || '5px'};
`;

export const AccordionTitle = styled.div`
	background-color: ${({ theme }) => theme.colors.backgroundAlt || '#f1f1f1'};
	padding: ${({ theme }) => theme.spacing.sm || '10px'};
	cursor: pointer;
`;

export const AccordionContent = styled.div`
	padding: ${({ theme }) => theme.spacing.sm || '10px'};
	display: none;

	&.open {
		display: block;
	}
`;
