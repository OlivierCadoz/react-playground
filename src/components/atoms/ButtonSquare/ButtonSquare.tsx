import '@components/atoms/ButtonSquare/ButtonSquare.scss';

export default function ButtonSquare({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: () => void;
}) {
  const handleClick = () => onSquareClick();

  return (
    <button className="button-square" onClick={handleClick}>
      {value}
    </button>
  );
}
