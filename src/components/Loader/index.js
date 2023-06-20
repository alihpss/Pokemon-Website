import PropTypes from 'prop-types';

import { Overlay } from './styles';
import Spinner from '../Spinner';

export default function Loader({ isLoading, backgroundColorIsInvisible }) {
  if (!isLoading) {
    return null;
  }

  return (
    <Overlay backgroundColorIsInvisible={backgroundColorIsInvisible}>
      <Spinner size={80} />
    </Overlay>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  backgroundColorIsInvisible: PropTypes.bool,
};

Loader.defaultProps = {
  backgroundColorIsInvisible: false,
};
