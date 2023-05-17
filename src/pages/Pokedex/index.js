import { useState } from 'react';
import {
  Container,
  ContainerHeader,
  FavoritesContainer,
  PokedexContainer,
} from './styles';

import pikachu from '../../assets/images/pikachu.png';
import notFound from '../../assets/images/not-Found.png';
import FavoritesCarousel from '../../components/FavoritesCarousel';
import PokemonItems from '../../components/PokemonItems';
import Input from '../../components/Input';
import exportTypeIcons from '../../utils/exportTypeIcons';
import TypeItems from '../../components/TypeItems';

export default function Pokedex() {
  const teste = [46, 282, 646, 25, 87, 99, 287, 456];
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

        {teste.length === 0 && (
        <FavoritesCarousel justifyContent="center">
          <div className="notFoundContainer">
            <img src={notFound} alt="Favorites pokemon not found" />
            <p>No favorite pokemon found</p>
          </div>
        </FavoritesCarousel>
        )}

        {teste.length >= 1 && (
        <FavoritesCarousel
          justifyContent={teste.length <= 2 ? 'center' : 'flex-start'}
        >
          {teste.map((pokemonId) => (
            <PokemonItems
              key={pokemonId}
              idFavoritePokemon={pokemonId}
            />
          ))}
        </FavoritesCarousel>
        )}
      </FavoritesContainer>

      <PokedexContainer>
        <h2>See all pokemon&apos;s bellow.</h2>

        <div className="filters">
          <Input placeholder="Search by Name or ID" />
          <div className="typesCarousel">
            <FavoritesCarousel>
              {Object.keys(exportTypeIcons).map((type) => (
                <TypeItems key={Math.random()} typeName={type} />
              ))}
            </FavoritesCarousel>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      </PokedexContainer>

      <button type="button" onClick={set}>asd</button>
      <button type="button" onClick={del}>del</button>
      <button type="button" onClick={del}>{aas}</button>
    </Container>
  );
}
