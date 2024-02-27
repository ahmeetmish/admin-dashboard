import { SearchIcon } from 'lucide-react'

export default function Search({ placeholder }) {
  return (
    <div className="gap-2 flex items-center p-2 text-sm rounded bg-zinc-700">
      <SearchIcon size={22} className="cursor-pointer" />
      <input className="bg-transparent border-none outline-none" type="text" placeholder={placeholder} />
    </div>
  )
}