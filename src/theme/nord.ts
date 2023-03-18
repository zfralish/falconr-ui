import {createTheme, ThemeOptions} from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#88C0D0',
            dark: '#88C0D0',
            light: '#88C0D0',
        },
        secondary: {
            main: '#8FBCBB',
            light: '#8FBCBB',
            dark: '#8FBCBB',
        },
        background: {
            default: '#2E3440',
            paper: '#3B4252',
        },
        text: {
            primary: '#ECEFF4',
            secondary: '#E5E9F0',
            disabled: '#D8DEE9',
        },
        error: {
            main: '#BF616A',
            light: '#BF616A',
            dark: '#BF616A',
        },
        warning: {
            main: '#EBCB8B',
            light: '#EBCB8B',
            dark: '#EBCB8B',
        },
        info: {
            main: '#B48EAD',
            light: '#B48EAD',
            dark: '#B48EAD',
        },
        success: {
            main: '#A3BE8C',
            light: '#A3BE8C',
            dark: '#A3BE8C',
        },
        divider: '#3B4252',
    },
};

export const NordTheme = createTheme(themeOptions)
