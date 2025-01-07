export default function ButtonCommon({
  children,
  onClickEvent,
}: {
  children: string;
  onClickEvent: () => void;
}) {
  return <button onClick={onClickEvent}>{children}</button>;
}
