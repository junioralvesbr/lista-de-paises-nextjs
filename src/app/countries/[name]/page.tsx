import Image from "next/image"
import Link from "next/link"

async function getAllCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all')

  if (!response.ok) {
    throw new Error('failed to fetch data')
  }

  const data = await response.json()
  return data
}

async function getCountry(name: string) {
  const countries = await getAllCountries()

  const data = countries.find(country => country.name.common === name)
  return data
}

export default async function Page({ params }: { params: { name: string } }) {
  const { name } = params;
  const country = await getCountry(name)

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
            <ul className="flex gap-2">
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
    </>
  )
}