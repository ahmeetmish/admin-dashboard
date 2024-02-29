import Image from 'next/image'

import Input from '@/app/components/Input'

import { CircleUserRound } from 'lucide-react'

import { fetchUser } from '@/app/lib/data'
import { updateUser } from "@/app/lib/actions"

export default async function UserDetails({ params }) {
  const { id } = params
  const user = await fetchUser(id)

  return (
    <div className="gap-4 flex justify-between">
      <div className="gap-4 flex flex-col items-center justify-center h-max flex-1 p-4 rounded bg-zinc-800">
        {user.userImage ? <Image src={user.userImage} className="w-[256px] h-[256px] rounded-full object-cover" alt={user.username} width={256} height={256} /> : <CircleUserRound size={256} />}
        <span className='text-xl'>{user.username.toLowerCase()}</span>
      </div>
      <div className="flex-3 p-4 rounded bg-zinc-800">
        <form action={updateUser} className="gap-4 flex flex-col">
          <input value={user.id} name='id' type="hidden" />
          <label className='mb-[-12px]'>Username</label>
          <Input name='username' type='text' defaultValue={user.username} placeholder='Username' required />
          <label className='mb-[-12px]'>E-mail</label>
          <Input name='email' type='email' defaultValue={user.email} placeholder='E-mail' required />
          <label className='mb-[-12px]'>Password</label>
          <Input name='password' type='password' placeholder='Password' />
          <label className='mb-[-12px]'>User Image</label>
          <Input name='userImage' type='text' defaultValue={user.userImage} placeholder='Image URL' />
          <label className='mb-[-12px]'>is Admin?</label>
          <select name="isAdmin" id="isAdmin" required className="p-3 text-sm bg-zinc-700">
            <option value={true} selected={user.isAdmin}>True</option>
            <option value={false} selected={!user.isAdmin}>False</option>
          </select>
          <label className='mb-[-12px]'>is Active?</label>
          <select name="isActive" id="isActive" required className="p-3 text-sm bg-zinc-700">
            <option value={true} selected={user.isActive}>True</option>
            <option value={false} selected={!user.isActive}>False</option>
          </select>
          <label className='mb-[-12px]'>Address</label>
          <textarea name="address" id="address" defaultValue={user.address} placeholder='Address' rows='1' maxLength='100' className="p-3 text-sm bg-zinc-700" />
          <button type="submit" className="max-w-[20rem] p-3 ml-auto font-medium rounded bg-zinc-700 hover:bg-violet-500 transition-all">Update User</button>
        </form>
      </div>
    </div>
  )
}