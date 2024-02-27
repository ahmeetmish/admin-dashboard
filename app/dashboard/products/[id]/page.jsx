import Image from 'next/image'

import Input from '@/app/components/Input'

import { Package } from 'lucide-react'

import { fetchProduct } from '@/app/lib/data'
import { updateProduct } from "@/app/lib/actions"

export default async function UserDetails({ params }) {
  const { id } = params
  const product = await fetchProduct(id)

  return (
    <div className="gap-4 flex justify-between">
      <div className="gap-4 flex flex-col items-center justify-center h-max flex-1 p-4 rounded bg-zinc-800">
        {product.productImage ? <Image src={product.productImage} className="w-[256px] h-[256px] rounded-full object-cover" alt={product.title} width={256} height={256} /> : <Package size={256} />}
        <span className='text-xl'>{product.title}</span>
      </div>
      <div className="flex-3 p-4 rounded bg-zinc-800">
        <form action={updateProduct} className="gap-4 flex flex-col">
          <input value={product.id} name='id' type="hidden" />
          <label className='mb-[-12px]'>Title</label>
          <Input name='title' type='text' defaultValue={product.title} placeholder='Title' required />
          <label className='mb-[-12px]'>Category</label>
          <Input name='category' type='text' defaultValue={product.category} placeholder='Category' required />
          <label className='mb-[-12px]'>Price</label>
          <Input name='price' type='number' defaultValue={product.price} placeholder='Price' required />
          <label className='mb-[-12px]'>Stock</label>
          <Input name='stock' type='number' defaultValue={product.stock} placeholder='Stock' required />
          <label className='mb-[-12px]'>Description</label>
          <textarea name="description" id="description" defaultValue={product.description} placeholder='Description' rows='5' maxLength='400' className="p-3 text-sm bg-zinc-700" />
          <button type="submit" className="max-w-[20rem] p-3 ml-auto font-medium rounded bg-zinc-700 hover:bg-violet-500 transition-all">Update Product</button>
        </form>
      </div>
    </div>
  )
}