/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { CarouselContainer, Container } from './styles';

import chevron from '../../assets/images/icons/chevron-left.svg';
import chevronRigth from '../../assets/images/icons/chevron-right.svg';

export default function FavoritesCarousel({ children, justifyContent }) {
  const carousel = useRef(null);
  const [disableLeftArrow, setDisableLeftArrow] = useState(true);
  const [disableRightArrow, setDisableRightArrow] = useState(false);

  function handleChangePositionToRight(e) {
    e.preventDefault();
    carousel.current.scrollLeft -= 360;
    setDisableRightArrow(false);

    if (carousel.current.childNodes[0].getBoundingClientRect().x > -20) {
      setDisableLeftArrow(true);
    }
  }

  function handleChangePositionToLeft(e) {
    e.preventDefault();
    carousel.current.scrollLeft += 360;
    setDisableLeftArrow(false);

    if (carousel.current.childNodes[carousel.current.childNodes.length - 1].getBoundingClientRect().x < 1300) {
      setDisableRightArrow(true);
    }
  }

  return (
    <Container justifyContent={justifyContent}>
      <button className="controller" type="button" onClick={handleChangePositionToRight} disabled={disableLeftArrow}>
        <img src={chevron} alt="Seta para esquerda" />
      </button>
      <CarouselContainer ref={carousel} justifyContent={justifyContent}>
        {children}
      </CarouselContainer>
      <button className="controller" type="button" onClick={handleChangePositionToLeft} disabled={disableRightArrow}>
        <img src={chevronRigth} alt="Seta para direita" />
      </button>
    </Container>
  );
}

FavoritesCarousel.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.string,
};

FavoritesCarousel.defaultProps = {
  justifyContent: 'flex-start',
};
