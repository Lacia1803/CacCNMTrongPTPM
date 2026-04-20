import Link from "next/link";
import { notFound } from "next/navigation";
import { Country } from "@/types/country";

interface CountryPageProps {
  params: Promise<{ code: string }>;
}

async function getCountry(code: string): Promise<Country> {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) notFound();
  const data = await res.json();
  // API trả về mảng, lấy phần tử đầu tiên
  return Array.isArray(data) ? data[0] : data;
}

async function getBorderCountries(codes: string[]): Promise<{ cca3: string; name: { common: string } }[]> {
  if (!codes || codes.length === 0) return [];
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${codes.join(",")}&fields=cca3,name`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

function formatPopulation(n: number): string {
  return n.toLocaleString("vi-VN");
}

function formatArea(n: number): string {
  return n.toLocaleString("vi-VN") + " km²";
}

export default async function CountryDetailPage({ params }: CountryPageProps) {
  const { code } = await params;
  const country = await getCountry(code.toUpperCase());
  const borderCountries = await getBorderCountries(country.borders ?? []);

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "Không có dữ liệu";

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c) => `${c.name} (${c.symbol})`)
        .join(", ")
    : "Không có dữ liệu";

  const nativeNames = country.name.nativeName
    ? Object.values(country.name.nativeName)
        .map((n) => n.common)
        .slice(0, 2)
        .join(", ")
    : country.name.common;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link
        href="/countries"
        className="inline-flex items-center gap-2 text-blue-600 hover:underline text-sm mb-8"
      >
        ← Quay lại danh sách
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Flag */}
        <div>
          <img
            src={country.flags.svg}
            alt={country.flags.alt ?? `Cờ ${country.name.common}`}
            className="w-full rounded-xl shadow-lg border"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{country.name.common}</h1>
          <p className="text-gray-500 italic mb-6">{country.name.official}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8 text-sm">
            <p>
              <span className="font-semibold">Tên bản địa:</span>{" "}
              <span className="text-gray-600">{nativeNames}</span>
            </p>
            <p>
              <span className="font-semibold">Dân số:</span>{" "}
              <span className="text-gray-600">
                {formatPopulation(country.population)} người
              </span>
            </p>
            <p>
              <span className="font-semibold">Diện tích:</span>{" "}
              <span className="text-gray-600">{formatArea(country.area)}</span>
            </p>
            <p>
              <span className="font-semibold">Khu vực:</span>{" "}
              <span className="text-gray-600">
                {country.region}
                {country.subregion ? ` · ${country.subregion}` : ""}
              </span>
            </p>
            <p>
              <span className="font-semibold">Thủ đô:</span>{" "}
              <span className="text-gray-600">
                {country.capital?.join(", ") ?? "Không có"}
              </span>
            </p>
            <p>
              <span className="font-semibold">Múi giờ:</span>{" "}
              <span className="text-gray-600">
                {country.timezones?.slice(0, 2).join(", ")}
                {(country.timezones?.length ?? 0) > 2 ? " ..." : ""}
              </span>
            </p>
            <p>
              <span className="font-semibold">Ngôn ngữ:</span>{" "}
              <span className="text-gray-600">{languages}</span>
            </p>
            <p>
              <span className="font-semibold">Tiền tệ:</span>{" "}
              <span className="text-gray-600">{currencies}</span>
            </p>
            <p>
              <span className="font-semibold">TLD:</span>{" "}
              <span className="text-gray-600">
                {country.tld?.join(", ") ?? "N/A"}
              </span>
            </p>
            <p>
              <span className="font-semibold">Mã quốc gia:</span>{" "}
              <span className="text-gray-600">
                {country.cca2} / {country.cca3}
              </span>
            </p>
          </div>

          {/* Border countries */}
          {borderCountries.length > 0 && (
            <div>
              <p className="font-semibold text-sm mb-3">Quốc gia tiếp giáp:</p>
              <div className="flex flex-wrap gap-2">
                {borderCountries.map((b) => (
                  <Link
                    key={b.cca3}
                    href={`/countries/${b.cca3}`}
                    className="px-3 py-1 border rounded-lg text-sm hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
                  >
                    {b.name.common}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Google Maps link */}
          <div className="mt-6">
            <a
              href={country.maps?.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              🗺️ Xem trên Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
