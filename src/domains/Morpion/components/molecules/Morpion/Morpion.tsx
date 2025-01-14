import ButtonSquare from '@components/atoms/ButtonSquare/ButtonSquare';
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
          <ButtonSquare
            value={value}
            onSquareClick={() => !value && handleSquareClick(index)}
          />
        </li>
      ))}
    </ul>
  );
}
