"use client"
import Image from "next/image"
import HomePage from "@/components/homepage"
import CommandMenu from "@/components/cmd"

export default function Home() {
  return (
    <div>
      <HomePage />
      <CommandMenu />
    </div>
  )
}
