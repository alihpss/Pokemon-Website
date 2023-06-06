import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import PokemonFavoritesProvider from './Context';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <PokemonFavoritesProvider>
        <Route path="/pokedex" exact component={Pokedex} />
      </PokemonFavoritesProvider>
    </Switch>
  );
}
