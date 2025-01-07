import ButtonSquare from '@/domains/Morpion/components/atoms/ButtonSquare/ButtonSquare';
import '@/domains/Morpion/components/molecules/Morpion/Morpion.scss';

export default function Morpion({
  squares,
  handleSquareClick,
}: {
  squares: string[];
  handleSquareClick: (index: number) => void;
}) {
  return (
    <ul className="morpion-list">
      {squares.map((value, index) => (
        <li className="morpion-list__item" key={index}>
          <ButtonSquare
            value={value}
            onSquareClick={() => handleSquareClick(index)}
          />
        </li>
      ))}
    </ul>
  );
}
