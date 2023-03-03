import { useState } from 'react';
import { Container, ContainerHeader, FavoritesContainer } from './styles';

import pikachu from '../../assets/images/pikachu.png';
import FavoritesCarousel from '../../components/FavoritesCarousel';
import FavoritesItems from '../../components/FavoritesItems';

export default function Pokedex() {
  const teste = [57, 48];
  const [aas] = useState(localStorage.getItem('name'));
  function set() {
    localStorage.setItem('name', 'Ali');
  }

  function del() {
    localStorage.clear('name');
  }

  return (
    <Container>
      <ContainerHeader>
        <img src={pikachu} alt="Pokemon" />
        <hr />
        <p>
          Here you can see more information about the pokemons.
          Just click in  &quot;more info&quot; button.
        </p>
      </ContainerHeader>
      <h1>Your favorite Pokemon&apos;s</h1>
      <FavoritesContainer>
        <FavoritesCarousel
          justifyContent={teste.length > 2 ? '' : 'center'}
        >
          {teste.map((pokemonId) => (
            <FavoritesItems
              key={pokemonId}
              idFavoritePokemon={pokemonId}
            />
          ))}
        </FavoritesCarousel>
      </FavoritesContainer>
      <button type="button" onClick={set}>asd</button>
      <button type="button" onClick={del}>del</button>
      <button type="button" onClick={del}>{aas}</button>
    </Container>
  );
}
