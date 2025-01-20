import '@components/atoms/ButtonCell/ButtonCell.scss';

export default function ButtonCell({
  value,
  onCellClick,
}: {
  value: string | number;
  onCellClick: () => void;
}) {
  const handleClick = () => onCellClick();

  return (
    <button className={'button-cell'} onClick={handleClick}>
      {value}
    </button>
  );
}
