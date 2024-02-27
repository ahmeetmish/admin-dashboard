import Navbar from "../components/navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"

export default function Layout({ children }) {
  return (
    <div className="flex m-4">
      <div className="flex-1 min-h-screen p-4 mr-4 rounded bg-zinc-800">
        <Sidebar />
      </div>
      <div className="flex-5">
        <Navbar />
        {children}
      </div>
    </div>
  )
}