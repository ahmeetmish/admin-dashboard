import Input from '@/app/components/Input'

import { CircleUserRound } from 'lucide-react'

export default function UserDetails() {
  return (
    <div className="gap-4 flex justify-between">
      <div className="gap-4 flex flex-col items-center justify-center h-max flex-1 p-4 rounded bg-zinc-800">
        <CircleUserRound size={256} />
        <span className='text-xl'>Username</span>
      </div>
      <div className="flex-3 p-4 rounded bg-zinc-800">
        <form action="" className="gap-4 flex flex-col">
          <label className='mb-[-12px]'>Username</label>
          <Input name='username' type='text' placeholder='Username' required />
          <label className='mb-[-12px]'>E-mail</label>
          <Input name='email' type='email' placeholder='E-mail' required />
          <label className='mb-[-12px]'>Phone</label>
          <Input name='phone' type='phone' placeholder='Phone' />
          <label className='mb-[-12px]'>Password</label>
          <Input name='password' type='password' placeholder='Password' required />
          <label className='mb-[-12px]'>is Admin?</label>
          <select name="isAdmin" id="isAdmin" required className="p-3 text-sm bg-zinc-700">
            <option value={false}>False</option>
            <option value={true}>True</option>
          </select>
          <label className='mb-[-12px]'>is Active?</label>
          <select name="isActive" id="isActive" required className="p-3 text-sm bg-zinc-700">
            <option value={false}>False</option>
            <option value={true}>True</option>
          </select>
          <label className='mb-[-12px]'>Address</label>
          <textarea name="address" id="address" placeholder="Address" rows='1' maxLength='100' className="p-3 text-sm bg-zinc-700" />
          <button type="submit" className="max-w-[20rem] p-3 ml-auto font-medium rounded bg-zinc-700 hover:bg-violet-500 transition-all">Update User</button>
        </form>
      </div>
    </div>
  )
}