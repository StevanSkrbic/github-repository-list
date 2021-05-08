import { Grid } from '@material-ui/core';

import Repositories from 'repositories/Repositories';
import ThemeProvider, { GlobalStyles } from 'theme/theme';

export default () => {
	return (
		<ThemeProvider isDark={false}>
			<GlobalStyles />
			<Grid container justify="center">
				<Repositories />
			</Grid>
		</ThemeProvider>
	);
};
