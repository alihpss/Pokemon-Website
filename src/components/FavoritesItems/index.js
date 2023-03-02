/* eslint-disable no-nested-ternary */
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, TypesItem } from './styles';
import exportTypeIcons from '../../utils/exportTypeIcons';

export default function FavoritesItems({ idFavoritePokemon }) {
  const [pokemon, setPokemon] = useState([]);

  const favoritePokemonInformation = useCallback(async () => {
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${idFavoritePokemon}/`);
      const toJson = await data.json();
      setPokemon(toJson);
    } catch (error) {
      console.log(error);
    }
  }, [idFavoritePokemon]);

  useEffect(() => {
    favoritePokemonInformation();
  }, [favoritePokemonInformation]);

  console.log(pokemon.types);

  return (
    <Container
      idFavoritePokemon={idFavoritePokemon}
      type={pokemon.types && (pokemon.types[0].type.name)}
    >
      <div id="imageContainer">
        <img src={pokemon.sprites?.other.home.front_default} alt="Pokemon" />
      </div>
      <div id="nameAndIdContainer">
        <p>{pokemon.name}</p>
        <span>
          {Number(pokemon.id) < 10 ? '#00' : (Number(pokemon.id) < 100 ? '#0' : '#')}
          {pokemon.id}
        </span>
      </div>
      <div id="typesContainer">
        {pokemon.types?.map((type) => (
          <TypesItem key={Math.random()}>
            <img src={exportTypeIcons[type.type.name]} alt={type.type.name} />
            <p>{type.type.name}</p>
          </TypesItem>
        ))}
      </div>

    </Container>
  );
}

FavoritesItems.propTypes = {
  idFavoritePokemon: PropTypes.number.isRequired,
};
