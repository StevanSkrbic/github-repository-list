import styled from 'styled-components';

import Emoji, { EmojiProps } from 'components/Emoji/Emoji';

const SpanWithPadding = styled.span`
	padding-left: 0.2rem;
`;

type EmojiWithTextProps = EmojiProps & {
	text: string | number;
};

export default ({ text, ...props }: EmojiWithTextProps) => (
	<>
		<Emoji {...props} />
		<SpanWithPadding>{text}</SpanWithPadding>
	</>
);
