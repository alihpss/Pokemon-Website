import { useEffect, useRef, useState } from 'react';

export default function useCarrouselHome(carrouselInformation) {
  const [animation, setAnimation] = useState('');
  const [counter, setCounter] = useState(0);
  const [hasAnimation, setHasAnimation] = useState(false);

  const element = useRef(null);

  useEffect(() => {
    const carrouselElement = element.current;

    function handleDisableAnimation() {
      setHasAnimation(false);
    }

    if (carrouselElement) {
      carrouselElement.addEventListener('animationend', handleDisableAnimation);
    }

    setAnimation('');

    return (() => {
      carrouselElement.removeEventListener('animationend', handleDisableAnimation);
    });
  }, [counter]);

  const newBackgroundColor = carrouselInformation[counter].color;

  return {
    animation,
    newBackgroundColor,
    element,
    setAnimation,
    setHasAnimation,
    hasAnimation,
    counter,
    setCounter,
  };
}
