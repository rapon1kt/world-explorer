import { Country } from "@/domain/models/country";
import Image from "next/image";
import Link from "next/link";

function formatPopulationText(population: number) {
  const numberFormat = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
  });
  return numberFormat.format(population);
}

export function CountryCard({ country }: { country: Country }) {
  return (
    <div className="flex justify-center">
      <Link
        href={`/${country.names.common.toLocaleLowerCase()}`}
        className="w-full h-80 bg-slate-700 shadow-sm shadow-slate-900"
      >
        {country.flag.url_png ? (
          <Image
            width={640}
            height={400}
            style={{ width: "100%", height: 200 }}
            className="object-cover"
            src={country.flag.url_png}
            alt={country.names.common}
          />
        ) : (
          <div className="bg-slate-900 w-full h-50">
            <h1 className="h-full text-slate-300 text-8xl flex justify-center items-center">
              ?
            </h1>
          </div>
        )}
        <div className="p-2 space-y-2">
          <div>
            <h1 className="text-lg text-white font-medium">
              {country.names.common}{" "}
              <span className="text-indigo-400 text-sm font-normal">
                {country.region}
              </span>
            </h1>
            <p className="text-xs text-slate-400">
              Habitants: {formatPopulationText(country.population)}
            </p>
          </div>
          <p className="text-sm text-slate-400">{country.descriptions.short}</p>
        </div>
      </Link>
    </div>
  );
}
