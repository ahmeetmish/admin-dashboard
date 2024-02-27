'use client'

import { Bell, Globe } from 'lucide-react'
import { usePathname } from "next/navigation"

import Search from "@/app/components/Search"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className="flex items-center justify-between p-4 mb-4 rounded bg-zinc-800">
      <span className="font-medium text-lg capitalize">{pathname.split('/').pop()}</span>
      <nav className="gap-3 flex items-center">
        <Search placeholder='Search..' />
        <Bell size={22} className="text-zinc-300 hover:text-gray-50 transition-all cursor-pointer" />
        <Globe size={22} className="text-zinc-300 hover:text-gray-50 transition-all cursor-pointer" />
      </nav>
    </div>
  )
}