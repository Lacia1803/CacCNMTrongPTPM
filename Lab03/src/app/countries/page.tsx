import Link from "next/link";
import Image from "next/image";
import { CountrySummary } from "@/types/country";

async function getCountries(): Promise<CountrySummary[]> {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=cca2,cca3,name,capital,region,population,flags,languages",
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Không thể tải danh sách quốc gia");
  const data: CountrySummary[] = await res.json();
  return data.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );
}

function formatPopulation(n: number): string {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1) + " tỷ";
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + " triệu";
  if (n >= 1_000) return (n / 1_000).toFixed(0) + " nghìn";
  return n.toString();
}

const regionColors: Record<string, string> = {
  Africa: "bg-yellow-100 text-yellow-800",
  Americas: "bg-green-100 text-green-800",
  Asia: "bg-red-100 text-red-800",
  Europe: "bg-blue-100 text-blue-800",
  Oceania: "bg-purple-100 text-purple-800",
  Antarctic: "bg-gray-100 text-gray-800",
};

export default async function CountriesPage() {
  const countries = await getCountries();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Khám phá Thế giới</h1>
      <p className="text-gray-500 mb-2">
        Dữ liệu{" "}
        <strong className="text-gray-700">{countries.length}</strong> quốc gia
        từ{" "}
        <a
          href="https://restcountries.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          REST Countries API
        </a>
      </p>
      <p className="text-sm text-gray-400 mb-8">
        Bài tập nộp điểm — Lab 03 · Server-side fetch · TypeScript interfaces ·
        Responsive grid
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {countries.map((country) => (
          <Link key={country.cca3} href={`/countries/${country.cca3}`}>
            <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-white h-full flex flex-col">
              {/* Flag */}
              <div className="relative w-full h-40 bg-gray-100">
                <img
                  src={country.flags.png}
                  alt={country.flags.alt ?? `Cờ ${country.name.common}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Info */}
              <div className="p-4 flex flex-col flex-1">
                <h2 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                  {country.name.common}
                </h2>
                <p className="text-xs text-gray-500 mb-2 line-clamp-1">
                  {country.name.official}
                </p>
                <div className="mt-auto space-y-1">
                  <p className="text-xs text-gray-600">
                    🏙️{" "}
                    {country.capital?.[0] ?? (
                      <span className="italic text-gray-400">
                        Không có thủ đô
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-gray-600">
                    👥 {formatPopulation(country.population)}
                  </p>
                  <div className="pt-1">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${regionColors[country.region] ?? "bg-gray-100 text-gray-700"}`}
                    >
                      {country.region}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
