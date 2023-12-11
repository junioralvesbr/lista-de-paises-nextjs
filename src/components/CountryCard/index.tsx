import Image from "next/image";
import Link from "next/link";

type Country = {
  name: {
    common: string
  },
  flags: {
    svg: string,
    alt: string
  },
  translations: {
    por: {
      common: string
    }
  }
}


export function CountryCard({ countries }: { countries: Country[] }) {
  return (
    <>
      {countries.map((country, index: number) => (
        <Link href={`/countries/${country.name.common}`}>
          <article className="bg-white p-4 rounded-lg" key={index}>
            <div className="relative w-full h-32 overflow-hidden rounded-lg">
              <Image
                src={country.flags.svg}
                alt={country.flags.alt}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-center py-2">
              {country.translations.por.common}
            </h3>
          </article>
        </Link>
      ))}
    </>
  )
}