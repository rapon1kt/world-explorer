"use client";
import { Filter, Search } from "lucide-react";
import { SetStateAction, useState } from "react";

interface CountryQueriesProps {
  setSearch: React.Dispatch<SetStateAction<string>>;
  setRegion: React.Dispatch<SetStateAction<string>>;
  setPage: React.Dispatch<SetStateAction<number>>;
}

export function CountryQueries({
  setSearch,
  setRegion,
  setPage,
}: CountryQueriesProps) {
  const [isSearchFocused, setSearchFocus] = useState<boolean>(false);
  const [isRegionFocused, setRegionFocus] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col gap-4 sm:flex-row justify-between">
      <div
        className={`flex text-sm transition ${isSearchFocused && "ring-2 ring-indigo-400"} gap-2 items-center px-2 bg-slate-900 rounded-sm text-slate-400`}
      >
        <Search size={18} />
        <input
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          type="text"
          onBlur={() => setSearchFocus(false)}
          onFocusCapture={() => setSearchFocus(true)}
          placeholder="Search for a country..."
          className="py-2 rounded-sm outline-none placeholder-slate-400"
        />
      </div>

      <div
        className={`bg-slate-900 rounded-sm transition ${isRegionFocused && "ring-2 ring-indigo-400"} shadow text-slate-400 px-4 py-2 flex items-center gap-2`}
      >
        <Filter size={18} />
        <select
          onBlur={() => setRegionFocus(false)}
          onFocusCapture={() => setRegionFocus(true)}
          onChange={(e) => {
            setRegion(e.target.value);
            setPage(1);
          }}
          className="outline-none text-sm px-2 bg-slate-900 cursor-pointer"
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}
