'use client';

import { useEffect, useState } from 'react';

export function useWindowSize() {
  // Inicializa o estado com uma verificação para evitar erros no servidor (onde 'window' não existe)
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? document.documentElement.clientWidth : 0
  );

  useEffect(() => {
    // Apenas executa este efeito no lado do cliente
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      // Usa document.documentElement.clientWidth para obter a largura interna da viewport,
      // que já desconta a largura da barra de rolagem vertical.
      setWidth(document.documentElement.clientWidth);
    };

    // Define o tamanho inicial
    handleResize();

    // Adiciona o listener para o evento 'resize'
    window.addEventListener('resize', handleResize);

    // Função de limpeza para remover o listener quando o componente for desmontado
    return () => window.removeEventListener('resize', handleResize);
  }, []); // O array de dependências vazio garante que o efeito rode apenas uma vez (na montagem)

  return width;
}