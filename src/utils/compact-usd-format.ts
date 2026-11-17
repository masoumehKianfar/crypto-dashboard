interface compactUsdFormatProps {
  value: number | null | undefined;
}

export const compactUsdFormat = ({ value }: compactUsdFormatProps) => {
  if (!value || Number.isNaN(value)) return "_";
  return new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    notation: "compact",
  }).format(value);
};
