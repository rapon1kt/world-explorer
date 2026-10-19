import { Globe } from "lucide-react";
import { HomeShell } from "@/components";
import { countryService } from "@/services";
import { Footer } from "@/components";

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
      <Footer />
    </div>
  );
}
