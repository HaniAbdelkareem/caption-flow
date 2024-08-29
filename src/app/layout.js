import { Inter } from "next/font/google"
import "./globals.css"
import SparklesIcon from "@/components/SparklesIcon"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black min-h-screen text-white"}>
        <main className="p-4 max-w-2xl mx-auto">
          <header className="flex justify-between my-8">
            <Link href="/" className="flex gap-1">
              <SparklesIcon />
              <span className="tracking-[-0.3px] font-semibold">
                Caption Flow
              </span>
            </Link>
            <nav className="flex gap-6 text-white/90">
              <Link href="/" className="text-sm">
                Home
              </Link>
              <Link href="/pricing" className="text-sm">
                Pricing
              </Link>
              <Link href="" className="text-sm">
                Contact
              </Link>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  )
}

// bg-gradient-to-b from-bg-gradient-from to-bg-gradient-to
