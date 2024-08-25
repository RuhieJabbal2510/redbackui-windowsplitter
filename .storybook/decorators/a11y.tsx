import { addons } from '@storybook/preview-api';
import { STORY_RENDERED } from '@storybook/core-events';
import { ElementType, useCallback, useEffect } from 'react';
import { StoryContext } from '@storybook/react';

type MinimalContextData = {
	story: string;
	theme: string;
}
const A11Y_RESULT = 'storybook/a11y/result';
const A11Y_REQUEST = 'storybook/a11y/request';
const A11Y_RUNNING = 'storybook/a11y/running';
const A11Y_ERROR = 'storybook/a11y/error';
const A11Y_MANUAL = 'storybook/a11y/manual';
const A11Y_RUN = 'storybook/a11y/run';

export const WithA11yTests = (Story: ElementType, context: StoryContext) => {
	const channel = addons.getChannel();

	useEffect(() => {
		// If the result comes back empty, re-run the tests
		// This is a workaround for what seems to be a timing issue/race condition when changing the selected story
		const checkAndHandleResult = (data: any) => {
			if(data.passes.length === 0 && data.violations.length === 0 && data.incomplete.length === 0) {
				channel.emit(A11Y_MANUAL, { storyId: context.id });
			}
		};

		channel.on('storybook/a11y/result', checkAndHandleResult);

		// Cleanup function that runs on unmount
		return () => {
			channel.off('storybook/a11y/result', checkAndHandleResult);
		};
	}, [channel, context.id]);

	return <Story {...context} />;
};
