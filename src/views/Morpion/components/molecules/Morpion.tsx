import ButtonSquare from '../atoms/ButtonSquare';

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
