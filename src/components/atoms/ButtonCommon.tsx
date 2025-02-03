import { ReactNode } from "react";

export default function ButtonCommon({
  children,
  disabled = false,
  className = '',
  onClickEvent,
}: {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  onClickEvent: () => void;
}) {
  return (
    <button className={`button-common ${className}`} onClick={onClickEvent} disabled={disabled}>
      {children}
    </button>
  );
}
