import { createContext, useMemo, useState } from 'react';

import PropTypes from 'prop-types';

export const FavoritesPokemonList = createContext('');

export default function PokemonFavoritesProvider({ children }) {
  const initialValue = JSON.parse(localStorage.getItem('name')) || '';

  // Define o estado para armazenar o valor
  const [
    pokemonFavoritesListFromLocalStorage, setPokemonFavoritesListFromLocalStorage,
  ] = useState(initialValue);

  const updatePokemonFavoritesByLS = (newPokemonFavoritesList) => {
    setPokemonFavoritesListFromLocalStorage(
      [...pokemonFavoritesListFromLocalStorage, newPokemonFavoritesList],
    );
    localStorage.setItem('name', JSON.stringify([...pokemonFavoritesListFromLocalStorage, newPokemonFavoritesList]));
  };

  const renewPokemonFavoritesByLS = (newPokemonFavoritesList) => {
    setPokemonFavoritesListFromLocalStorage(newPokemonFavoritesList);
    localStorage.setItem('name', JSON.stringify(newPokemonFavoritesList));
  };

  // Utiliza o useMemo para evitar re-render desnecessário
  const value = useMemo(
    () => (
      {
        pokemonFavoritesByLS: pokemonFavoritesListFromLocalStorage,
        updatePokemonFavoritesByLS,
        renewPokemonFavoritesByLS,
      }),
    [
      pokemonFavoritesListFromLocalStorage,
    ],
  );

  return (
    <FavoritesPokemonList.Provider value={value}>
      {children}
    </FavoritesPokemonList.Provider>
  );
}

PokemonFavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
