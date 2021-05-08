import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Emoji from 'components/Emoji/Emoji';

type Props = React.ComponentProps<typeof Emoji>;

describe(`<Emoji/>`, () => {
	let baseProps: Props;

	beforeEach(() => {
		baseProps = {
			label: 'star',
			children: '🌟',
		};
	});

	const renderUI = (props: Props) => render(<Emoji {...baseProps} {...props} />);

	// Accoring to Kent C Dodds creator of react-testing-library
	// Don't use cleanup https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#using-cleanup
	// afterEach(() => {
	// 	cleanup();
	// });

	it('should have aria-label property if label prop is passed', () => {
		const props: Props = { label: 'star', children: '🌟' };
		const { getByRole } = renderUI(props);
		expect(getByRole('img')).toHaveAttribute('aria-label', 'star');
	});

	it('should have children property if children prop is passed', () => {
		const props: Props = { label: 'star', children: '🌟' };
		const { getByText } = renderUI(props);
		expect(getByText('🌟')).toBeInTheDocument();
	});
});
