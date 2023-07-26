import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/themes/default';
import Global from '../../assets/styles/global';

import Header from '../Header';
import Routes from '../../routes';
import HeaderColorProvider from '../../context/HeaderColorProvider';
import ToastContainer from '../Toast/ToastContainer';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>

        <Global />
        <ToastContainer />

        <HeaderColorProvider>
          <Header />
          <Routes />
        </HeaderColorProvider>

      </ThemeProvider>
    </BrowserRouter>
  );
}
