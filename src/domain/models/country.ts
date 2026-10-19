export interface Country {
  uuid: string;
  names: {
    common: string;
    official: string;
  };
  codes: {
    alpha_2: string;
  };
  population: number;
  flag: {
    emoji: string;
    url_png: string;
    description: string;
  };
  capitals: Array<{
    name: string;
  }>;
  borders: Array<string>;
  tlds: Array<string>;
  region: string;
  subregion: string;
  languages: Array<{ name: string }>;
  descriptions: {
    long: string;
    short: string;
  };
  currencies: Array<{
    code: string;
    name: string;
    symbol: string;
  }>;
}
