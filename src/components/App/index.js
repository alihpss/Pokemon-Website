import React from 'react';

import { ThemeProvider } from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import defaultTheme from '../../assets/styles/themes/default';
import Global from '../../assets/styles/global';

import Header from '../Header';
import Routes from '../../routes';
import HeaderColorProvider from '../../context/HeaderColorProvider';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>

        <Global />

        <HeaderColorProvider>
          <Header />
          <Routes />
        </HeaderColorProvider>

      </ThemeProvider>
    </BrowserRouter>
  );
}
