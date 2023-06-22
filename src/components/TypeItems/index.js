import PropTypes from 'prop-types';

import exportTypeIcons from '../../utils/exportTypeIcons';
import { Container } from './styles';

import all from '../../assets/images/type-icons/all.png';

export default function TypeItems({ typeName }) {
  if (typeName === 'all') {
    return (
      <Container typeName="all" role="button">
        <img src={all} alt="all" />
        <p>all</p>
      </Container >
    );
  }

  return (
    <Container typeName={typeName} role="button">
      <img src={exportTypeIcons[typeName]} alt={typeName} />
      <p>{typeName}</p>
    </Container>
  );
}

TypeItems.propTypes = {
  typeName: PropTypes.string,
};

TypeItems.defaultProps = {
  typeName: 'all',
};
