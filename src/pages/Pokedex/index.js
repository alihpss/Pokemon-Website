import {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';

import {
  Container,
  ContainerHeader,
  FavoritesContainer,
  PokedexContainer,
} from './styles';

import { FavoritesPokemonList } from '../../context/PokemonFavoritesProvider';

import delay from '../../utils/delay';
import PokemonsService from '../../services/PokemonsService';
import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';
import FavoritesCarousel from '../../components/FavoritesCarousel';
import PokemonItems from '../../components/PokemonItems';
import Input from '../../components/Input';
import exportTypeIcons from '../../utils/exportTypeIcons';
import TypeItems from '../../components/TypeItems';
import Footer from '../../components/Footer';
import toast from '../../utils/toast';

import pikachu from '../../assets/images/pikachu.png';
import notFound from '../../assets/images/not-Found.png';
import searchIcon from '../../assets/images/icons/search.svg';
import heartbreak from '../../assets/images/icons/heartbreak.svg';

export default function Pokedex() {
  const [counter, setCounter] = useState({
    index: 0,
    value: 0,
  });

  const [totalRequests, setTotalRequests] = useState({
    index: 0,
    value: 12,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [pokemonRequisitionToDoList, setPokemonRequisitionToDoList] = useState();
  const [pokemonList, setPokemonList] = useState();
  const [searchName, setSearchName] = useState('');
  const [searchByType, setSearchByType] = useState('');

  const isMountedRef = useRef(true);
  const valueOfNameFilter = useRef();

  const {
    pokemonFavoritesByLS,
    updatePokemonFavoritesByLS,
    renewPokemonFavoritesByLS,
  } = useContext(FavoritesPokemonList);

  const filteredPokemons = useMemo(() => {
    if (searchByType && searchByType !== 'all') {
      return pokemonList?.filter((pokemon) => (
        pokemon.types[0].type.name === searchByType || pokemon.types[1]?.type.name === searchByType
      ));
    }
    if (!searchName) {
      return pokemonList;
    }

    return pokemonList?.filter((pokemon) => (
      pokemon.name.toLowerCase().includes(searchName.toLowerCase())));
  }, [pokemonList, searchName, searchByType]);

  const fetchPokemon = useCallback(async () => {
    try {
      await delay(200);
      const dataPokemonList = await PokemonsService.getPokemonList(
        totalRequests.value,
        counter.value,
      );
      setPokemonRequisitionToDoList(dataPokemonList);
    } catch (error) {
      console.log(error);
    }
  }, [counter, totalRequests]);

  const fetchPokemonList = useCallback(async () => {
    setIsLoading(true);
    if (pokemonRequisitionToDoList) {
      const pokemonListDestructuring = pokemonRequisitionToDoList.results.map(({ name }) => name);

      const pokemonResolvedRequisitionList = await Promise.all(
        pokemonListDestructuring.map(async (pokemonItem) => {
          await delay(2000);
          const response = await PokemonsService.getPokemonById(pokemonItem);
          return response;
        }),
      );

      if (isMountedRef.current) {
        setPokemonList(pokemonResolvedRequisitionList);
      }
    }
    setIsLoading(false);
  }, [pokemonRequisitionToDoList]);

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  useEffect(() => {
    fetchPokemonList();
  }, [fetchPokemonList]);

  function handleChangeSearchName(event) {
    const inputValue = event.target.value;
    valueOfNameFilter.current = inputValue;
  }

  function handleUpdateSearchName(inputValue) {
    if (!inputValue && totalRequests.value === 12) {
      return;
    }

    setIsLoading(true);
    setSearchByType('all');
    setSearchName(inputValue);

    if (!inputValue) {
      setCounter((prevState) => ({
        ...prevState,
        index: 0,
      }));

      setTotalRequests((prevState) => ({
        ...prevState,
        value: 12,
        index: 0,
      }));
    } else {
      setCounter((prevState) => ({
        ...prevState,
        index: 0,
        value: 0,
      }));
      setTotalRequests((prevState) => ({
        ...prevState,
        value: 350,
        index: 0,
      }));
    }
  }

  function handleUpdateSearchByType(type) {
    if ((!type && totalRequests.value === 12)
     || (type.toLowerCase() === searchByType.toLowerCase())) {
      return;
    }

    setIsLoading(true);
    setSearchName('');
    setSearchByType(type.toLowerCase());

    if (!type || type === 'all') {
      setCounter((prevState) => ({
        ...prevState,
        index: 0,
      }));

      setTotalRequests((prevState) => ({
        ...prevState,
        value: 12,
        index: 0,
      }));
    } else {
      setCounter((prevState) => ({
        ...prevState,
        index: 0,
        value: 0,
      }));
      setTotalRequests((prevState) => ({
        ...prevState,
        value: 350,
        index: 0,
      }));
    }
  }

  function handleRemoveFavoritePokemon(id) {
    const newFavoritesPokemonList = pokemonFavoritesByLS.filter((pokemonId) => (
      pokemonId !== id
    ));

    renewPokemonFavoritesByLS(newFavoritesPokemonList);
    toast({
      type: 'danger',
      text: 'Pokemon has been removed from favorites',
    });
  }

  function handleSetNewPokemonList(valueToIncrease) {
    setCounter({
      index: valueToIncrease,
      value: valueToIncrease * 12,
    });
  }

  function handleControllerPaginationLessOne() {
    if (counter.index === 0) {
      return;
    }

    setCounter((prevState) => ({
      index: prevState.index - 1,
      value: prevState.value - 12,
    }));
  }

  function handleControllerPaginationAddOne() {
    if (counter.index === 39) {
      return;
    }

    setCounter((prevState) => ({
      index: prevState.index + 1,
      value: prevState.value + 12,
    }));
  }

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
            <p>Search pokemon by Name: </p>
            <div id="filterByName">
              <Input placeholder="Search by Name" onChange={handleChangeSearchName} maxLength={12} />
              <button type="button" onClick={() => handleUpdateSearchName(valueOfNameFilter.current)}>
                <img src={searchIcon} alt="Search icon" />
              </button>
            </div>
          </div>
          <div className="typesCarousel">
            <p>Filter by Type: </p>
            <FavoritesCarousel>
              <TypeItems typeName="all" onClick={() => handleUpdateSearchByType('all')} />
              {Object.keys(exportTypeIcons).map((type) => (
                <TypeItems
                  key={Math.random()}
                  typeName={type}
                  isButton
                  onClick={() => handleUpdateSearchByType(type)}
                />
              ))}
            </FavoritesCarousel>
          </div>
        </div>

        <div className="searchResultAndResetFilter">
          {searchName && (
          <>
            <p>
              Results for  &quot;
              {searchName}
              &quot;:
            </p>
            <button type="button" onClick={() => handleUpdateSearchName('')}>
              <span>Reset search</span>
            </button>
          </>
          )}

          {(searchByType && searchByType !== 'all') && (
            <>
              <div>
                <p>
                  Results for:
                </p>
                <TypeItems typeName={searchByType} />
              </div>
              <button type="button" onClick={() => handleUpdateSearchByType('')}>
                <span>Reset filter</span>
              </button>
            </>
          )}
        </div>

        <div id="pokedexList">
          <Loader isLoading={isLoading} backgroundColorIsInvisible />
          {!isLoading && filteredPokemons?.map((pokemon) => (
            <PokemonItems
              key={pokemon.id}
              idFavoritePokemon={pokemon.id}
            />
          ))}
        </div>

        <Pagination
          counter={counter}
          onClick={handleSetNewPokemonList}
          controllerAddIndex={handleControllerPaginationAddOne}
          controllerRemoveIndex={handleControllerPaginationLessOne}
          isDisabled={totalRequests.value >= 13}
        />
        <button type="button" onClick={() => updatePokemonFavoritesByLS(1)}>update</button>

      </PokedexContainer>

      <Footer />
    </Container>
  );
}
