import { useEffect, useState } from 'react';
import { computeWinner } from '../utils/winner.utils.ts';

export function useResolveWinner(squares: string[]) {
  const [winner, setWinner] = useState('');

  useEffect(() => {
    const newWinner = computeWinner(squares);

    setWinner(newWinner);
  }, [squares]);

  return { winner };
}
