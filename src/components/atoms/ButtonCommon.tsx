import { ReactNode } from "react";

export default function ButtonCommon({
  children,
  disabled = false,
  onClickEvent,
}: {
  children: ReactNode;
  disabled?: boolean;
  onClickEvent: () => void;
}) {
  return (
    <button className="button-common" onClick={onClickEvent} disabled={disabled}>
      {children}
    </button>
  );
}
