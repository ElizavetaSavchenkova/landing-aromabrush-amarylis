import { useState, useEffect } from 'react';
import {
  SCREEN_SM,
  SCREEN_MD,
  SCREEN_LG,
  SCREEN_XL,
  SCREEN_XXL,
  SCREEN_MY,
  SCREEN_MY2,
  SCREEN_MY4,
  SCREEN_MY5,
  SCREEN_MY6,
  SCREEN_MY7,
  SCREEN_MY8,
  SCREEN_MY10,
  SCREEN_MY9,
  SCREEN_MY11,
  SCREEN_MY13,
  SCREEN_MY14,
  SCREEN_MY15,
  SCREEN_MY16,

} from './const-breakpoints';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return {
    width,
    isScreenMy: width <= SCREEN_MY,
    isScreenSm: width >= SCREEN_SM && width < 1001,
    isScreenMd: width >= SCREEN_MD && width < 1001,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL,
    isScreenXxl: width >= SCREEN_XXL,
    isScreenMy2: width >= SCREEN_MY2,
    isScreenMy3: width < SCREEN_LG,
    isScreenMy4: width <= SCREEN_MY4,
    isScreenMy5: width >= SCREEN_MY5,
    isScreenMy6: width <= SCREEN_MY6,
    isScreenMy7: width >= SCREEN_MY7,
    isScreenMy8: width >= SCREEN_MY8,
    isScreenMy9: width >= SCREEN_MY9,
    isScreenMy10: width <= SCREEN_MY10 && width > SCREEN_MY11,
    isScreenMy11: width <= SCREEN_MY11,
    isScreenMy12: width > SCREEN_MY13,
    isScreenMy13: width <= SCREEN_MY13,
    isScreenMy14: width >= SCREEN_MY14,
    isScreenMy15: width <= SCREEN_MY15 && width > SCREEN_MY16,
    isScreenMy16: width <= 480,
    isScreenMy19: width >= 481,
    isScreenMy17: width <= SCREEN_MY4 && width > SCREEN_MY15,
  };
};
