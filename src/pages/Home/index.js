import { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ColumnSkew,
  Container,
  ImageContainer,
  LeftContent,
  TextContainer,
  ImagesLeftContentContainer,
  CarrouselSelectImage,
} from './styles';

import cubone from '../../assets/images/cubone-bg.png';
import charmander from '../../assets/images/black-charmander.png';
import squirtle from '../../assets/images/squirtle.png';

import circle from '../../assets/images/icons/circle-fill.svg';
import useCarrouselHome from './useCarrouselHome';

export default function Home() {
  const carrouselInformation = [
    { image: squirtle, color: '#6797FA', id: 0 },
    { image: cubone, color: '#9f7ac5', id: 1 },
    { image: charmander, color: '#FFA630', id: 2 },
  ];

  const {
    animation,
    newBackgroundColor,
    element,
    hasAnimation,
    setHasAnimation,
    setAnimation,
    counter,
    setCounter,
  } = useCarrouselHome(carrouselInformation);

  const handleChangeImageCarrousel = useCallback((id) => {
    setHasAnimation(true);
    if (id > counter) {
      setCounter((prevState) => (prevState >= carrouselInformation.length - 1
        ? 0
        : id));
    } else if (id < counter) {
      setCounter((prevState) => (prevState <= 0
        ? 0
        : id));
    }
  }, [counter]);

  function setTypeOfAnimation() {
    setAnimation('moveDown');
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleChangeImageCarrousel(counter + 1);
    }, 7000);

    return (() => {
      clearTimeout(timeOut);
    });
  });

  return (
    <Container backgroundColor={newBackgroundColor}>
      <LeftContent>
        <TextContainer>
          <h1>Gotta Catch &apos;Em All!</h1>
          <p>
            Pokemon, also known as Pocket Monster in Japan,
            is a Japanese media franchise managed by the Pokemon Company,
            a company founded by Nintendo.
          </p>
          <Link to="/pokedex">
            <button type="button" style={{ backgroundColor: newBackgroundColor }}>
              Go to Pokedex
            </button>
          </Link>
        </TextContainer>

        <ImagesLeftContentContainer>
          <div />
          <div />
        </ImagesLeftContentContainer>
      </LeftContent>

      <ColumnSkew />

      <ImageContainer animated={hasAnimation} typeAnimation={animation}>
        <img ref={element} src={carrouselInformation[counter].image} alt="Pokemon" onLoad={setTypeOfAnimation} />
      </ImageContainer>

      {carrouselInformation.map((item) => (
        <CarrouselSelectImage key={item.id} indexOfItem={item.id} counter={counter}>
          <button type="button" id={item.id} onClick={() => handleChangeImageCarrousel(item.id)}>
            <img src={circle} alt={item.image} />
          </button>
        </CarrouselSelectImage>
      ))}

    </Container>
  );
}
