import { useState, useEffect } from 'react';
import {
  SCREEN_SM,
  SCREEN_MD,
  SCREEN_LG,
  SCREEN_XL,
  SCREEN_XXL,
  SCREEN_MY,
  SCREEN_MY2,

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
  }, []);

  return {
    width,
    isScreenMy: width <= SCREEN_MY ,
    isScreenSm: width >= SCREEN_SM && width < 1001,
    isScreenMd: width >= SCREEN_MD && width < 1001,
    isScreenLg: width >= SCREEN_LG ,
    isScreenXl: width >= SCREEN_XL,
    isScreenXxl: width >= SCREEN_XXL,
    isScreenMy2: width >= SCREEN_MY2,
    isScreenMy3: width < SCREEN_LG,
  };
};
