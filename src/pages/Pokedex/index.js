import {
  useContext, useEffect, useState,
} from 'react';
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
import { FavoritesPokemonList } from '../../Context';
import delay from '../../utils/delay';
import PokemonsService from '../../services/PokemonsService';

export default function Pokedex() {
  const [counterPokemonListIndex] = useState({
    limit: 20,
    offSet: 0,
  });

  const [pokemonRequisitionToDoList, setPokemonRequisitionToDoList] = useState();
  const [pokemonList, setPokemonList] = useState();

  const {
    pokemonFavoritesByLS,
    updatePokemonFavoritesByLS,
    renewPokemonFavoritesByLS,
  } = useContext(FavoritesPokemonList);

  function handleRemoveFavoritePokemon(id) {
    const newFavoritesPokemonList = pokemonFavoritesByLS.filter((idPokemon) => (
      idPokemon !== id
    ));

    renewPokemonFavoritesByLS(newFavoritesPokemonList);
  }

  useEffect(async () => {
    try {
      await delay(200);
      const dataPokemonList = await PokemonsService.getPokemonList(
        counterPokemonListIndex.limit,
        counterPokemonListIndex.offSet,
      );
      setPokemonRequisitionToDoList(dataPokemonList);
    } catch (error) {
      console.log(error);
    }
  }, [counterPokemonListIndex]);

  useEffect(async () => {
    // await delay(2000);

    try {
      if (pokemonRequisitionToDoList) {
        const pokemonListDestructuring = pokemonRequisitionToDoList.results.map(({ name }) => name);

        const pokemonResolvedRequisitionList = await Promise.all(
          pokemonListDestructuring.map(async (pokemonItem) => {
            const response = await PokemonsService.getPokemonById(pokemonItem);
            return response;
          }),
        );

        setPokemonList(pokemonResolvedRequisitionList);
      }
    } catch (error) {
      console.log(error);
    }
  }, [pokemonRequisitionToDoList]);

  /* function handleSetNewPokemonList(valueToIncrease) {
    setCounterPokemonListIndex((prevState) => ({
      ...prevState,
      offSet: 20 * valueToIncrease,
    }));
  } */

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

        {pokemonFavoritesByLS.length === 0 && (
        <FavoritesCarousel justifyContent="center">
          <div className="notFoundContainer">
            <img src={notFound} alt="Favorites pokemon not found" />
            <p>No favorite pokemon found</p>
          </div>
        </FavoritesCarousel>
        )}

        {pokemonFavoritesByLS.length >= 1 && (
        <FavoritesCarousel
          justifyContent={pokemonFavoritesByLS.length <= 2 ? 'center' : 'flex-start'}
        >
          {pokemonFavoritesByLS.map((pokemonId) => (
            <PokemonItems
              key={pokemonId}
              idFavoritePokemon={pokemonId}
            >
              <div className="removePokemonOfFavoritesList">
                <button type="button" onClick={() => handleRemoveFavoritePokemon(pokemonId)}>
                  <img src={heartbreak} alt="heartbreak icon" />
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
        <button type="button" onClick={() => updatePokemonFavoritesByLS(Math.floor(Math.random() * 500) + 1)}>update</button>

      </PokedexContainer>
    </Container>
  );
}
