import { useParams, useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import {
  Container, ControllerContainer, InfoContainer, LeftContent, WeaknessesContainer,
} from './styles';

import PokemonsService from '../../services/PokemonsService';
import ColumnSkew from '../../components/ColumnSkew';
import TypeItems from '../../components/TypeItems';
import useCarrouselHome from '../../utils/useCarrouselImageAnimation';
import Loader from '../../components/Loader';
import PokeStats from '../../components/PokeStats';
import EvolutionInfoContainer from '../../components/EvolutionInfoContainer';
import toast from '../../utils/toast';

import { HeaderColor } from '../../context/HeaderColorProvider';
import { FavoritesPokemonList } from '../../context/PokemonFavoritesProvider';

import defaultTheme from '../../assets/styles/themes/default';

import heart from '../../assets/images/icons/heart-fill.svg';
import heartbreak from '../../assets/images/icons/heartbreak.svg';
import caretL from '../../assets/images/icons/caret-left.svg';
import caretR from '../../assets/images/icons/caret-right.svg';

export default function PokemonInfo() {
  const { id } = useParams();
  const history = useHistory();

  const [idPokemon, setIdPokemon] = useState(id);
  const [pokemon, setPokemon] = useState([]);
  const [evolutionInfo, setEvolutionInfo] = useState([]);
  const [typeInfo, setTypeInfo] = useState([]);
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

  const {
    pokemonFavoritesByLS,
    updatePokemonFavoritesByLS,
    renewPokemonFavoritesByLS,
  } = useContext(FavoritesPokemonList);

  const handleNextPokemon = () => {
    const nextId = Number(id) + 1;
    history.push(`/pokemonInfo/${nextId}`);
  };

  const handlePreviousPokemon = () => {
    if (Number(id) === 1) {
      return;
    }
    const nextId = Number(id) - 1;
    history.push(`/pokemonInfo/${nextId}`);
  };

  const splitString = (object, string) => object.split(string)[1];

  const handleAddPokemonToFavoriteList = (pokemonId) => {
    const pokemonExistsInFavoriteList = pokemonFavoritesByLS;

    if (pokemonExistsInFavoriteList.includes(pokemonId)) {
      return;
    }

    updatePokemonFavoritesByLS(pokemonId);
    toast({
      type: 'success',
      text: 'Pokemon added to favorites',
    });
  };

  const handleRenewPokemonFavoriteList = (pokemonId) => {
    const newFavoritesPokemonList = pokemonFavoritesByLS.filter((pokemonIdInFavList) => (
      pokemonIdInFavList !== pokemonId
    ));

    renewPokemonFavoritesByLS(newFavoritesPokemonList);
    toast({
      type: 'danger',
      text: 'Pokemon has been removed from favorites',
    });
  };

  useEffect(() => {
    setCounter(id);
  }, [id]);

  useEffect(() => {
    async function getPokemonData() {
      setIsLoading(true);
      try {
        const pokemonInfo = await PokemonsService.getPokemonById(idPokemon);
        const { species } = pokemonInfo;
        const { name } = pokemonInfo.types[0].type;

        const specieData = await PokemonsService.getPokemonSpecieInfo(splitString(species.url, 'species'));
        const { url } = specieData.evolution_chain;

        const evolutionData = await PokemonsService.getPokemonEvolutionInfo(splitString(url, 'evolution-chain'));
        const typesData = await PokemonsService.getPokemonTypeInfo(name);

        setPokemon(pokemonInfo);
        setEvolutionInfo(evolutionData);
        setTypeInfo(typesData);
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
  console.log(typeInfo);

  return (
    <Container type={pokemon.types && pokemon?.types[0].type.name}>
      <ControllerContainer>
        <button type="button" onClick={handlePreviousPokemon}>
          <img src={caretL} alt="Go to left" />
        </button>

        <button type="button" onClick={handleNextPokemon}>
          <img src={caretR} alt="Go to right" />
        </button>
      </ControllerContainer>
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
        <div className="nameAndFavoriteLogo">
          <h1>{pokemon.name}</h1>
          <div>
            {pokemonFavoritesByLS.includes(pokemon.id) && (
            <>
              <button type="button" onClick={() => handleRenewPokemonFavoriteList(pokemon.id)}>
                <img src={heartbreak} alt="Favorite logo" />
              </button>
              <p>Remove of favorites list</p>
            </>
            )}
            {!pokemonFavoritesByLS.includes(pokemon.id) && (
            <>
              <button type="button" onClick={() => handleAddPokemonToFavoriteList(pokemon.id)}>
                <img src={heart} alt="Favorite logo" />
              </button>
              <p>Add to favorites list</p>
            </>
            )}
          </div>
        </div>
        {pokemon.types && (
        <PokeStats
          stats={pokemon.stats}
          propertyColor={defaultTheme.typeColors[pokemon.types[0].type.name]}
        />
        )}
        <WeaknessesContainer type={pokemon.types && pokemon?.types[0].type.name}>
          <p>Weaknesses:</p>
          <div>
            {typeInfo?.damage_relations?.double_damage_from?.map((damagefrom) => (
              <TypeItems
                key={damagefrom.name}
                typeName={damagefrom.name}
              />
            ))}
          </div>
        </WeaknessesContainer>
        <EvolutionInfoContainer />
      </InfoContainer>
    </Container>
  );
}
