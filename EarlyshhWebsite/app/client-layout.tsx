"use client"

import type React from "react"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  // Check if we're on a dashboard page
  const isDashboardPage = pathname?.startsWith('/admin') || pathname?.startsWith('/brand') || pathname?.startsWith('/login')
  
  useEffect(() => {
    // Add or remove dark class from html element
    const htmlElement = document.documentElement
    if (isDashboardPage) {
      htmlElement.classList.remove('dark')
      document.body.className = document.body.className.replace(/bg-slate-900|text-white/, '').trim() + ' bg-gray-100 text-gray-900'
    } else {
      htmlElement.classList.add('dark')
      document.body.className = document.body.className.replace(/bg-gray-100|text-gray-900/, '').trim() + ' bg-slate-900 text-white'
    }
  }, [isDashboardPage])

  if (isDashboardPage) {
    return <>{children}</>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}