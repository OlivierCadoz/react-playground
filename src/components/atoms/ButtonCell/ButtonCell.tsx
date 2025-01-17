import '@components/atoms/ButtonCell/ButtonCell.scss';

export default function ButtonCell({
  value,
  disabled = false,
  onCellClick,
}: {
  value: string | number;
  disabled?: boolean;
  onCellClick: () => void;
}) {
  const handleClick = () => onCellClick();

  return (
    <button className="button-cell" onClick={handleClick} disabled={disabled}>
      {value}
    </button>
  );
}
