import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Megaphone, 
  TrendingUp, 
  DollarSign,
  Activity,
  MapPin
} from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg p-6 text-white shadow-sm">
        <h1 className="text-3xl font-bold">Admin Overview</h1>
        <p className="mt-2 text-violet-100">Manage campaigns, users, and platform analytics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="!bg-white !text-gray-900 border-gray-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800">Active Campaigns</CardTitle>
            <Megaphone className="h-4 w-4 text-violet-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">12</div>
            <p className="text-xs text-gray-600">+2 from last month</p>
          </CardContent>
        </Card>

        <Card className="!bg-white !text-gray-900 border-gray-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800">Total Users</CardTitle>
            <Users className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1,847</div>
            <p className="text-xs text-gray-600">+15% from last month</p>
          </CardContent>
        </Card>

        <Card className="!bg-white !text-gray-900 border-gray-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">$24,580</div>
            <p className="text-xs text-gray-600">+8% from last month</p>
          </CardContent>
        </Card>

        <Card className="!bg-white !text-gray-900 border-gray-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800">Engagement Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">84%</div>
            <p className="text-xs text-gray-600">+3% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="!bg-white !text-gray-900 border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-800">
              <Activity className="w-5 h-5 mr-2 text-violet-500" />
              Recent Campaign Activity
            </CardTitle>
            <CardDescription className="text-gray-600">Latest updates from active campaigns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Superoot Launch Campaign</p>
                <p className="text-sm text-gray-600">Brooklyn, NY</p>
              </div>
              <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50">Active</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">NYC Coffee Brand Test</p>
                <p className="text-sm text-gray-600">Manhattan, NY</p>
              </div>
              <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">Pending</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Eco-Friendly Snacks</p>
                <p className="text-sm text-gray-600">Queens, NY</p>
              </div>
              <Badge variant="outline" className="text-gray-600 border-gray-200 bg-gray-50">Completed</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="!bg-white !text-gray-900 border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-800">
              <MapPin className="w-5 h-5 mr-2 text-cyan-500" />
              Active Locations
            </CardTitle>
            <CardDescription className="text-gray-600">Geographic distribution of campaigns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Brooklyn, NY</p>
                <p className="text-sm text-gray-600">5 active campaigns</p>
              </div>
              <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200">85% engagement</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Manhattan, NY</p>
                <p className="text-sm text-gray-600">3 active campaigns</p>
              </div>
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">92% engagement</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Queens, NY</p>
                <p className="text-sm text-gray-600">2 active campaigns</p>
              </div>
              <Badge className="bg-pink-100 text-pink-700 border-pink-200">78% engagement</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}