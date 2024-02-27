import Input from "@/app/components/Input"

import { addUser } from "@/app/lib/actions"

export default function AddUserPage() {
  return (
    <div className="p-4 rounded bg-zinc-800">
      <form action={addUser} className="gap-4 flex flex-col">
        <Input name='username' type='text' placeholder='Username' required />
        <Input name='email' type='email' placeholder='Email' required />
        <Input name='userImage' type='text' placeholder='Image URL' />
        <Input name='password' type='password' placeholder='Password' required />
        <select name="isAdmin" id="isAdmin" required className="p-3 text-sm bg-zinc-700">
          <option value={false} selected disabled>is Admin?</option>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
        <select name="isActive" id="isActive" required className="p-3 text-sm bg-zinc-700">
          <option value={true} selected disabled>is Active?</option>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
        <textarea name="address" id="address" placeholder="Address" rows='1' maxLength='100' className="p-3 text-sm bg-zinc-700" />
        <button type="submit" className="max-w-[20rem] p-3 ml-auto font-medium rounded bg-zinc-700 hover:bg-violet-500 transition-all">Add New User</button>
      </form>
    </div>
  )
}