interface perscentFormatProps {
  value: number | null | undefined;
}

export const perscentFormat = ({ value }: perscentFormatProps) => {
  if (value == null || Number.isNaN(value)) return "_";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
};
