import PropTypes from 'prop-types';

import { Overlay } from './styles';
import Spinner from '../Spinner';

export default function Loader({ isLoading, backgroundColorIsInvisible, size }) {
  if (!isLoading) {
    return null;
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
};

Loader.defaultProps = {
  backgroundColorIsInvisible: false,
  size: 80,
};
