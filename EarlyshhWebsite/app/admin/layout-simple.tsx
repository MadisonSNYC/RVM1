import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export default function AdminLayout({
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
            <Shield className="w-6 h-6 text-purple-600" />
            <h1 className="text-xl font-bold text-slate-900">Admin Dashboard</h1>
          </div>
          <Button asChild variant="outline">
            <Link href="/">← Back to Website</Link>
          </Button>
        </div>
      </header>
      
      {/* Simple Navigation */}
      <nav className="bg-white border-b border-slate-200 p-4">
        <div className="flex space-x-4">
          <Button asChild variant="ghost">
            <Link href="/admin">Overview</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/admin/campaigns">Campaigns</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/admin/users">Users</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/admin/settings">Settings</Link>
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