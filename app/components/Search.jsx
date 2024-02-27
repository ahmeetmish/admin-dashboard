'use client'

import { useCallback } from 'react'
import { SearchIcon } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function Search({ placeholder }) {
  const pathname = usePathname()
  const { replace } = useRouter()
  const searchParams = useSearchParams()

  const handleSearch = useCallback((event) => {
    const params = new URLSearchParams(searchParams)

    params.set('page', 1)
    
    if(event.target.value) {
      event.target.value.length > 1 && params.set('q', event.target.value)
    } else {
      params.delete('q')
    }
    replace(`${pathname}?${params}`)
  }, 300)

  return (
    <div className="gap-2 flex items-center p-2 text-sm rounded bg-zinc-700">
      <SearchIcon size={22} className="cursor-pointer" />
      <input onChange={handleSearch} className="bg-transparent border-none outline-none" type="text" placeholder={placeholder} />
    </div>
  )
}