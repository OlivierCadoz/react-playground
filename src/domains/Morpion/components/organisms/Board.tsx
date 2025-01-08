import { useMorpion } from '@morpion/hooks/useMorpion.ts';
import Morpion from '@morpion/components/molecules/Morpion/Morpion.tsx';
import Histories from '@morpion/components/molecules/Histories.tsx';

export default function Board() {
  const { squares, histories, winner, handleHistoryClick, handleSquareClick } =
    useMorpion();

  return (
    <>
      {!!winner && <p>Winner: {winner}</p>}

      <Morpion squares={squares} handleSquareClick={handleSquareClick} />

      <Histories
        histories={histories}
        handleHistoryClick={handleHistoryClick}
      />
    </>
  );
}
