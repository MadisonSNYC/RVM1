import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-4">
          {/* 404 Visual */}
          <div className="relative">
            <h1 className="text-8xl font-black text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
              404
            </h1>
            <div className="absolute inset-0 text-8xl font-black text-purple-500/10">
              404
            </div>
          </div>
          
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">Page Not Found</h2>
            <p className="text-slate-300">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go to homepage
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
            <Link href="/about">
              <Search className="w-4 h-4 mr-2" />
              Learn about Earlyshh
            </Link>
          </Button>
          
          <Button asChild variant="ghost" className="w-full text-slate-400 hover:text-slate-300 hover:bg-slate-800">
            <Link href="/contact">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Contact us
            </Link>
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center space-x-2 opacity-30">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              style={{
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}