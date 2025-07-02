"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, MapPin, Calendar, Users, Package } from "lucide-react"
import Link from "next/link"

export default function NewCampaignPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setShowSuccess(true)
    setIsSubmitting(false)
    
    // Redirect after success
    setTimeout(() => {
      router.push("/brand/campaigns")
    }, 2000)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Create New Campaign</h1>
          <p className="text-slate-600 mt-2">Launch a product testing campaign in your target market</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/brand/campaigns">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
        </Button>
      </div>

      {showSuccess && (
        <Alert className="border-green-200 bg-green-50">
          <AlertDescription className="text-green-800">
            Campaign created successfully! Redirecting to campaigns page...
          </AlertDescription>
        </Alert>
      )}

      {/* Campaign Form */}
      <Card>
        <CardHeader>
          <CardTitle>Campaign Details</CardTitle>
          <CardDescription>Fill in the information about your product testing campaign</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Campaign Title</Label>
                <Input
                  id="title"
                  name="title"
                  required
                  placeholder="e.g., Organic Energy Drink Launch"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="product">Product Name</Label>
                <Input
                  id="product"
                  name="product"
                  required
                  placeholder="e.g., SuperBoost Energy"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  placeholder="Describe your product and what makes it unique..."
                  rows={4}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Target Details */}
            <div className="space-y-4 border-t pt-6">
              <h3 className="font-medium flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                Target Location
              </h3>
              
              <div>
                <Label htmlFor="location">Neighborhood</Label>
                <Select name="location" required>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a neighborhood" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brooklyn">Brooklyn, NY</SelectItem>
                    <SelectItem value="manhattan">Manhattan, NY</SelectItem>
                    <SelectItem value="queens">Queens, NY</SelectItem>
                    <SelectItem value="bronx">Bronx, NY</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="audience">Target Audience</Label>
                <Select name="audience" required>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select target audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="health">Health-conscious consumers</SelectItem>
                    <SelectItem value="students">College students</SelectItem>
                    <SelectItem value="professionals">Young professionals</SelectItem>
                    <SelectItem value="families">Families with children</SelectItem>
                    <SelectItem value="seniors">Seniors (65+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Campaign Settings */}
            <div className="space-y-4 border-t pt-6">
              <h3 className="font-medium flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                Campaign Duration
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input
                    id="start-date"
                    name="startDate"
                    type="date"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="end-date">End Date</Label>
                  <Input
                    id="end-date"
                    name="endDate"
                    type="date"
                    required
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Sample Details */}
            <div className="space-y-4 border-t pt-6">
              <h3 className="font-medium flex items-center">
                <Package className="w-4 h-4 mr-2 text-green-600" />
                Sample Distribution
              </h3>
              
              <div>
                <Label htmlFor="sample-size">Number of Samples</Label>
                <Input
                  id="sample-size"
                  name="sampleSize"
                  type="number"
                  min="10"
                  max="500"
                  required
                  placeholder="e.g., 100"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="pickup-location">Pickup Location</Label>
                <Input
                  id="pickup-location"
                  name="pickupLocation"
                  required
                  placeholder="e.g., Brooklyn Coffee Shop, 123 Main St"
                  className="mt-1"
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-4 pt-6 border-t">
              <Button type="button" variant="outline" asChild>
                <Link href="/brand/campaigns">Cancel</Link>
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {isSubmitting ? "Creating..." : "Create Campaign"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}