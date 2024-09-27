import { ElementType } from 'react';
import { RedbackUiThemeProvider, themes } from '../../src';
import { StoryContext } from '@storybook/react';

export const WithTheme = (Story: ElementType, context: StoryContext) => {
	return (
		<RedbackUiThemeProvider theme={themes[context.globals.theme]}>
			<Story />
		</RedbackUiThemeProvider>
	);
};
