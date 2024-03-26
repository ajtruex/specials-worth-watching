"use client"

import * as React from "react"
import {
  Home,
  CircleUser,
  AppWindowMac,
  Headphones,
  Code,
  User,
  Zap,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Command } from "cmdk"

const CommandMenu = () => {
  const [open, setOpen] = React.useState(false)

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // export default function CommandDialogDemo() {
  //   const [open, setOpen] = React.useState(false)

  //   React.useEffect(() => {
  //     const down = (e: KeyboardEvent) => {
  //       if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
  //         e.preventDefault()
  //         setOpen((open) => !open)
  //       }
  //     }

  //     document.addEventListener("keydown", down)
  //     return () => document.removeEventListener("keydown", down)
  //   }, [])

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      // label="Global Command Menu"
    >
      <CommandInput />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigation">
          <CommandItem>
            <Home className="mr-2" />
            <span>Home</span>
          </CommandItem>

          <CommandItem>
            <CircleUser className="mr-2" />
            <span>About</span>
          </CommandItem>
          <CommandItem>
            <Code className="mr-2" />
            <span>Projects</span>
          </CommandItem>

          <CommandItem>
            <AppWindowMac className="mr-2" />
            <span>Stack</span>
          </CommandItem>
          <CommandItem>
            <User className="mr-2" />
            <span>Contact</span>
          </CommandItem>
          <CommandSeparator />
          <CommandItem>
            <Headphones className="mr-2" />
            <span>Spotify</span>
          </CommandItem>
          <CommandItem>
            <Zap className="mr-2" />
            <span>Inspiration</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
    // <>
    //   <p>
    //     Press{" "}
    //     <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5  font-medium opacity-100 antialiased">
    //       <span className="text-xs">⌘</span>K
    //     </kbd>
    //   </p>
    //   <CommandDialog open={open} onOpenChange={setOpen}>
    //     <CommandInput placeholder="Type a command or search..." />
    //     <CommandList>
    //       <CommandEmpty>No results found.</CommandEmpty>
    //       <CommandGroup heading="Navigation">

    //       </CommandGroup>
    //     </CommandList>
    //   </CommandDialog>
    // </>
  )
}

export default CommandMenu
