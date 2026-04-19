import { ReactNode } from "react";

export function Field({
  label,
  children,
  hint,
  className = "",
}: {
  label: string;
  children: ReactNode;
  hint?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[12px] uppercase tracking-[0.14em] text-ink-subtle mb-2">{label}</span>
      {children}
      {hint && <span className="block text-[12px] text-ink-subtle mt-1.5 italic">{hint}</span>}
    </label>
  );
}

export const inputClass =
  "w-full rounded-xl bg-white border border-hairline px-4 py-3 text-[15px] text-ink placeholder:text-ink-subtle focus:outline-none focus:border-sage transition";
