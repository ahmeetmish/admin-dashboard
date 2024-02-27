'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function Pagination({ count }) {
  const pathname = usePathname()
  const { replace } = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') || 1

  const params = new URLSearchParams(searchParams)

  const ITEM_PER_PAGE = 7

  const hasPrevious = ITEM_PER_PAGE * (parseInt(page - 1)) > 0
  const hasNext = ITEM_PER_PAGE * (parseInt(page - 1)) + ITEM_PER_PAGE < count

  const handlePageChange = (type) => {
    type === 'previous' ? params.set('page', parseInt(page) - 1) : params.set('page', parseInt(page) + 1)
    replace(`${pathname}?${params}`)
  }

  return (
    <div className='flex items-center justify-between'>
      <button onClick={() => handlePageChange('previous')} className='gap-1 flex items-center disabled:text-gray-400 hover:text-violet-500 transition-all' disabled={!hasPrevious}>
        <ChevronLeft /> Previous
      </button>
      <button onClick={() => handlePageChange('next')} className='gap-1 flex items-center disabled:text-gray-400 hover:text-violet-500 transition-all' disabled={!hasNext}>
        Next <ChevronRight />
      </button>
    </div>
  )
}