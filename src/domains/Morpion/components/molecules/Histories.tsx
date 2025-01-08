import ButtonCommon from '@morpion/components/atoms/ButtonCommon';

export default function Histories({
  histories,
  handleHistoryClick,
}: {
  histories: string[][];
  handleHistoryClick: (index: number) => void;
}) {
  return (
    <ul className="histories-list">
      {histories.map((_, index) => (
        <li key={index} className="histories-list__item">
          <ButtonCommon onClickEvent={() => handleHistoryClick(index)}>
            {index === 0 ? 'Revenir au début' : `Coup n°${index}`}
          </ButtonCommon>
        </li>
      ))}
    </ul>
  );
}
