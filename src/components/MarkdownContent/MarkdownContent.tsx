import { FC, type ReactNode } from 'react';
import { StyledMarkdownContent } from './MarkdownContent.style';

type MarkdownWrapperProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	markdown: (props: any) => ReactNode;
};

export const MarkdownContent: FC<MarkdownWrapperProps> = ({ markdown }) => {
	return (
		<StyledMarkdownContent data-testid="MarkdownWrapper">
			{markdown({})}
		</StyledMarkdownContent>
	);
};
