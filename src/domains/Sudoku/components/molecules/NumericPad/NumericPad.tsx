import '@sudoku/components/molecules/NumericPad/NumericPad.scss';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import { numerics } from '@/domains/Sudoku/constants/numerics';

export default function NumericPad({
  onNumberClick,
}: {
  onNumberClick: (value: number) => void;
}) {
  return (
    <ul className="numeric-pad">
      {numerics.map((number) => (
        <li key={number}>
          <ButtonCommon onClickEvent={() => onNumberClick(number)}>
            {number}
          </ButtonCommon>
        </li>
      ))}
    </ul>
  );
}
