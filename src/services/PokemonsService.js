import HttpClient from './utils/HttpClient';

class PokemonsService {
  constructor() {
    this.httpClient = new HttpClient('https://pokeapi.co/api/v2/pokemon/');
    this.httpClientList = new HttpClient('https://pokeapi.co/api/v2/pokemon/?');
  }

  getPokemonById(id) {
    return this.httpClient.get(`${id}`);
  }

  getPokemonList(limit, offset) {
    return this.httpClientList.get(`limit=${limit}&offset=${offset}`);
  }
}

export default new PokemonsService();
