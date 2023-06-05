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

import heartbreak from '../../assets/images/icons/heartbreak.svg';

export default function Pokedex() {
  const [teste, setTeste] = useState([46, 282, 646, 25, 197, 99, 287, 456]);
  const [aas] = useState(localStorage.getItem('name'));

  console.log(teste);
  function set(nome) {
    localStorage.setItem('name', JSON.stringify(nome));
  }

  function del() {
    localStorage.clear('name');
  }

  function handleRemoveFavoritePokemon(id) {
    const newFavoritesPokemonList = teste.filter((idPokemon) => (
      idPokemon !== id
    ));

    setTeste(newFavoritesPokemonList);
    console.log(teste);
  }

  console.log(teste);

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
            >
              <div className="removePokemonOfFavoritesList">
                <button type="button" onClick={() => handleRemoveFavoritePokemon(pokemonId)}>
                  <img src={heartbreak} alt="heartbreak icon" />
                  <span>Remove</span>
                </button>
              </div>
            </PokemonItems>
          ))}
        </FavoritesCarousel>
        )}
      </FavoritesContainer>

      <PokedexContainer>
        <h2>See all pokemon&apos;s bellow.</h2>

        <div className="filters">
          <div>
            <p>Search by name or id: </p>
            <Input placeholder="Search by Name or ID" />
          </div>
          <div className="typesCarousel">
            <p>Search by type: </p>
            <FavoritesCarousel carouselWidthToDisableBtn={window.screen.width - 250}>
              <TypeItems typeName="all" />
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

      <button type="button" onClick={() => set([1, 3])}>Set Ali</button>
      <button type="button" onClick={() => set('Sid')}>Set sid</button>
      <button type="button" onClick={() => console.log(JSON.parse(localStorage.getItem('name')))}>del</button>
      <button type="button" onClick={del}>{aas}</button>
    </Container>
  );
}
