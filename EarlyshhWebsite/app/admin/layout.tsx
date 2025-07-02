"use client"

// Temporarily commented out problematic import
// import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar"
import { 
  BarChart3, 
  Users, 
  Settings, 
  Megaphone,
  Shield,
  Home
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const adminNavItems = [
  { title: "Overview", href: "/admin", icon: Home },
  { title: "Campaigns", href: "/admin/campaigns", icon: Megaphone },
  { title: "Users", href: "/admin/users", icon: Users },
  { title: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { title: "Settings", href: "/admin/settings", icon: Settings },
]

export default function AdminLayout({
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
            <Shield className="w-6 h-6 text-white" />
            <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
          </div>
        </div>
        
        <nav className="p-4 space-y-2">
          {adminNavItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.href}
                asChild
                variant="ghost"
                className="w-full justify-start text-gray-700 hover:text-violet-600 hover:bg-violet-50 transition-colors"
              >
                <Link href={item.href}>
                  <Icon className="w-4 h-4 mr-3" />
                  {item.title}
                </Link>
              </Button>
            )
          })}
        </nav>
        
        <div className="p-4 border-t border-gray-300 absolute bottom-0 left-0 right-0 w-64 space-y-2">
          <Button 
            variant="outline" 
            className="w-full border-violet-300 text-violet-700 hover:bg-violet-50"
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