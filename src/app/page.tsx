import { CountryCard } from "@/components/CountryCard"
import { getAllCountries } from "@/lib/getAllCountries"

export default async function Home() {
  const countries = await getAllCountries()

  return (
    <section className="grid grid-cols-5 gap-9 mt-24">
      {countries?.map((country, index) => (
        <CountryCard country={country} key={index} />
      ))}
    </section>
  )
}
