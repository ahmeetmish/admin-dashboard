import MenuLink from "./MenuLink"
import { LayoutDashboard, CircleUserRound, Users, ShoppingBag, Settings, HelpCircle, LogOut } from 'lucide-react'

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <LayoutDashboard />
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <Users />
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <ShoppingBag />
      }
    ]
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <Settings />
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <HelpCircle />
      }
    ]
  }
]

export default function Sidebar() {
  return (
    <div className="sticky top-[20px]">
      <div className="gap-2 flex items-center">
        <CircleUserRound size={44} strokeWidth={1} />
        <div className="flex flex-col leading-3">
          <span className="font-medium">ahmeetmish</span>
          <span className="text-sm text-gray-300">Administrator</span>
        </div>
      </div>
      {menuItems.map((item) => (
        <div className="gap-2 flex flex-col my-6 text-gray-300" key={item.title}>
          <span className="font-medium text-gray-400">{item.title}</span>
          <div className="gap-2 flex flex-col">
            {item.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </div>
        </div>
      ))}
      <button className="gap-2 flex items-center w-full p-4 mt-[-1rem] rounded text-gray-300 hover:text-gray-50 hover:bg-zinc-700 transition-all">
        <LogOut />
        Log out
      </button>
    </div>
  )
}