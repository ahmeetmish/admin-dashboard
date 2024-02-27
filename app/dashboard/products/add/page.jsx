import Input from "@/app/components/Input"

import { addProduct } from "@/app/lib/actions"

export default function AddProductPage() {
  return (
    <div className="p-4 rounded bg-zinc-800">
      <form action={addProduct} className="gap-4 flex flex-col">
        <Input name='title' type='text' placeholder='Title' required />
        <Input name='category' type='text' placeholder='Category' required />
        <Input name='price' type='number' placeholder='$ Price' required />
        <Input name='stock' type='number' placeholder='Stock' required />
        <Input name='productImage' type='text' placeholder='Product Image URL' />
        <textarea name="description" id="description" placeholder="Description" rows='4' maxLength='400' className="p-3 text-sm bg-zinc-700" />
        <button type="submit" className="max-w-[20rem] p-3 ml-auto font-medium rounded bg-zinc-700 hover:bg-violet-500 transition-all">Add New Product</button>
      </form>
    </div>
  )
}