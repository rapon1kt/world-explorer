export function formatPopulationText(population: number) {
  const numberFormat = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
  });
  return numberFormat.format(population);
}
