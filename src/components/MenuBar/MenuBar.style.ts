import styled from 'styled-components';
import { ThemeColor } from '../../types';

type StyledMenuBarProps = {
  $color: ThemeColor;
};

export const StyledMenuBar = styled.div<StyledMenuBarProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors[props.$color]};
  padding: ${(props) => props.theme.spacing.md};
  border-bottom: 1px solid ${(props) => props.theme.colors.subtle};
  justify-content: space-between;
`;

export const MenuItem = styled.a`
  color: ${(props) => props.theme.colors.dark};
  margin: 0 ${(props) => props.theme.spacing.sm};
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes.default};

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

export const HamburgerIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const IconImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: ${(props) => props.theme.spacing.md};
  cursor: pointer;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;
