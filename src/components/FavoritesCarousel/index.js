/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { CarouselContainer, Container } from './styles';

import chevron from '../../assets/images/icons/chevron-left.svg';
import chevronRigth from '../../assets/images/icons/chevron-right.svg';

export default function FavoritesCarousel({ children, justifyContent, carouselWidthToDisableBtn }) {
  const carousel = useRef(null);
  const [disableLeftArrow, setDisableLeftArrow] = useState(true);
  const [disableRightArrow, setDisableRightArrow] = useState(false);

  function handleChangePositionToRight(e) {
    e.preventDefault();
    carousel.current.scrollLeft -= (carousel.current.childNodes[0].clientWidth + 32);
    setDisableRightArrow(false);

    console.log(carousel.current.clientWidth - carousel.current.childNodes[0].getBoundingClientRect().x, window.screen.width * 0.5 - 30);

    if (carousel.current.clientWidth - carousel.current.childNodes[0].getBoundingClientRect().x <= carouselWidthToDisableBtn) {
      setDisableLeftArrow(false);
      console.log('deu');
    }
  }

  function handleChangePositionToLeft(e) {
    e.preventDefault();
    carousel.current.scrollLeft += (carousel.current.childNodes[0].clientWidth + 32);
    setDisableLeftArrow(false);

    if (carousel.current.childNodes[carousel.current.childNodes.length - 1].getBoundingClientRect().x <= window.screen.width * 0.74 + 70) {
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
  carouselWidthToDisableBtn: PropTypes.number,
};

FavoritesCarousel.defaultProps = {
  justifyContent: 'flex-start',
  carouselWidthToDisableBtn: 650,
};
