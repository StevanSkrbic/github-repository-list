import { useState } from 'react';
import { Grid } from '@material-ui/core';

import Repositories from 'repositories/Repositories';
import Header from 'components/Header/Header';
import ThemeProvider, { GlobalStyles } from 'theme/theme';

export default () => {
	const [isDark, setIsDark] = useState(false);

	const handleSwitchTheme = (): void => {
		setIsDark(!isDark);
	};

	return (
		<ThemeProvider isDark={isDark}>
			<GlobalStyles />
			<Grid container justify="center">
				<Header isDark={isDark} handleSwitchTheme={handleSwitchTheme} />
				<Repositories />
			</Grid>
		</ThemeProvider>
	);
};
