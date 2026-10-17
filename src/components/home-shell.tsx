"use client";
import { Country } from "@/domain/models";
import { useMemo, useState } from "react";
import { CountryGrid, CountryPagination, CountryQueries } from "./country";

interface HomeShellProps {
  countries: Country[];
}

export function HomeShell({ countries }: HomeShellProps) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [page, setPage] = useState(1);

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = country.names.common
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesRegion = region ? country.region === region : true;
      return matchesSearch && matchesRegion;
    });
  }, [countries, search, region]);

  const totalPages = Math.ceil(filteredCountries.length / 51);

  const paginatedCountries = useMemo(() => {
    const startIndex = (page - 1) * 51;
    return filteredCountries.slice(startIndex, startIndex + 51);
  }, [filteredCountries, page]);

  return (
    <div>
      <CountryQueries
        setRegion={setRegion}
        setPage={setPage}
        setSearch={setSearch}
      />
      <CountryPagination
        totalPages={totalPages}
        page={page}
        setPage={setPage}
      />
      <CountryGrid countries={paginatedCountries} />
    </div>
  );
}
