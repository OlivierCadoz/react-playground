export default function ButtonCommon({
  children,
  disabled = false,
  onClickEvent,
}: {
  children: string;
  disabled?: boolean;
  onClickEvent: () => void;
}) {
  return (
    <button onClick={onClickEvent} disabled={disabled}>
      {children}
    </button>
  );
}
