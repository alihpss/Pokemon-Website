import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

import pokeball from '../../assets/images/icons/pokeball-card.svg';

export default function MoreInfoButton({ idPokemon, pokemonType }) {
  return (
    <StyledButton pokemonType={pokemonType}>
      <Link to={`/pokemonInfo/${idPokemon}`}>
        <button type="button">
          <img src={pokeball} alt="Pokeball Icon" />
          <p>More info</p>
        </button>
      </Link>
    </StyledButton>
  );
}

MoreInfoButton.propTypes = {
  idPokemon: PropTypes.number.isRequired,
  pokemonType: PropTypes.string.isRequired,
};
