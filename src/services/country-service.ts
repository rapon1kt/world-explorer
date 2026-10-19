import { Country } from "@/domain/models/country";

const env = {
  api_key: process.env.API_KEY || "",
  api_url: process.env.API_URL || "",
};

export const countryService = {
  async getCountries(): Promise<Country[]> {
    const countries: Country[] = [];
    for (let i = 0; i < 5; i++) {
      const response = await fetch(
        `${env.api_url}?limit=100&offset=${100 * i}`,
        {
          headers: {
            Authorization: `Bearer ${env.api_key}`,
          },
          next: { revalidate: 86400 },
        },
      );
      countries.push(...(await response.json()).data.objects);
    }

    return countries;
  },
  async getCountry(name: string): Promise<Country> {
    const response = await fetch(`${env.api_url}/names.common/${name}`, {
      headers: {
        Authorization: `Bearer ${env.api_key}`,
      },
    });
    return (await response.json()).data.objects[0];
  },
};
