import { CountryCard } from "@/components/CountryCard"

async function getAllCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all')

  if (!response.ok) {
    throw new Error('failed to fetch data')
  }

  const data = await response.json()
  return data
}

export default async function Home() {
  const countries = await getAllCountries()

  return (
    <section className="grid grid-cols-5 gap-9 mt-24">
      <CountryCard countries={countries} />
    </section>
  )
}
