import { useState, useCallback, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import PokemonsService from '../../services/PokemonsService';

import defaultTheme from '../../assets/styles/themes/default';

import { ButtonLink, Container, PokemonContainer } from './styles';
import Loader from '../Loader';

export default function EvolutionInfoContainer({ arrayOfEvolutionDetails }) {
  const history = useHistory();
  const { id } = useParams();

  const [pokemonEvolutionInfo, setPokemonEvolutionInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const pokemonData = useCallback(async () => {
    setIsLoading(true);
    try {
      const pokemonResolvedEvolution = await Promise.all(
        arrayOfEvolutionDetails.map(async (pokemonItem) => {
          const response = await PokemonsService.getPokemonById(pokemonItem);
          return response;
        }),
      );

      setPokemonEvolutionInfo(pokemonResolvedEvolution);
    } catch (error) {

    } finally {
      setIsLoading(false);
    }
  }, [arrayOfEvolutionDetails]);

  useEffect(() => {
    pokemonData();

    return () => {
      setPokemonEvolutionInfo([]);
    };
  }, [pokemonData]);

  const handleGoToPokemonInfo = (idOfEvolution) => {
    if (Number(id) === idOfEvolution) {
      return;
    }

    history.push(`/pokemonInfo/${idOfEvolution}`);
  };

  return (
    <Container>
      <p>Evolution: </p>
      <Loader isLoading={isLoading} size={60} />
      {(pokemonEvolutionInfo.length === 0 && !isLoading) && (
        <span style={{ fontWeight: '700' }}>Pokemon has no evolution.</span>
      )}
      {pokemonEvolutionInfo.map((pokemon) => (
        <PokemonContainer
          key={pokemon.id}
          colorOfType={defaultTheme.typeColors[pokemon.types[0].type.name]}
        >
          <ButtonLink
            type="button"
            onClick={() => handleGoToPokemonInfo(pokemon.id)}
          >
            <img src={pokemon.sprites.other.home.front_default} alt="Pokemon" />
            <p>{pokemon.name}</p>
          </ButtonLink>
        </PokemonContainer>
      ))}
    </Container>
  );
}

EvolutionInfoContainer.propTypes = {
  arrayOfEvolutionDetails: PropTypes.node.isRequired,
};
