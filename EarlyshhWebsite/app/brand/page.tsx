import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Megaphone, 
  TrendingUp, 
  Users, 
  MapPin,
  Clock,
  Plus,
  Eye,
  MessageSquare
} from "lucide-react"
import Link from "next/link"

export default function BrandDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg p-6 text-white shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Brand Overview</h1>
            <p className="mt-2 text-violet-100">Manage your campaigns and track performance</p>
          </div>
          <Button asChild className="bg-white text-violet-600 hover:bg-violet-50 shadow-sm">
            <Link href="/brand/campaigns/new">
              <Plus className="w-4 h-4 mr-2" />
              Create Campaign
            </Link>
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="!bg-white !text-gray-900 border-gray-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800">Active Campaigns</CardTitle>
            <Megaphone className="h-4 w-4 text-violet-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">3</div>
            <p className="text-xs text-gray-600">2 pending approval</p>
          </CardContent>
        </Card>

        <Card className="!bg-white !text-gray-900 border-gray-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800">Total Reach</CardTitle>
            <Users className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">2,847</div>
            <p className="text-xs text-gray-600">+23% from last campaign</p>
          </CardContent>
        </Card>

        <Card className="!bg-white !text-gray-900 border-gray-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800">Engagement Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">87%</div>
            <p className="text-xs text-gray-600">Above industry avg</p>
          </CardContent>
        </Card>

        <Card className="!bg-white !text-gray-900 border-gray-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800">Feedback Score</CardTitle>
            <MessageSquare className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">4.8</div>
            <p className="text-xs text-gray-600">Out of 5.0</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Campaigns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Megaphone className="w-5 h-5 mr-2 text-purple-600" />
              Your Campaigns
            </CardTitle>
            <CardDescription>Track the performance of your active campaigns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Superoot Energy Drink Launch</h3>
                  <Badge variant="outline" className="text-green-600">Active</Badge>
                </div>
                <div className="flex items-center text-sm text-slate-600 space-x-4">
                  <span className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    Brooklyn, NY
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    5 days left
                  </span>
                  <span className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    847 views
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Artisan Coffee Tasting</h3>
                  <Badge variant="outline" className="text-blue-600">Pending</Badge>
                </div>
                <div className="flex items-center text-sm text-slate-600 space-x-4">
                  <span className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    Manhattan, NY
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    Awaiting approval
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Eco-Friendly Packaging Test</h3>
                  <Badge variant="outline" className="text-gray-600">Completed</Badge>
                </div>
                <div className="flex items-center text-sm text-slate-600 space-x-4">
                  <span className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    Queens, NY
                  </span>
                  <span className="flex items-center">
                    <MessageSquare className="w-3 h-3 mr-1" />
                    124 responses
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
              Performance Insights
            </CardTitle>
            <CardDescription>Key metrics from your recent campaigns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Product Interest</span>
                  <span className="text-sm text-slate-600">92%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Brand Awareness</span>
                  <span className="text-sm text-slate-600">78%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Purchase Intent</span>
                  <span className="text-sm text-slate-600">65%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h4 className="font-medium mb-2">Recent Feedback</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <p>"Great taste, would definitely buy again!"</p>
                <p>"Love the sustainable packaging approach"</p>
                <p>"Perfect for my morning routine"</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}