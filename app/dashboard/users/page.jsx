import Link from "next/link"
import Image from "next/image"

import { Plus, CircleUserRound, Eye, Trash } from 'lucide-react'

import Search from "@/app/components/Search"
import Pagination from "@/app/components/pagination/Pagination"

import { fetchUsers } from "@/app/lib/data"
import { deleteUser } from "@/app/lib/actions"

export default async function UsersPage({ searchParams }) {
  const query = searchParams?.q || ''
  const page = searchParams?.page || 1

  const { count, users } = await fetchUsers(query, page)

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
            <td>Status</td>
            <td>Created At</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className='gap-3 flex items-center py-4'>{user.userImage ? <Image src={user.userImage} className="w-[40px] h-[40px] rounded-full object-cover" alt={user.username} width={40} height={40} /> : <CircleUserRound size={40} />} {user.username.toLowerCase()}</td>
              <td>{user.email}</td>
              <td>{user.isAdmin ? 'Admin' : 'User'}</td>
              <td>{user.isActive ? 'Active': 'Passive'}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td className="gap-2 flex items-center">
                <Link href={`/dashboard/users/${user.id}`} className="flex items-center">
                  <button className="hover:text-violet-500 transition-all"><Eye /></button>
                </Link>
                <form action={deleteUser}>
                  <input value={user.id} type="hidden" name="id" />
                  <button className="flex items-center hover:text-violet-500 transition-all"><Trash /></button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}