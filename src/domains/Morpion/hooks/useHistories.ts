import { useState } from 'react';
import { initSquares } from '../utils/morpion.utils.ts';

export function useHistories() {
  const [historyIndex, setHistoryIndex] = useState(0);
  const [histories, setHistories_] = useState([initSquares()]);

  const setHistories = (squares: string[]) => {
    const squaresSaved = [...squares];
    const histories_ = [...histories];

    if (historyIndex !== histories_.length - 1) {
      histories_.length = historyIndex + 1;
    }

    setHistories_([...histories_, squaresSaved]);
    setHistoryIndex(histories_.length);
  };

  const resetHistories = () => {
    setHistories_([initSquares()]);
    setHistoryIndex(0);
  };

  return {
    histories,
    setHistories,
    resetHistories,
    setHistoryIndex,
  };
}
