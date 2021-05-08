import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from 'components/Header/Header';

type Props = React.ComponentProps<typeof Header>;

describe(`<Header/>`, () => {
	let baseProps: Props;

	beforeEach(() => {
		baseProps = {
			isDark: false,
			handleSwitchTheme: jest.fn,
		};
	});

	const renderUI = (props: Props) => render(<Header {...baseProps} {...props} />);

	it('should be checked if isDark is true', () => {
		const props: Props = { isDark: true, handleSwitchTheme: jest.fn() };
		const { getByRole } = renderUI(props);
		expect(getByRole('checkbox')).toHaveProperty('checked', true);
	});

	it('should not be checked if isDark is false', () => {
		const props: Props = { isDark: false, handleSwitchTheme: jest.fn() };
		const { getByRole } = renderUI(props);
		expect(getByRole('checkbox')).toHaveProperty('checked', false);
	});
});
