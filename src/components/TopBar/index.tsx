import Image from "next/image"

export function TopBar() {
  return (
    <div className="flex items-center gap-2 py-7">
      <Image
        src="/logo.svg"
        alt="Logo do site"
        width={50}
        height={50}
      />

      <h4 className="text-2xl font-bold">
        Países do mundo
      </h4>
    </div>
  )
}