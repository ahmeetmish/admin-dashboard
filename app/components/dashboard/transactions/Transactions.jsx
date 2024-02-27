import { CircleUserRound } from 'lucide-react'

export default function Transactions() {
  return (
    <div className="p-4 rounded bg-zinc-800">
      <h2 className="text-xl text-gray-300 mb-4">Latest Transactions</h2>
      <table className='w-full'>
        <thead>
          <tr className='font-medium text-gray-300'>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>   
        </thead>
        <tbody>
          <tr>
            <td className='gap-2 flex items-center py-4'><CircleUserRound size={32} /> ahmeetmish</td>
            <td><span className='text-violet-200'>Done</span></td>
            <td>26.12.2023</td>
            <td>$3400</td>
          </tr>
          <tr>
            <td className='gap-2 flex items-center pb-4'><CircleUserRound size={32} /> Bobbie Bradley</td>
            <td><span className='text-gray-300'>Pending</span></td>
            <td>12.04.2025</td>
            <td>$3850</td>
          </tr>
          <tr>
            <td className='gap-2 flex items-center pb-4'><CircleUserRound size={32} /> Andrea Alvarez</td>
            <td><span className='text-gray-300'>Pending</span></td>
            <td>11.03.2024</td>
            <td>$3440</td>
          </tr>
          <tr>
            <td className='gap-2 flex items-center pb-4'><CircleUserRound size={32} /> Kelly Williamson</td>
            <td><span className='text-gray-300'>Pending</span></td>
            <td>06.11.2026</td>
            <td>$6700</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}