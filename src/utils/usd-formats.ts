interface usdFormatsProps {
  price: number | undefined | null;
  digits?: number;
}

export const usdFormats = ({ price, digits = 2 }: usdFormatsProps) => {
  if (price == null || Number.isNaN(price)) return "—";

  const abs = Math.abs(price);

  const maximumFractionDigits =
    abs > 1000 ? 2 : abs >= 1 ? Math.max(digits, 2) : abs >= 0.01 ? 4 : 6;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits,
  }).format(price);
};
