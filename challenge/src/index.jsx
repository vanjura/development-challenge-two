import React from 'react'
import ReactDom from 'react-dom'
import App from './main/app'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3498db',
        },
        secondary: {
            main: '#172A3C',
        }
    },
});

ReactDom.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    , document.getElementById('app'))