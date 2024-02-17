import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignIn } from '../src/pages/SignIn/index'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle>
        <SignIn />
    </GlobalStyle>
    </ThemeProvider>
  </React.StrictMode>,
)
