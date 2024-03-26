import Image from "next/image"
import HomePage from "@/components/homepage"
import CommandPage from "@/components/cmd"

export default function Home() {
  return (
    <div>
      <HomePage />
      <CommandPage />
    </div>
  )
}
