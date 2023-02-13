/* eslint-disable no-nested-ternary */
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function FavoritesItems({ idFavoritePokemon }) {
  const [pokemon, setPokemon] = useState({});

  const favoritePokemonInformation = useCallback(async () => {
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${idFavoritePokemon}/`);
      const toJson = await data.json();

      setPokemon({
        name: toJson.name,
        id: toJson.id,
        image: toJson.sprites.other.home.front_default,
      });
    } catch (error) {
      console.log(error);
    }
  }, [idFavoritePokemon]);

  useEffect(() => {
    favoritePokemonInformation();
  }, [favoritePokemonInformation]);

  return (
    <Container idFavoritePokemon={idFavoritePokemon}>
      <div id="imageContainer">
        <img src={pokemon.image} alt="Pokemon" />
      </div>
      <div id="nameAndIdContainer">
        <p>{pokemon.name}</p>
        <span>
          {Number(pokemon.id) < 10 ? '#00' : (Number(pokemon.id) < 100 ? '#0' : '#')}
          {pokemon.id}
        </span>
      </div>
      <div id="typesContainer">
        <p>{pokemon.name}</p>
        <p>{pokemon.id}</p>
      </div>

    </Container>
  );
}

FavoritesItems.propTypes = {
  idFavoritePokemon: PropTypes.number.isRequired,
};
