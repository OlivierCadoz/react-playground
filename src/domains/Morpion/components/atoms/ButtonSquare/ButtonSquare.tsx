import '@morpion/components/atoms/ButtonSquare/ButtonSquare.scss';

export default function ButtonSquare({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: () => void;
}) {
  const handleClick = () => !value && onSquareClick();

  return (
    <button className="button-square" onClick={handleClick}>
      {value}
    </button>
  );
}
