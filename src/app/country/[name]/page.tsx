import { Suspense } from "react";
import { CountryContainer } from "@/components/country";

interface PageProps {
  params: Promise<{ name: string }>;
}

export default async function CountryPage({ params }: PageProps) {
  return (
    <main className="bg-slate-800 min-h-dv flex flex-col items-center">
      <Suspense fallback={<p className="text-white">Loading...</p>}>
        <CountryContainer params={params} />
      </Suspense>
    </main>
  );
}
