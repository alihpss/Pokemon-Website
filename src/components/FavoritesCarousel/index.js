import PropTypes from 'prop-types';
import { Container } from './styles';

export default function FavoritesCarousel({ children, currentPosition }) {
  return (
    <Container currentPosition={currentPosition}>
      {children}
    </Container>
  );
}

FavoritesCarousel.propTypes = {
  children: PropTypes.node.isRequired,
  currentPosition: PropTypes.number.isRequired,
};
