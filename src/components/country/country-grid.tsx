import { Country } from "@/domain/models/country";
import { CountryCard } from "./country-card";

interface CountriesGridProps {
  countries: Country[];
}

export function CountryGrid({ countries }: CountriesGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">
      {countries.map((item: Country) => (
        <CountryCard key={item.uuid} country={item} />
      ))}
    </div>
  );
}
