/* eslint-disable no-nested-ternary */
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, ImageContainer, NameAndIdContainer, TypesContainer,
} from './styles';

import TypeItems from '../TypeItems';
import MoreInfoButton from '../MoreInfoButton';
import delay from '../../utils/delay';
import Loader from '../Loader';
import PokeStats from '../PokeStats';
import PokemonsService from '../../services/PokemonsService';

export default function PokemonItems({ idFavoritePokemon, children }) {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const favoritePokemonInformation = useCallback(async () => {
    try {
      await delay(2000);
      const data = await PokemonsService.getPokemonById(idFavoritePokemon);
      setPokemon(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
      <Loader isLoading={isLoading} />

      <ImageContainer type={pokemon.types && (pokemon.types[0].type.name)}>
        {!isLoading && <img src={pokemon.sprites?.other.home.front_default} alt="Pokemon" /> }
      </ImageContainer>

      <NameAndIdContainer>
        <p>{pokemon.name}</p>
        <span>
          {!isLoading && (Number(pokemon.id) < 10 ? '#00' : (Number(pokemon.id) < 100 ? '#0' : '#'))}
          {pokemon.id}
        </span>
      </NameAndIdContainer>

      <PokeStats
        stats={pokemon.stats || []}
        numberOfStatsToShow={3}
      />

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
