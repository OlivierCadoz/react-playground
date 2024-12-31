export default function ButtonSquare({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: () => void;
}) {
  const handleClick = () => !value && onSquareClick();

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
