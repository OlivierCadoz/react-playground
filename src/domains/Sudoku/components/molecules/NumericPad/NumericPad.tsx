import '@sudoku/components/molecules/NumericPad/NumericPad.scss';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import { numerics } from '@/domains/Sudoku/constants/numerics';

export default function NumericPad({
  numbersLeft,
  onNumberClick,
}: {
  numbersLeft: number[];
  onNumberClick: (value: number) => void;
}) {
  return (
    <ul className="numeric-pad">
      {numerics.map((number, i) => (
        <li key={number}>
          <ButtonCommon onClickEvent={() => onNumberClick(number)}>
            <span className='numeric-pad__number'>{number}</span>

            {!!number && <span className='numeric-pad__left'>{numbersLeft[i]}</span>}
          </ButtonCommon>
        </li>
      ))}
    </ul>
  );
}
