import ButtonCell from '@/components/atoms/ButtonCell/ButtonCell';
import '@morpion/components/molecules/Morpion/Morpion.scss';

export default function Morpion({
  squares,
  handleSquareClick,
}: {
  squares: string[];
  handleSquareClick: (index: number) => void;
}) {
  return (
    <ul className="morpion-list" data-testid="morpion">
      {squares.map((value, index) => (
        <li className="morpion-list__item" key={index}>
          <ButtonCell
            value={value}
            onCellClick={() => !value && handleSquareClick(index)}
          />
        </li>
      ))}
    </ul>
  );
}
