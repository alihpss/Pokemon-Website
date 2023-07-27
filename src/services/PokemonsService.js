import HttpClient from './utils/HttpClient';

class PokemonsService {
  constructor() {
    this.httpClient = new HttpClient('https://pokeapi.co/api/v2/');
  }

  getPokemonById(id) {
    return this.httpClient.get(`pokemon/${id}`);
  }

  getPokemonList(limit, offset) {
    return this.httpClient.get(`pokemon/?limit=${limit}&offset=${offset}`);
  }

  getPokemonSpecieInfo(id) {
    return this.httpClient.get(`pokemon-species${id}`);
  }

  getPokemonEvolutionInfo(id) {
    return this.httpClient.get(`evolution-chain${id}`);
  }

  getPokemonType(name) {
    return this.httpClient.get(`type/${name}`);
  }
}

export default new PokemonsService();
