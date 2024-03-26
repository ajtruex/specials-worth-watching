import React from "react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { specials } from "@/components/specials"
import Image from "next/image"

const SpecialPage = ({ params }: { params: { slug: string } }) => {
  const special = specials.find((special) => special.slug === params.slug)
  if (!special) {
    return <h1>Special not found</h1>
  }

  return (
    <div className="max-w-7xl mx-auto">
      <nav className="flex justify-between p-4">
        <div className="flex space-x-4">
          <Link className="text-lg font-semibold" href="/">
            Home
          </Link>
          <Link className="text-lg font-semibold" href="/specials">
            Specials
          </Link>
          <Link className="text-lg font-semibold" href="#">
            Comedians
          </Link>
        </div>
        <div className="w-1/4">
          <Input placeholder="Search" type="search" />
        </div>
      </nav>
      <Link href={special.url}>
        <div className="flex justify-center mt-10 mb-6">
          <Image
            alt={special.title}
            className="rounded-lg overflow-hidden object-cover"
            height="720"
            src={special.image}
            width="1280"
            style={{
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
          />
        </div>
        <h1 className="text-5xl text-center font-extrabold  mb-3">
          {special.title}
        </h1>
        <p className="text-center text-3xl font-normal mb-10">
          {special.comedian}
        </p>
      </Link>
    </div>
  )
}
export default SpecialPage
