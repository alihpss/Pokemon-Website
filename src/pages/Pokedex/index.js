import { useState } from 'react';
import { Container, ContainerHeader } from './styles';

import pikachu from '../../assets/images/pikachu.png';

export default function Pokedex() {
  const [aas] = useState(localStorage.getItem('name'));
  function set() {
    localStorage.setItem('name', 'Ali');
  }

  function del() {
    localStorage.clear('name');
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
      <button type="button" onClick={set}>asd</button>
      <button type="button" onClick={del}>del</button>
      <button type="button" onClick={del}>{aas}</button>
    </Container>
  );
}
