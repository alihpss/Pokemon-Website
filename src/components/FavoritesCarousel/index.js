import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { CarouselContainer, Container } from './styles';

import chevron from '../../assets/images/icons/chevron-left.svg';
import chevronRigth from '../../assets/images/icons/chevron-right.svg';

export default function FavoritesCarousel({ children, justifyContent }) {
  const carousel = useRef(null);
  const [disableLeftArrow, setDisableLeftArrow] = useState(true);
  const [disableRightArrow, setDisableRightArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft } = carousel.current;
      const maxScrollLeft = carousel.current.scrollWidth - carousel.current.clientWidth;
      const minScrollLeft = 0;

      if (scrollLeft === minScrollLeft) {
        setDisableLeftArrow(true);
      } else {
        setDisableLeftArrow(false);
      }

      if (scrollLeft >= maxScrollLeft) {
        setDisableRightArrow(true);
      } else {
        setDisableRightArrow(false);
      }
    };

    carousel.current.addEventListener('scroll', handleScroll);

    return () => {
      carousel.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (children.length === 1) {
      setDisableRightArrow(true);
    } else {
      setDisableRightArrow(false);
    }
  }, [children]);

  function handleChangePositionToRight() {
    carousel.current.scrollLeft -= (carousel.current.childNodes[0].clientWidth + 32);
  }

  function handleChangePositionToLeft() {
    carousel.current.scrollLeft += (carousel.current.childNodes[0].clientWidth + 32);
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
