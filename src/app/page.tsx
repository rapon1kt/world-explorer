import Link from "next/link";
import { Globe } from "lucide-react";
import { countryService } from "@/services";
import { HomeShell } from "@/components";

export default async function Home() {
  const countries = await countryService.getCountries();

  return (
    <div className="w-7xl pt-8 px-4 2xl:px-0">
      <div className="mb-8">
        <h1 className="text-4xl text-slate-200 flex items-center gap-2">
          <Globe className="text-indigo-400" size={34} />
          World Explorer
        </h1>
        <p className="text-slate-400">
          Search for any country in the world and get some information about it!
        </p>
      </div>

      <HomeShell countries={countries} />

      <footer className="w-full text-center py-8 text-slate-400">
        Made by{" "}
        <Link
          href="https://github.com/rapon1kt"
          className="underline text-indigo-400"
        >
          raponikt
        </Link>
      </footer>
    </div>
  );
}
