import React, { createContext } from 'react';

import { ThemeProvider } from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import defaultTheme from '../../assets/styles/themes/default';
import Global from '../../assets/styles/global';

import Header from '../Header';
import Routes from '../../routes';

export const PokemonFavoritesContext = createContext(null);

export default function App() {
  const favoritesPokemonsFromLocalStorage = JSON.parse(localStorage.getItem('name'));

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Global />
        <Header />

        <PokemonFavoritesContext.Provider value={favoritesPokemonsFromLocalStorage}>
          <Routes />
        </PokemonFavoritesContext.Provider>

      </ThemeProvider>
    </BrowserRouter>
  );
}
