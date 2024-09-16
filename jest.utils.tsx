import { DiProvider, Injectable, injectable } from 'react-magnetic-di';
import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';
import { themes } from './src';
import { RedbackUiThemeProvider } from './src';
import { render } from '@testing-library/react';

const commonDeps = [
	injectable(RedbackUiThemeProvider, ({ theme, children }) => {
		return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
	}),
];


export const renderWithDeps = (component: ReactNode, deps: Injectable[] = []) => {
	return render(
		<DiProvider use={[...commonDeps, ...deps]}>
			<RedbackUiThemeProvider theme={themes.default}>
				{component}
			</RedbackUiThemeProvider>
		</DiProvider>
	);
};

