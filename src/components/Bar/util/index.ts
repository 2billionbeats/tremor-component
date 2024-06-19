export function formatNumberToPrecision(value: number, decimals: number) {
  if (value < 0) {
    return "极小";
  }
  return value.toFixed(decimals);
}
