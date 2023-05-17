import PropTypes from 'prop-types';

import exportTypeIcons from '../../utils/exportTypeIcons';
import { Container } from './styles';

export default function TypeItems({ typeName }) {
  return (
    <Container typeName={typeName}>
      <img src={exportTypeIcons[typeName]} alt={typeName} />
      <p>{typeName}</p>
    </Container>
  );
}

TypeItems.propTypes = {
  typeName: PropTypes.string.isRequired,
};
