import Image from "next/image";

export function Card({ countries }) {
  return (
    <article>
      <Image
        src={countries[0].flags.svg}
        alt={countries[0].flags.alt}
        width={500}
        height={500}
      />
      <h3>{countries[0].translations.por.common}</h3>
    </article>
  )
}