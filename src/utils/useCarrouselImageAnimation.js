import { useEffect, useRef, useState } from 'react';

export default function useCarrouselHome(carrouselInformation = [], initialValue = 0) {
  const [animation, setAnimation] = useState('');
  const [counter, setCounter] = useState(initialValue);
  const [hasAnimation, setHasAnimation] = useState(false);

  const element = useRef(null);

  function handleDisableAnimation() {
    setHasAnimation(false);
  }

  useEffect(() => {
    const carrouselElement = element.current;

    if (carrouselElement) {
      carrouselElement.addEventListener('animationend', handleDisableAnimation);
    }

    if (animation) {
      setAnimation('');
    }

    return () => {
      carrouselElement.removeEventListener('animationend', handleDisableAnimation);
    };
  }, [counter, initialValue]);

  const newBackgroundColor = carrouselInformation.length > 0 ? carrouselInformation[counter]?.color : '';

  return {
    animation,
    setAnimation,
    hasAnimation,
    setHasAnimation,
    counter,
    element,
    setCounter,
    newBackgroundColor,
    handleDisableAnimation,
  };
}
