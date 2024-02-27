import { Bell, Youtube } from 'lucide-react'

export default function Notifications() {
  return (
    <div className="mb-4 p-4 rounded bg-zinc-700">
      <h2 className='gap-1 flex items-center text-sm text-gray-200'><Bell size={20} className='text-violet-300' /> This is a test notification!</h2>
      <hr className='my-2 opacity-65' />
      <div className='gap-2 flex flex-col'>
        <h2 className='font-medium text-xl'>How to use the admin dashboard?</h2>
        <p className='font-light text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam aliquid dolor, doloribus fugiat, adipisci odit officia amet, ratione sit enim accusamus repudiandae! Ad minima dicta in vero! Magnam, accusamus?</p>
        <button className='gap-2 flex items-center w-32 p-4 mt-2 rounded font-medium bg-zinc-800 hover:bg-violet-400 transition-all'>
          <Youtube /> Watch
        </button>
      </div>
    </div>
  )
}