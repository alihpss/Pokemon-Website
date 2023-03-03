import PropTypes from 'prop-types';
import { useRef } from 'react';
import { CarouselContainer, Container } from './styles';

import chevron from '../../assets/images/icons/chevron-left.svg';
import chevronRigth from '../../assets/images/icons/chevron-right.svg';

export default function FavoritesCarousel({ children }) {
  const carousel = useRef(null);

  function handleChangePositionToRight(e) {
    e.preventDefault();
    carousel.current.scrollLeft -= 312;
  }

  function handleChangePositionToLeft(e) {
    e.preventDefault();
    carousel.current.scrollLeft += 312;
  }

  return (
    <Container>
      <button type="button" onClick={handleChangePositionToRight}><img src={chevron} alt="Seta para esquerda" /></button>
      <CarouselContainer ref={carousel}>
        {children}
      </CarouselContainer>
      <button type="button" onClick={handleChangePositionToLeft}><img src={chevronRigth} alt="Seta para direita" /></button>
    </Container>
  );
}

FavoritesCarousel.propTypes = {
  children: PropTypes.node.isRequired,
};
