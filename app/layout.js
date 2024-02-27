import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Admin Dashboard with Nextjs",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-gray-50 bg-zinc-950 ${inter.className}`}>{children}</body>
    </html>
  )
}