import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination() {
  return (
    <div className='flex items-center justify-between'>
      <button className='gap-1 flex items-center disabled:text-gray-400 hover:text-violet-500 transition-all' disabled><ChevronLeft /> Previous</button>
      <button className='gap-1 flex items-center disabled:text-gray-400 hover:text-violet-500 transition-all'>Next <ChevronRight /></button>
    </div>
  )
}