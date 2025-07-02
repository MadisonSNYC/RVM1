"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button" // Assuming shadcn/ui Button
import { usePathname } from "next/navigation" // To highlight active link

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-black tracking-tighter bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              EARLYSHH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-purple-300 ${
                  pathname === link.href ? "text-purple-400" : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions: Book a Demo (Desktop and Mobile) & Hamburger Menu */}
          <div className="flex items-center space-x-3">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-lg text-sm"
            >
              <Link href="/book-demo">
                <Sparkles className="w-4 h-4 mr-2" />
                Book a Demo
              </Link>
            </Button>
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-900 border-t border-slate-700 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-slate-800 hover:text-purple-300 ${
                  pathname === link.href ? "bg-slate-800 text-purple-400" : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
