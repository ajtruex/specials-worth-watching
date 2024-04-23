import Link from "next/link"
import Image from "next/image"
import logo from "@/public/mic.png"
import { Input } from "@/components/ui/input"

import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }) {
  return (
    <nav
      className={cn(
        "flex justify-between border-b-4 border-b-black",
        className
      )}
      {...props}
    >
      <div
        className="flex flex-row

      space-x-4 items-center
      "
      >
        <Image
          alt="Mic Logo"
          height={100}
          src={logo}
          width={100}
          // className="w-auto h-auto"
        />
        <div className="flex space-x-4 items-center">
          <Link
            href="/"
            className="text-lg font-semibold transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/specials"
            className="text-lg font-semibold p-1 text-muted-foreground transition-colors hover:text-black focus:bg-gray-500 focus:text-white focus:rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Specials
          </Link>
          <Link
            href="/comedians"
            className="text-lg font-semibold text-muted-foreground transition-colors hover:text-primary focus:bg-gray-500 focus:text-white focus:rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Comedians
          </Link>
        </div>
      </div>
      <div className="w-1/4 my-auto">
        <Input placeholder="Search" type="search" />
      </div>
    </nav>
  )
}
