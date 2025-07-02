"use client"

// Temporarily commented out problematic import
// import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar"
import { 
  BarChart3, 
  Plus, 
  User, 
  Megaphone,
  Sparkles,
  Home
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const brandNavItems = [
  { title: "Overview", href: "/brand", icon: Home },
  { title: "Campaigns", href: "/brand/campaigns", icon: Megaphone },
  { title: "Analytics", href: "/brand/analytics", icon: BarChart3 },
  { title: "Profile", href: "/brand/profile", icon: User },
]

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Brand-forward sidebar */}
      <aside className="w-64 bg-white border-r border-gray-300 shadow-sm">
        <div className="p-6 bg-gradient-to-r from-violet-500 to-pink-500">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-white" />
            <h1 className="text-xl font-bold text-white">Brand Dashboard</h1>
          </div>
        </div>
        
        <div className="p-4 space-y-4">
          <Button 
            asChild 
            className="w-full bg-violet-500 hover:bg-violet-600 text-white shadow-sm transition-colors"
          >
            <Link href="/brand/campaigns/new">
              <Plus className="w-4 h-4 mr-2" />
              New Campaign
            </Link>
          </Button>
          
          <nav className="space-y-2">
            {brandNavItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.href}
                  asChild
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
                >
                  <Link href={item.href}>
                    <Icon className="w-4 h-4 mr-3" />
                    {item.title}
                  </Link>
                </Button>
              )
            })}
          </nav>
        </div>
        
        <div className="p-4 border-t border-gray-300 absolute bottom-0 left-0 right-0 w-64 space-y-2">
          <Button 
            variant="outline" 
            className="w-full border-pink-300 text-pink-700 hover:bg-pink-50"
            onClick={() => {
              localStorage.removeItem("auth")
              document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
              window.location.href = "/"
            }}
          >
            Logout
          </Button>
          <Button variant="ghost" className="w-full text-sm text-gray-600 hover:text-cyan-600" asChild>
            <Link href="/">← Back to Website</Link>
          </Button>
        </div>
      </aside>
      
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}