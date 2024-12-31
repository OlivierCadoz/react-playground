import { useMorpion } from '../../hooks/useMorpion.ts';
import Morpion from '../molecules/Morpion.tsx';
import Histories from '../molecules/Histories.tsx';
import ButtonCommon from '../atoms/ButtonCommon.tsx';

export default function Board() {
  const morpion = useMorpion();
  const {
    squares,
    histories,
    winner,
    handleHistoryClick,
    handleSquareClick,
    handleResetClick,
  } = morpion;

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
