import PropTypes from 'prop-types';

import exportTypeIcons from '../../utils/exportTypeIcons';
import { ButtonContainer, Container } from './styles';

import all from '../../assets/images/type-icons/all.png';

export default function TypeItems({ typeName, isButton, onClick }) {
  if (typeName === 'all') {
    return (
      <ButtonContainer typeName="all" role="button" onClick={onClick}>
        <img src={all} alt="all" />
        <p>all</p>
      </ButtonContainer>
    );
  }

  if (isButton) {
    return (
      <ButtonContainer typeName={typeName} onClick={onClick}>
        <img src={exportTypeIcons[typeName]} alt={typeName} />
        <p>{typeName}</p>
      </ButtonContainer>
    );
  }

  return (
    <Container typeName={typeName}>
      <img src={exportTypeIcons[typeName]} alt={typeName} />
      <p>{typeName}</p>
    </Container>
  );
}

TypeItems.propTypes = {
  typeName: PropTypes.string,
  isButton: PropTypes.bool,
  onClick: PropTypes.func,
};

TypeItems.defaultProps = {
  typeName: 'all',
  isButton: false,
  onClick: null,
};
