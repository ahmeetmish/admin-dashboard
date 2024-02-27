import Input from '@/app/components/Input'

import { Package } from 'lucide-react'

export default function UserDetails() {
  return (
    <div className="gap-4 flex justify-between">
      <div className="gap-4 flex flex-col items-center justify-center h-max flex-1 p-4 rounded bg-zinc-800">
        <Package size={256} />
        <span className='text-xl'>Product Name</span>
      </div>
      <div className="flex-3 p-4 rounded bg-zinc-800">
        <form action="" className="gap-4 flex flex-col">
          <label className='mb-[-12px]'>Title</label>
          <Input name='title' type='text' placeholder='Title' required />
          <label className='mb-[-12px]'>Category</label>
          <Input name='category' type='text' placeholder='Category' required />
          <label className='mb-[-12px]'>Price</label>
          <Input name='price' type='number' placeholder='$ Price' required />
          <label className='mb-[-12px]'>Stock</label>
          <Input name='stock' type='number' placeholder='Stock' required />
          <label className='mb-[-12px]'>Description</label>
          <textarea name="description" id="description" placeholder="Description" rows='5' maxLength='400' className="p-3 text-sm bg-zinc-700" />
          <button type="submit" className="max-w-[20rem] p-3 ml-auto font-medium rounded bg-zinc-700 hover:bg-violet-500 transition-all">Update Product</button>
        </form>
      </div>
    </div>
  )
}