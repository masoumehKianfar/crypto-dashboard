interface isPositiveChange {
  value: number | null | undefined;
}
export const isPositiveChange = ({ value }: isPositiveChange) => {
  return (value ?? 0) >= 0;
};
