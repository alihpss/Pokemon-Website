/* eslint-disable no-nested-ternary */
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, ImageContainer, NameAndIdContainer, StatsContainer, TypesContainer, TypesItem,
} from './styles';
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

  return (
    <Container
      type={pokemon.types && (pokemon.types[0].type.name)}
      idFavoritePokemon={idFavoritePokemon}
    >
      <ImageContainer type={pokemon.types && (pokemon.types[0].type.name)}>
        <img src={pokemon.sprites?.other.home.front_default} alt="Pokemon" />
      </ImageContainer>

      <NameAndIdContainer>
        <p>{pokemon.name}</p>
        <span>
          {Number(pokemon.id) < 10 ? '#00' : (Number(pokemon.id) < 100 ? '#0' : '#')}
          {pokemon.id}
        </span>
      </NameAndIdContainer>

      <StatsContainer>
        {pokemon.stats?.map((stat) => (
          <>
            <p>{stat.stat.name}</p>
            <span>{stat.base_stat}</span>
          </>
        ))}
      </StatsContainer>

      <TypesContainer>
        {pokemon.types?.map((type) => (
          <TypesItem key={Math.random()} firstTypeName={type.type.name}>
            <img src={exportTypeIcons[type.type.name]} alt={type.type.name} />
            <p>{type.type.name}</p>
          </TypesItem>
        ))}
      </TypesContainer>

    </Container>
  );
}

FavoritesItems.propTypes = {
  idFavoritePokemon: PropTypes.number.isRequired,
};
