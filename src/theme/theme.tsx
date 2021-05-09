import React from 'react';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';

type GlobalStyleProps = {
	theme: {
		background: string;
		text: string;
	};
};

export const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
  html, body {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: 'Helvetica', 'Open sans', sans-serif;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    width: 100vw;
    height: 100vh;
  }
`;

export enum ThemeMode {
	DARK = 'dark',
	LIGHT = 'light',
}

type ThemeColors = {
	[ThemeMode.DARK]: {
		background: string;
		text: string;
		buttonBackground: string;
		buttonText: string;
	};
	[ThemeMode.LIGHT]: {
		background: string;
		text: string;
		buttonBackground: string;
		buttonText: string;
	};
};

// TODO: extract colors in constants
export const themeColors: ThemeColors = {
	dark: {
		background: '#20252a',
		text: '#dce1e8',
		buttonBackground: '#e9ecf3',
		buttonText: '#20252a',
	},
	light: {
		background: '#e9ecf3',
		text: '#20252a',
		buttonBackground: '#20252a',
		buttonText: '#e9ecf3',
	},
};

type ThemeProviderProps = { isDark: boolean; children: React.ReactNode };

export default ({ isDark, children }: ThemeProviderProps) => (
	<StyledThemeProvider theme={isDark ? themeColors.dark : themeColors.light}>{children}</StyledThemeProvider>
);
