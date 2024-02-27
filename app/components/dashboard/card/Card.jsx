import { Users } from 'lucide-react'

export default function Card() {
  return (
    <div className="w-full mb-4 p-4 rounded bg-zinc-800">
      <div className='gap-2 flex items-center'>
        <Users />
        <span>Total Users</span>
      </div>
      <div className='gap-2 flex flex-col mt-4 px-8'>
        <span className='font-medium text-2xl text-white'>247</span>
        <span className='font-light text-sm text-white'><span className='text-violet-200'>37%</span> more than previous month!</span>
      </div>
    </div>
  )
}