import { FC } from 'react';
import { StyledMenuBar, MenuItem, HamburgerIcon, IconImage } from './MenuBar.style';
import { ThemeColor } from '../../types';

type MenuBarItem = {
  label: string;
  link: string;
  onClick?: () => void;
};

type MenuBarProps = {
  items: MenuBarItem[];
  color?: ThemeColor; // Added color prop like in the Button component
};

export const MenuBar: FC<MenuBarProps> = ({ items, color = 'primary' }) => {
	return (
		<StyledMenuBar $color={color}>
			<IconImage src="/icon.svg" alt="Menu Icon" />

			<HamburgerIcon aria-label="Toggle menu">☰</HamburgerIcon>

			<nav>
				<ul>
					{items.map((item, index) => (
						<li key={index}>
							<MenuItem href={item.link} onClick={item.onClick}>
								{item.label}
							</MenuItem>
						</li>
					))}
				</ul>
			</nav>
		</StyledMenuBar>
	);
};

export default MenuBar;
