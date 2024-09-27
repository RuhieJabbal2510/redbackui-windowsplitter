import styled from 'styled-components';
import { readableColor, tint } from 'polished';

export const StyledSortableTable = styled.table`
	width: 100%;
	margin-bottom: 1rem;
	border-collapse: collapse;
	border: 1px solid ${props => props.theme.colors.subtle};
	background: ${props => props.theme.colors.background};

	th, td {
		font-family: ${props => props.theme.fontFamily.body};
		text-align: left;
		padding: ${props => props.theme.spacing.sm};
		border-right: 1px solid ${props => tint(0.4, props.theme.colors.subtle)};
	}

	thead th {
		background-color: ${props => props.theme.colors.secondary};
        color: ${props => readableColor(props.theme.colors.secondary)};
		border-right-color: ${props => tint(0.3, props.theme.colors.secondary)};
		text-align: left;
        
        &[data-format="number"] {
            width: 3rem;
        }
	}
    
    tbody td {
        
        &[data-format="number"] {
            text-align: right;
        }
    }

	tr:nth-child(even) {
		background-color: ${props => tint(0.8, props.theme.colors.subtle)};
	}
`;

export const StyledSortingButton = styled.button<{ $direction: 'asc' | 'desc', $active: boolean }>`
	font-family: ${props => props.theme.fontFamily.body};
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	background: transparent;
	border: 0;
    border-bottom: 2px solid ${props => props.$active ? 'currentColor' : 'transparent'};
	appearance: none;
	font-size: inherit;
	color: inherit;
	font-weight: inherit;
	outline: none;
	cursor: pointer;
	padding: 0;
`;

export const StyledSortIcon = styled.span<{ $direction: 'asc' | 'desc' }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
    transform: rotate(${props => props.$direction === 'asc' ? '0' : '180deg'});
    margin-inline-start: ${props => props.theme.spacing.sm};
`;