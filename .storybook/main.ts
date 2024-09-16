import { type StorybookConfig } from '@storybook/react-vite';
import { HttpProxy, mergeConfig } from 'vite';
import * as path from 'node:path';
import ServerOptions = HttpProxy.ServerOptions;

const isProduction = process.env.NODE_ENV === 'production';

const config: StorybookConfig = {
	env: (config) => ({
		...config,
		STORYBOOK_BASE_URL: isProduction ? 'https://redback-operations.github.io/redback-ui' : 'http://localhost:6006',
	}),

	async viteFinal(config, { configType }) {
		if(configType === 'PRODUCTION') {
			config.server = mergeConfig(<ServerOptions>config.server, {
				mimeTypes: {
					'ts': 'text/javascript'
				}
			});
		}

		return {
			...config,
			cacheDir: path.resolve(__dirname, '../node_modules/.cache/vite'),
			optimizeDeps: {
				...config.optimizeDeps,
				include: [
					...(config?.optimizeDeps?.include ?? []),
					'polished',
					'@storybook/addons',
					'axe-core',
					'@storybook/addon-a11y'
				]
			}
		};
	},
	staticDirs: ['../public', { from: '../src/themes', to: 'themes' }],
	stories: ['../src/**/*.stories.@(ts|tsx)', '../docs/**/*.mdx'],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-docs',
		'@storybook/addon-a11y',
		'@storybook/addon-actions',
		'storybook-dark-mode',
		'@storybook/addon-mdx-gfm'
	],
	framework: {
		name: '@storybook/react-vite',
		options: {}
	},
	docs: {
		defaultName: 'Docs'
	},
	typescript: {
		reactDocgen: 'react-docgen-typescript'
	}
};

export default config;
