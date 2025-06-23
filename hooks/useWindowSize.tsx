'use client';

import { useEffect, useState } from 'react';

// Adicionei também a altura, pois é comum precisar dos dois.
// Você pode remover se precisar apenas da largura.
interface WindowSize {
  width: number;
}

export function useWindowSize(): WindowSize {
  // 1. Inicializa o estado com um valor padrão (0) que é consistente no servidor e no cliente.
  // Isso garante que o primeiro render (no cliente) corresponda ao HTML do servidor.
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
  });

  useEffect(() => {
    // 2. Este efeito só é executado no lado do cliente, após a montagem do componente.
    const handleResize = () => {
      setWindowSize({
        // Usamos document.documentElement.clientWidth para descontar a barra de rolagem
        width: document.documentElement.clientWidth,
      });
    };

    // 3. Chama o handler imediatamente para definir o tamanho inicial assim que o componente montar no cliente.
    handleResize();

    // 4. Adiciona o event listener para o evento 'resize'.
    window.addEventListener('resize', handleResize);

    // 5. Retorna uma função de limpeza para remover o listener quando o componente for desmontado.
    // Isso evita vazamentos de memória.
    return () => window.removeEventListener('resize', handleResize);
  }, []); // O array de dependências vazio [] garante que este efeito rode apenas uma vez (na montagem).

  return windowSize;
}