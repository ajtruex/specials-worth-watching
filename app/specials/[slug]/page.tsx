import React from "react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
// import { specials } from "@/components/specials"
import Image from "next/image"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const specials = [
  {
    title: "Hat Trick",
    comedian: "Fahim Anwar",
    image: "/hattrick.jpg",
    url: "https://www.youtube.com/watch?v=HaTA-HVCo4w",
    slug: "hat-trick",
  },
  {
    title: "Rothaniel",
    comedian: "Jerrod Carmichael",
    image: "/rothaniel.jpg",
    url: "https://play.max.com/movie/6ad205c6-3c53-4c2b-8c9d-8d939cd30b60",
    slug: "rothaniel",
  },
  {
    title: "Speshy Weshy",
    comedian: "Chris Distefano",
    image: "/speshyweshy.jpg",
    url: "https://www.netflix.com/us/title/81605955",
    slug: "speshy-weshy",
  },
  {
    title: "Whiskey Fists",
    comedian: "Rosebud Baker",
    image: "/whiskeyfists.jpg",
    url: "https://youtube.com/watch?v=IMCm1V6Z1s4",
    slug: "whiskey-fists",
  },
  {
    title: "Enough For Everybody",
    comedian: "Joe List",
    image: "/enoughforeverybody.jpg",
    url: "https://www.youtube.com/watch?v=fkE8_bHaXiU",
    slug: "enough-for-everybody",
  },
  {
    title: "Shane Gillis Live in Austin",
    comedian: "Shane Gillis",
    image: "/liveinaustin.jpg",
    url: "https://youtube.com/watch?v=zKUpf1Vx0vs",
    slug: "shane-gillis-live-in-austin",
  },
]

const SpecialPage = ({ params }: { params: { slug: string } }) => {
  // const specials = await prisma.specials.findMany()
  const special = specials.find((special) => special.slug === params.slug)
  if (!special) {
    return <h1>Special not found</h1>
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* <nav className="flex justify-between p-4">
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
      </nav> */}
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
