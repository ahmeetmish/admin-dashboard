import Link from "next/link"
import Image from "next/image"

import { Plus, Package, Eye, Trash } from 'lucide-react'

import Search from "@/app/components/Search"
import Pagination from "@/app/components/pagination/Pagination"

import { fetchProducts } from "@/app/lib/data"
import { deleteProduct } from "@/app/lib/actions"

export default async function ProductsPage({ searchParams }) {
  const query = searchParams?.q || ''
  const page = searchParams?.page || 1

  const { count, products } = await fetchProducts(query, page)

  return (
    <div className="gap-4 flex flex-col p-4 rounded bg-zinc-800">
      <div className="gap-2 flex items-center justify-between">
        <Search placeholder='Search for a product..' />
        <Link href='/dashboard/products/add'>
          <button className="p-2 text-sm rounded bg-zinc-700 hover:bg-violet-500 transition-all"><Plus /></button>
        </Link>
      </div>
      <table>
        <thead>
          <tr className="font-medium text-gray-300">
            <td className="pb-4">Title</td>
            <td>Description</td>
            <td>Category</td>
            <td>Price</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className='gap-2 flex items-center py-4'>{product.productImage ? <Image src={product.productImage} className="w-[40px] h-[40px] rounded-full object-cover" alt={product.title} width={40} height={40} /> : <Package size={40} />} {product.title}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td className="gap-2 flex items-center">
                <Link href={`/dashboard/products/${product.id}`} className="flex items-center">
                  <button className="hover:text-violet-500 transition-all"><Eye /></button>
                </Link>
                <form action={deleteProduct}>
                  <input value={product.id} type="hidden" name="id" />
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