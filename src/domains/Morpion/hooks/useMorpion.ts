import { useState } from 'react';
import { useResolveTurn } from './useResolveTurn.ts';
import { useHistories } from './useHistories.ts';
import { initSquares } from '../utils/morpion.utils.ts';
import { useResolveWinner } from './useResolveWinner.ts';

export function useMorpion() {
  const [squares, setSquares] = useState(initSquares());

  const { histories, setHistories, setHistoryIndex } = useHistories();
  const handleHistoryClick = (index: number) => {
    setSquares([...histories[index]]);
    setHistoryIndex(index);
  };

  const { isXNext } = useResolveTurn(squares);
  const { winner } = useResolveWinner(squares);
  const handleSquareClick = (index: number) => {
    if (winner) return;

    const nextSquares = [...squares];
    nextSquares[index] = isXNext ? 'X' : 'O';

    setHistories(nextSquares);
    setSquares(nextSquares);
  };

  return {
    squares,
    histories,
    winner,
    handleHistoryClick,
    handleSquareClick,
  };
}
