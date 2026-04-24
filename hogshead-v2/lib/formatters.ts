export function money(value: number, digits = 0) {
  return `$${value.toLocaleString(undefined, {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  })}`;
}

export function compactMoney(value: number) {
  if (Math.abs(value) >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(1)}B`;
  if (Math.abs(value) >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (Math.abs(value) >= 1_000) return `$${(value / 1_000).toFixed(1)}K`;
  return money(value);
}

export function stageForMonth(month: number) {
  if (month < 2) return 'Blanco';
  if (month < 12) return 'Reposado';
  if (month < 36) return 'Añejo';
  if (month < 60) return 'Extra Añejo';
  return 'Ultra Añejo';
}
