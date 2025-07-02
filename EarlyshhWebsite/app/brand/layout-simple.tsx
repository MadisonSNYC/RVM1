import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Plus } from "lucide-react"

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Simple Header */}
      <header className="bg-white border-b border-slate-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-pink-600" />
            <h1 className="text-xl font-bold text-slate-900">Brand Dashboard</h1>
          </div>
          <Button asChild variant="outline">
            <Link href="/">← Back to Website</Link>
          </Button>
        </div>
      </header>
      
      {/* Simple Navigation */}
      <nav className="bg-white border-b border-slate-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <Button asChild variant="ghost">
              <Link href="/brand">Overview</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/brand/campaigns">Campaigns</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/brand/analytics">Analytics</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/brand/profile">Profile</Link>
            </Button>
          </div>
          <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            <Link href="/brand/campaigns/new">
              <Plus className="w-4 h-4 mr-2" />
              New Campaign
            </Link>
          </Button>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="p-6">
        {children}
      </main>
    </div>
  )
}