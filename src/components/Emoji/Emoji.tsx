import { ReactNode } from 'react';

export type EmojiProps = {
	label: string;
	children: ReactNode;
};

export default ({ label, children }: EmojiProps) => (
	<span role="img" aria-label={label}>
		{children}
	</span>
);
