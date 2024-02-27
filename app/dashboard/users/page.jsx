import Link from "next/link"
import { Plus, CircleUserRound, Eye, Trash } from 'lucide-react'

import Search from "@/app/components/Search"
import Pagination from "@/app/components/pagination/Pagination"

export default function UsersPage() {
  return (
    <div className="gap-4 flex flex-col p-4 rounded bg-zinc-800">
      <div className="gap-2 flex items-center justify-between">
        <Search placeholder='Search for a user..' />
        <Link href='/dashboard/users/add'>
          <button className="p-2 text-sm rounded bg-zinc-700 hover:bg-violet-500 transition-all"><Plus /></button>
        </Link>
      </div>
      <table>
        <thead>
          <tr className="font-medium text-gray-300">
            <td className="pb-4">Name</td>
            <td>Email</td>
            <td>Role</td>
            <td>Created At</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='gap-2 flex items-center py-4'><CircleUserRound size={32} /> ahmeetmish</td>
            <td>ahmeetmish@gmail.com</td>
            <td>Admin</td>
            <td>27.02.2024</td>
            <td>Active</td>
            <td className="gap-2 flex items-center">
              <Link href='/dashboard/users/anyId' className="flex items-center">
                <button className="hover:text-violet-500 transition-all"><Eye /></button>
              </Link>
              <button className="flex items-center hover:text-violet-500 transition-all"><Trash /></button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}