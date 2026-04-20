export interface Country {
  cca2: string;
  cca3: string;
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  capital?: string[];
  region: string;
  subregion?: string;
  population: number;
  area: number;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
  borders?: string[];
  timezones: string[];
  continents: string[];
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  tld?: string[];
}

export interface CountrySummary {
  cca2: string;
  cca3: string;
  name: { common: string; official: string };
  capital?: string[];
  region: string;
  population: number;
  flags: { png: string; svg: string; alt?: string };
  languages?: Record<string, string>;
}
