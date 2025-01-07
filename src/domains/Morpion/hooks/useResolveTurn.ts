import { useEffect, useState } from 'react';

export function useResolveTurn(squares: string[]) {
  const [isXNext, setIsXNext] = useState(true);

  useEffect(() => {
    const squaresFull = squares.filter((square) => !!square);
    const isX = squaresFull.length % 2 === 0;
    setIsXNext(isX);
  }, [squares]);

  return { isXNext };
}
