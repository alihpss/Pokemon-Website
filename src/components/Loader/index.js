import PropTypes from 'prop-types';

import { Overlay } from './styles';
import Spinner from '../Spinner';

import pokeballImage from '../../assets/images/pokeballLoader.png';

export default function Loader({
  isLoading, backgroundColorIsInvisible, size, isPokeballImage,
}) {
  if (!isLoading) {
    return null;
  }

  if (isPokeballImage) {
    return (
      <Overlay backgroundColorIsInvisible={backgroundColorIsInvisible}>
        <img src={pokeballImage} alt="pokeballImage" />
      </Overlay>
    );
  }

  return (
    <Overlay backgroundColorIsInvisible={backgroundColorIsInvisible}>
      <Spinner size={size} />
    </Overlay>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  backgroundColorIsInvisible: PropTypes.bool,
  size: PropTypes.number,
  isPokeballImage: PropTypes.bool,
};

Loader.defaultProps = {
  backgroundColorIsInvisible: false,
  size: 80,
  isPokeballImage: false,
};
