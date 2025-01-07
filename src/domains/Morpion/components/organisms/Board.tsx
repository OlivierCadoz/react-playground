import { useMorpion } from '@/domains/Morpion/hooks/useMorpion.ts';
import Morpion from '@/domains/Morpion/components/molecules/Morpion/Morpion.tsx';
import Histories from '@/domains/Morpion/components/molecules/Histories.tsx';

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
