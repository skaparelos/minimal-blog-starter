"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import Logo from "@/app/_components/logo"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex">
      <Logo />
      <nav className="flex items-center gap-6">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/blog" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Blog
        </Link>
        {/* <Link
          href="https://github.com/skaparelos"
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          GitHub
        </Link> */}
      </nav>
    </div>
  )
}
