"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Plus, 
  MapPin, 
  Clock, 
  Users, 
  Eye,
  MessageSquare,
  MoreVertical
} from "lucide-react"
import Link from "next/link"

export default function BrandCampaigns() {
  const [selectedCampaign, setSelectedCampaign] = useState<number | null>(null)

  // Button click handlers
  const handleViewAnalytics = (campaignId: number) => {
    alert(`Viewing analytics for campaign ${campaignId}`)
  }

  const handleViewResponses = (campaignId: number) => {
    alert(`Viewing responses for campaign ${campaignId}`)
  }

  const handleViewSubmission = (campaignId: number) => {
    alert(`Viewing submission for campaign ${campaignId}`)
  }

  const handleViewReport = (campaignId: number) => {
    alert(`Viewing report for campaign ${campaignId}`)
  }

  const handleDownloadData = (campaignId: number) => {
    alert(`Downloading data for campaign ${campaignId}`)
  }

  const handleContinueEditing = (campaignId: number) => {
    alert(`Continue editing campaign ${campaignId}`)
  }

  const handleDuplicate = (campaignId: number) => {
    alert(`Duplicating campaign ${campaignId}`)
  }

  const handleMoreOptions = (campaignId: number) => {
    setSelectedCampaign(selectedCampaign === campaignId ? null : campaignId)
  }

  const campaigns = [
    {
      id: 1,
      title: "Superoot Energy Drink Launch",
      location: "Brooklyn, NY",
      status: "active",
      daysLeft: 5,
      views: 847,
      responses: 23,
      description: "Introducing our new energy drink to health-conscious consumers in Brooklyn"
    },
    {
      id: 2,
      title: "Artisan Coffee Tasting",
      location: "Manhattan, NY",
      status: "pending",
      daysLeft: null,
      views: 0,
      responses: 0,
      description: "Premium coffee sampling for office workers in Midtown Manhattan"
    },
    {
      id: 3,
      title: "Eco-Friendly Packaging Test",
      location: "Queens, NY",
      status: "completed",
      daysLeft: null,
      views: 1250,
      responses: 124,
      description: "Testing consumer response to our new sustainable packaging"
    },
    {
      id: 4,
      title: "Vegan Snack Beta",
      location: "Brooklyn, NY",
      status: "draft",
      daysLeft: null,
      views: 0,
      responses: 0,
      description: "Plant-based snack testing for health-conscious millennials"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600'
      case 'pending': return 'text-blue-600'
      case 'completed': return 'text-gray-600'
      case 'draft': return 'text-orange-600'
      default: return 'text-gray-600'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active'
      case 'pending': return 'Pending Approval'
      case 'completed': return 'Completed'
      case 'draft': return 'Draft'
      default: return status
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Campaigns</h1>
          <p className="text-slate-600 mt-2">Manage and track your product testing campaigns</p>
        </div>
        <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          <Link href="/brand/campaigns/new">
            <Plus className="w-4 h-4 mr-2" />
            Create Campaign
          </Link>
        </Button>
      </div>

      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">1</div>
            <p className="text-sm text-slate-600">Active</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">1</div>
            <p className="text-sm text-slate-600">Pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-600">1</div>
            <p className="text-sm text-slate-600">Completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600">1</div>
            <p className="text-sm text-slate-600">Draft</p>
          </CardContent>
        </Card>
      </div>

      {/* Campaigns List */}
      <div className="space-y-4">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{campaign.title}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className={getStatusColor(campaign.status)}>
                        {getStatusText(campaign.status)}
                      </Badge>
                      <Button variant="ghost" size="sm" onClick={() => handleMoreOptions(campaign.id)}>
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardDescription>{campaign.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center text-slate-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{campaign.location}</span>
                </div>
                
                {campaign.daysLeft && (
                  <div className="flex items-center text-slate-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{campaign.daysLeft} days left</span>
                  </div>
                )}
                
                <div className="flex items-center text-slate-600">
                  <Eye className="w-4 h-4 mr-2" />
                  <span>{campaign.views} views</span>
                </div>
                
                <div className="flex items-center text-slate-600">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>{campaign.responses} responses</span>
                </div>
              </div>
              
              <div className="mt-4 flex space-x-2">
                {campaign.status === 'active' && (
                  <>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleViewAnalytics(campaign.id)}
                    >
                      View Analytics
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleViewResponses(campaign.id)}
                    >
                      View Responses
                    </Button>
                  </>
                )}
                {campaign.status === 'pending' && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleViewSubmission(campaign.id)}
                  >
                    View Submission
                  </Button>
                )}
                {campaign.status === 'completed' && (
                  <>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleViewReport(campaign.id)}
                    >
                      View Report
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleDownloadData(campaign.id)}
                    >
                      Download Data
                    </Button>
                  </>
                )}
                {campaign.status === 'draft' && (
                  <>
                    <Button 
                      variant="default" 
                      size="sm" 
                      onClick={() => handleContinueEditing(campaign.id)}
                    >
                      Continue Editing
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleDuplicate(campaign.id)}
                    >
                      Duplicate
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}