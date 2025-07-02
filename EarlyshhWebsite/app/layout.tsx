import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top" // Import the new component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EARLYSHH - Neighborhood Partnerships",
  description: "Connect with brands for exclusive local partnerships.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-900 text-white flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop /> {/* Add the component here */}
      </body>
    </html>
  )
}
