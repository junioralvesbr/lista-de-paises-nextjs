import Image from "next/image"
import Link from "next/link"
import { getAllCountries } from "@/lib/getAllCountries"
import { CountryCard } from "@/components/CountryCard"

async function getCountry(countryName: string) {
  const countries = await getAllCountries()

  const country = countries.find(country => country.name.common === countryName)

  const borders = country.borders

  const countriesBorder = borders?.map(border => {
    const country = countries.find(country => country.cca3 === border)
    return country
  })

  return { country, countriesBorder }
}

export default async function Page({ params }: { params: { name: string } }) {
  const { name } = params;
  const countryName = decodeURI(name)
  const { country, countriesBorder } = await getCountry(countryName)

  return (
    <>
      <section>
        <h1 className="text-5xl font-bold text-center py-12">
          {country.translations.por.common}
        </h1>

        <Link href="/">
          Voltar
        </Link>

        <article className="bg-white flex items-center justify-around py-10">
          <dl>
            <dt className="text-2xl py-3">
              <b>🏙️ Capital: </b>{country.capital}
            </dt>
            <dt className="text-2xl py-3">
              <b>🗺️ Continente: </b>{country.continents}
            </dt>
            <dt className="text-2xl py-3">
              <b>👨‍👩‍👧‍👦 População: </b>{country.population}
            </dt>
            <dt className="text-2xl py-3">
              <b>🗣️ Linguas faladas:</b>
            </dt>
            <ul className="grid grid-cols-4 gap-2">
              {Object.values(country.languages).map((language, index) => (
                <li className="bg-indigo-700 text-white rounded-full px-4 py-1" key={index}>
                  {language}
                </li>
              ))}
            </ul>
          </dl>

          <div className="relative w-full max-w-xl h-80 rounded-lg overflow-hidden">
            <Image
              src={country.flags.svg}
              alt={country.flags.alt}
              fill
              className="object-cover"
            />
          </div>
        </article>
      </section>

      {countriesBorder && (
        <section className="mt-20">
          <h2 className="text-4xl font-bold">
            Países que fazem fronteira
          </h2>

          <div className="grid grid-cols-5 gap-9 bg-white p-10">
            {countriesBorder?.map((country, index) => (
              <CountryCard country={country} key={index} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}