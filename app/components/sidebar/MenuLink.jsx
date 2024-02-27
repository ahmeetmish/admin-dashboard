'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MenuLink({ item }) {
  const pathname = usePathname()

  return (
    <Link href={item.path} className={`gap-2 flex items-center p-4 rounded hover:text-gray-50 hover:bg-zinc-700 transition-all ${pathname === item.path && 'bg-zinc-700 text-gray-50'}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}