'use client';

import { useEffect, useState } from 'react';

export function useWindowSize() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    updateWidth(); // Inicializa com valor atual

    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return width;
}
