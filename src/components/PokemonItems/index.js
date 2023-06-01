/* eslint-disable no-nested-ternary */
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, ImageContainer, NameAndIdContainer, StatsContainer, TypesContainer,
} from './styles';

import TypeItems from '../TypeItems';
import MoreInfoButton from '../MoreInfoButton';

export default function PokemonItems({ idFavoritePokemon, children }) {
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
        {pokemon.stats?.slice(0, 3).map((stat) => (
          <div key={stat.stat.name}>
            <p>{stat.stat.name}</p>
            <div className="statsBar">
              <div style={{ width: `${stat.base_stat}%` }}>
                <ul>
                  <li />
                  <li />
                  <li />
                  <li />
                </ul>
              </div>
            </div>
          </div>
        ))}
      </StatsContainer>

      <TypesContainer>
        {pokemon.types?.map((type) => (
          <TypeItems key={type.type.name} typeName={type.type.name} />
        ))}
      </TypesContainer>

      {pokemon.types && (
      <MoreInfoButton
        idPokemon={idFavoritePokemon}
        pokemonType={pokemon.types[0].type.name}
      />
      )}

      <div className="childrenContainer">
        {children}
      </div>

    </Container>
  );
}

PokemonItems.propTypes = {
  idFavoritePokemon: PropTypes.number.isRequired,
  children: PropTypes.node,
};

PokemonItems.defaultProps = {
  children: null,
};
