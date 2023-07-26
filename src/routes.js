import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import PokemonFavoritesProvider from './context/PokemonFavoritesProvider';
import PokemonInfo from './pages/PokemonInfo';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <PokemonFavoritesProvider>
        <Route path="/pokedex" exact component={Pokedex} />
        <Route path="/pokemonInfo/:id" exact component={PokemonInfo} />
      </PokemonFavoritesProvider>
    </Switch>
  );
}
