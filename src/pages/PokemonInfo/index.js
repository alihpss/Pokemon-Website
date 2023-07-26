import { useParams, useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { Container, InfoContainer, LeftContent } from './styles';

import PokemonsService from '../../services/PokemonsService';
import ColumnSkew from '../../components/ColumnSkew';
import { HeaderColor } from '../../context/HeaderColorProvider';

import defaultTheme from '../../assets/styles/themes/default';
import TypeItems from '../../components/TypeItems';
import useCarrouselHome from '../../utils/useCarrouselImageAnimation';
import Loader from '../../components/Loader';
import PokeStats from '../../components/PokeStats';
import EvolutionInfoContainer from '../../components/EvolutionInfoContainer';

export default function PokemonInfo() {
  const { id } = useParams();
  const history = useHistory();

  const [idPokemon, setIdPokemon] = useState(id);
  const [pokemon, setPokemon] = useState([]);
  const [evolutionInfo, setEvolutionInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {
    setCounter,
    hasAnimation,
    animation,
    element,
    setAnimation,
    setHasAnimation,
  } = useCarrouselHome([], idPokemon);

  const { updateColor } = useContext(HeaderColor);

  const handleNextPokemon = () => {
    const nextId = Number(id) + 1;
    history.push(`/pokemonInfo/${nextId}`);
  };

  const splitString = (object, string) => object.split(string)[1];

  useEffect(() => {
    setCounter(id);
  }, [id]);

  useEffect(() => {
    async function getPokemonData() {
      setIsLoading(true);
      try {
        const pokemonInfo = await PokemonsService.getPokemonById(idPokemon);
        const { species } = pokemonInfo;

        const specieData = await PokemonsService.getPokemonSpecieInfo(splitString(species.url, 'species'));
        const { url } = specieData.evolution_chain;

        const evolutionData = await PokemonsService.getPokemonEvolutionInfo(splitString(url, 'evolution-chain'));

        setPokemon(pokemonInfo);
        setEvolutionInfo(evolutionData);
      } catch (error) {
        console.log(error);
        console.log(pokemon);
        console.log(evolutionInfo);
      } finally {
        setIsLoading(false);
      }
    }

    getPokemonData();

    return () => {
      updateColor(null);
    };
  }, [idPokemon]);

  useEffect(() => {
    if (pokemon.types) {
      updateColor(defaultTheme.typeColors[pokemon.types[0].type.name]);
    }
  }, [pokemon]);

  function setTypeOfAnimation() {
    setAnimation('move');
    setHasAnimation(true);
  }

  useEffect(() => {
    setIdPokemon(id);
  }, [id]);

  console.log(evolutionInfo);

  return (
    <Container type={pokemon.types && pokemon?.types[0].type.name}>
      <Loader isLoading={isLoading} />
      <LeftContent
        animated={hasAnimation}
        typeAnimation={animation}
      >
        <div className="pokemonImage">
          <img
            src={pokemon.sprites?.other.home.front_default}
            alt="Pokemon"
            ref={element}
            onLoad={setTypeOfAnimation}
          />
        </div>
        <div className="types">
          {pokemon?.types?.map((type) => (
            <TypeItems
              key={type.type.name}
              typeName={type.type.name}
            />
          ))}
        </div>
      </LeftContent>
      <ColumnSkew invert />

      <InfoContainer type={pokemon.types && pokemon?.types[0].type.name}>
        <h1>{pokemon.name}</h1>
        <button type="button" onClick={handleNextPokemon}>testeeee</button>
        {pokemon.types && (
        <PokeStats
          stats={pokemon.stats}
          propertyColor={defaultTheme.typeColors[pokemon.types[0].type.name]}
        />
        )}
        <EvolutionInfoContainer />
      </InfoContainer>
    </Container>
  );
}
