"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, Sparkles, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleAdminLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const formData = new FormData(e.currentTarget)
      const email = formData.get("email") as string
      const password = formData.get("password") as string

      // Simple demo authentication - replace with real auth
      if (email === "admin@earlyshh.com" && password === "admin123") {
        // Set both localStorage and cookie for middleware
        localStorage.setItem("auth", JSON.stringify({ role: "admin", email }))
        document.cookie = `auth=${JSON.stringify({ role: "admin", email })}; path=/; max-age=86400`
        router.push("/admin")
      } else {
        setError("Invalid credentials")
      }
    } catch (error) {
      console.error("Login error:", error)
      setError("An error occurred during login")
    } finally {
      setIsLoading(false)
    }
  }

  const handleBrandLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const formData = new FormData(e.currentTarget)
      const email = formData.get("email") as string
      const password = formData.get("password") as string

      // Simple demo authentication - replace with real auth
      if (email === "brand@earlyshh.com" && password === "brand123") {
        // Set both localStorage and cookie for middleware
        localStorage.setItem("auth", JSON.stringify({ role: "brand", email }))
        document.cookie = `auth=${JSON.stringify({ role: "brand", email })}; path=/; max-age=86400`
        router.push("/brand")
      } else {
        setError("Invalid credentials")
      }
    } catch (error) {
      console.error("Login error:", error)
      setError("An error occurred during login")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Back to Website */}
        <div className="text-center">
          <Button asChild variant="ghost" className="text-white hover:text-purple-300">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Website
            </Link>
          </Button>
        </div>

        {/* Login Card */}
        <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-white">Sign In</CardTitle>
            <CardDescription className="text-slate-300">
              Access your Earlyshh dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="brand" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2 bg-slate-700">
                <TabsTrigger value="brand" className="text-white data-[state=active]:bg-pink-600">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Brand
                </TabsTrigger>
                <TabsTrigger value="admin" className="text-white data-[state=active]:bg-purple-600">
                  <Shield className="w-4 h-4 mr-2" />
                  Admin
                </TabsTrigger>
              </TabsList>

              {error && (
                <Alert className="border-red-700 bg-red-900/50">
                  <AlertDescription className="text-red-200">{error}</AlertDescription>
                </Alert>
              )}

              <TabsContent value="brand" className="space-y-4">
                <form onSubmit={handleBrandLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="brand-email" className="text-slate-200">Email</Label>
                    <Input
                      id="brand-email"
                      name="email"
                      type="email"
                      placeholder="brand@earlyshh.com"
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand-password" className="text-slate-200">Password</Label>
                    <Input
                      id="brand-password"
                      name="password"
                      type="password"
                      placeholder="brand123"
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign in to Brand Dashboard"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="admin" className="space-y-4">
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email" className="text-slate-200">Email</Label>
                    <Input
                      id="admin-email"
                      name="email"
                      type="email"
                      placeholder="admin@earlyshh.com"
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password" className="text-slate-200">Password</Label>
                    <Input
                      id="admin-password"
                      name="password"
                      type="password"
                      placeholder="admin123"
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign in to Admin Dashboard"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center text-sm text-slate-400">
              <p>Demo Credentials:</p>
              <p>Brand: brand@earlyshh.com / brand123</p>
              <p>Admin: admin@earlyshh.com / admin123</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}