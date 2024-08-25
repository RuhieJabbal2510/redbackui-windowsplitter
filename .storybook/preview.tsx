// @ts-ignore
import React from 'react';
import type { Preview } from '@storybook/react';
import { Title, Subtitle, Description, Primary, Controls, Stories, DocsContainer, Unstyled } from '@storybook/blocks';
import { RedbackUiThemeProvider } from '../src/providers/RedbackUiThemeProvider/RedbackUiThemeProvider';
import { themes } from '../src/themes';
import { WithA11yTests, WithTheme } from './decorators';

const preview: Preview = {
	globalTypes: {
		theme: {
			defaultValue: 'default',
			toolbar: {
				name: 'Theme',
				title: 'Theme',
				icon: 'paintbrush',
				items: Object.keys(themes),
				dynamicTitle: true,
			}
		},
	},
	decorators: [
		WithTheme,
		WithA11yTests,
	],
	parameters: {
		layout: 'centered',
		backgrounds: { disable: true },
		a11y: {
			element: '#storybook-root',
			// axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
			config: {
				// Rules to specifically turn on/off (these are not the only rules that will run, many are by default or associated with the tags in `options`)
				// https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
				rules: [
					{ id: 'color-contrast', enabled: true },
				],
			},
			// axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
			options: {
			},
		},
		options: {
			storySort: (a, b) => {
				const pageOrder = ['About', 'Usage', 'Contributing'];
				if(pageOrder.includes(a.title) && pageOrder.includes(b.title)) {
					return pageOrder.indexOf(a.title) - pageOrder.indexOf(b.title);
				}
				const sectionOrder = ['Design Tokens', 'Components'];
				if (sectionOrder.some(section => a.title.startsWith(section) && sectionOrder.some(section => b.title.startsWith(section)))) {
					const aSection = sectionOrder.find(section => a.title.startsWith(section));
					const bSection = sectionOrder.find(section => b.title.startsWith(section));
					return sectionOrder.indexOf(aSection) - sectionOrder.indexOf(bSection);
				}
				return a.title === b.title
					? 0
					: a.id.localeCompare(b.id, undefined, { numeric: true });
			},
		},
		docs: {
			container: ({ children, context }) => {
				const theme = context.channel.data.globalsUpdated?.[0]?.globals?.theme ?? (context.channel.data.setGlobals[0].globals.theme ?? 'default');
				if(Object.keys(themes).includes(theme)) {
					localStorage.setItem('ui-theme', theme);
				}

				return (
					<RedbackUiThemeProvider theme={themes[theme]}>
						<DocsContainer context={context}>
							<Unstyled>
								{children}
							</Unstyled>
						</DocsContainer>
					</RedbackUiThemeProvider>
				);
			},
			page: () => (
				<Unstyled>
					<Title/>
					<Subtitle/>
					<Description/>
					<Primary/>
					<Controls/>
					<Stories includePrimary={false} title="Variations"/>
				</Unstyled>
			),
		},
	},

	tags: ['autodocs']
};

export default preview;
