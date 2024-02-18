import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { SignIn } from '../src/pages/SignIn';

import theme from './styles/theme';
import GlobalStyles from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme.darkTheme} >
      <GlobalStyles/>
        <SignIn />
    </ThemeProvider>
  </React.StrictMode>,
)
