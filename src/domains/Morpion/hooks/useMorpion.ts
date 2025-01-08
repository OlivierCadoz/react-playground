import { useState } from 'react';
import { useResolveTurn } from '@morpion/hooks/useResolveTurn.ts';
import { useHistories } from '@morpion/hooks/useHistories.ts';
import { useResolveWinner } from '@morpion/hooks/useResolveWinner.ts';
import { initSquares } from '@morpion/utils/morpion.utils.ts';

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
