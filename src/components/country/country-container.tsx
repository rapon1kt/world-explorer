import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Country } from "@/domain/models";
import { countryService } from "@/services";
import { formatPopulationText } from "@/utils";

interface CountryContainerProps {
  params: Promise<{ name: string }>;
}

export async function CountryContainer({ params }: CountryContainerProps) {
  const { name } = await params;

  const country: Country = await countryService.getCountry(name);

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c) => `${c.name}`)
        .join(", ")
    : "N/A";

  const languages = country.languages
    .map((language) => language.name)
    .join(", ");

  return (
    <main className="max-w-6xl min-h-screen flex flex-col bg-slate-900 border-x-2 border-x-slate-700">
      <div className="p-4">
        <Link
          href="/"
          className="flex items-center w-fit gap-2 text-sm font-medium text-slate-400"
        >
          <ArrowLeft size={18} />
          Back to Explorer
        </Link>
      </div>
      <div className="flex flex-col gap-6 items-center">
        {country.flag.url_png ? (
          <Image
            width={640}
            height={400}
            className="w-full h-60 object-cover"
            src={country.flag.url_png}
            alt={country.names.common}
          />
        ) : (
          <div className="bg-slate-950 border-t border-t-slate-700 flex items-center justify-center w-full h-60">
            <h1 className="text-8xl text-slate-400">?</h1>
          </div>
        )}
        <div className="px-8 pt-2">
          <div className="mb-4 max-w-2xl">
            <h1 className="text-4xl font-bold text-indigo-400">
              {country.names.common}
            </h1>
            <p className="text-slate-200">{country.names.official}</p>
            <p className="text-slate-400 text-justify">
              {country.descriptions.long}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-slate-300 text-sm mb-8">
            <p className="flex justify-between">
              <strong className="text-slate-200">Population</strong>{" "}
              {formatPopulationText(country.population)}
            </p>
            <p className="flex justify-between">
              <strong className="text-slate-200">Region</strong>{" "}
              {country.region}
            </p>
            <p className="flex justify-between">
              <strong className="text-slate-200">Subregion</strong>{" "}
              {country.subregion || "N/A"}
            </p>
            <p className="flex justify-between">
              <strong className="text-slate-200">Capital</strong>{" "}
              {country.capitals[0].name || "N/A"}
            </p>
            <p className="flex justify-between">
              <strong className="text-slate-200">Top-Level Domain</strong>{" "}
              {country.tlds.join(", ") || "N/A"}
            </p>
            <p className="flex justify-between">
              <strong className="text-slate-200">Currencies</strong>{" "}
              {currencies}
            </p>
            <p className="flex justify-between">
              <strong className="text-slate-200">Languages</strong> {languages}
            </p>
          </div>
          {country.borders && country.borders.length > 0 && (
            <div>
              <h3 className="text-base font-semibold mb-3 text-slate-200">
                Neighboring countries
              </h3>
              <div className="flex flex-wrap gap-2">
                {country.borders.map((border) => (
                  <span
                    key={border}
                    className="bg-slate-700 w-15 py-1.5 text-center rounded-md text-sm shadow-md text-slate-200"
                  >
                    {border}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
