import { Grid, Switch } from '@material-ui/core';

type HeaderProps = {
	isDark: boolean;
	handleSwitchTheme: () => void;
};

export default ({ isDark, handleSwitchTheme }: HeaderProps) => (
	<Grid item xs={10}>
		<Grid container justify="center" alignItems="center">
			<Grid>
				<h1>Repositories table App</h1>
			</Grid>
			<Grid>
				<Switch checked={isDark} onChange={handleSwitchTheme} />
				<span>Switch theme</span>
			</Grid>
		</Grid>
	</Grid>
);
