export async function getAllCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all')

  if (!response.ok) {
    throw new Error('failed to fetch data')
  }

  const data = await response.json()
  return data
}