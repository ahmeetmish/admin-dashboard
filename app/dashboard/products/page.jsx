import Link from "next/link"
import { Plus, Package, Eye, Trash } from 'lucide-react'

import Search from "@/app/components/Search"
import Pagination from "@/app/components/pagination/Pagination"

export default function ProductsPage() {
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
          <tr>
            <td className='gap-2 flex items-center py-4'><Package size={32} /> Iphone 13</td>
            <td>128 GB</td>
            <td>Phone</td>
            <td>$599</td>
            <td>17</td>
            <td className="gap-2 flex items-center">
              <Link href='/dashboard/products/anyId' className="flex items-center">
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