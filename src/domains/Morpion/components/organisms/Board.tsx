import { useMorpion } from '@/domains/Morpion/hooks/useMorpion.ts';
import Morpion from '@/domains/Morpion/components/molecules/Morpion/Morpion.tsx';
import Histories from '@/domains/Morpion/components/molecules/Histories.tsx';
import ButtonCommon from '@/domains/Morpion/components/atoms/ButtonCommon.tsx';


export default function Board() {
  const {
    squares,
    histories,
    winner,
    handleHistoryClick,
    handleSquareClick,
    handleResetClick,
  } = useMorpion();

  return (
    <>
      {!!winner && <p>Winner: {winner}</p>}

      <Morpion squares={squares} handleSquareClick={handleSquareClick} />

      <ButtonCommon onClickEvent={handleResetClick}>Reset</ButtonCommon>

      <Histories
        histories={histories}
        handleHistoryClick={handleHistoryClick}
      />
    </>
  );
}
