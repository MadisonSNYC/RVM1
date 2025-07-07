"use client"

import type React from "react"
import { useCallback } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Newspaper, UserPlus, HelpCircle } from "lucide-react"

export default function ContactForms() {
  // Memoize handleSubmit to prevent form re-renders
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real app, you'd handle form submission here.
    // For now, we just show an alert.
    alert("Thanks! We'll be in touch soon.")
  }, [])

  return (
    <Tabs defaultValue="strategy-call" className="w-full max-w-4xl mx-auto">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
        <TabsTrigger value="strategy-call" className="py-3 flex flex-col sm:flex-row gap-2 items-center">
          <Calendar className="w-4 h-4" />
          Strategy Call
        </TabsTrigger>
        <TabsTrigger value="press-inquiry" className="py-3 flex flex-col sm:flex-row gap-2 items-center">
          <Newspaper className="w-4 h-4" />
          Press Inquiry
        </TabsTrigger>
        <TabsTrigger value="general-support" className="py-3 flex flex-col sm:flex-row gap-2 items-center">
          <HelpCircle className="w-4 h-4" />
          General/Support
        </TabsTrigger>
        <TabsTrigger value="user-waitlist" className="py-3 flex flex-col sm:flex-row gap-2 items-center">
          <UserPlus className="w-4 h-4" />
          User Waitlist
        </TabsTrigger>
      </TabsList>

      {/* Form #1: Schedule a Strategy Call */}
      <TabsContent value="strategy-call">
        <Card>
          <CardHeader>
            <CardTitle>Schedule Your Strategy Call</CardTitle>
            <CardDescription>Let&apos;s discuss how Earlyshh can help your brand grow.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="call-name">Name</Label>
                  <Input id="call-name" placeholder="First & Last Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="call-company">Company Name</Label>
                  <Input id="call-company" placeholder="Your Company Inc." required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="call-email">Company Email</Label>
                  <Input id="call-email" type="email" placeholder="you@company.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="call-phone">Phone Number</Label>
                  <Input id="call-phone" type="tel" placeholder="(123) 456-7890" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="call-website">Website (optional)</Label>
                <Input id="call-website" placeholder="https://yourcompany.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="call-datetime">Preferred Date/Time for Call</Label>
                <Input id="call-datetime" placeholder="e.g., Tomorrow at 2 PM EST" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="call-description">Briefly describe your brand</Label>
                <Textarea id="call-description" placeholder="Tell us a bit about what you're looking to explore..." />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Request Your Call
              </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Form #2: Press Inquiry */}
      <TabsContent value="press-inquiry">
        <Card>
          <CardHeader>
            <CardTitle>Press & Media Inquiries</CardTitle>
            <CardDescription>For all media-related questions, please use this form.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="press-name">Name</Label>
                  <Input id="press-name" placeholder="First & Last Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="press-outlet">Media Outlet</Label>
                  <Input id="press-outlet" placeholder="Your Publication" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="press-email">Email</Label>
                <Input id="press-email" type="email" placeholder="you@publication.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="press-inquiry">Inquiry Details</Label>
                <Textarea id="press-inquiry" placeholder="What would you like to discuss?" required />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Submit Press Inquiry
              </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Form #3: General Contact & Support */}
      <TabsContent value="general-support">
        <Card>
          <CardHeader>
            <CardTitle>General Questions & Support</CardTitle>
            <CardDescription>Have a general question, feedback, or a technical issue? Let us know.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="general-name">Name</Label>
                  <Input id="general-name" placeholder="First & Last Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="general-email">Email</Label>
                  <Input id="general-email" type="email" placeholder="your.email@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="general-subject">Subject</Label>
                <Select>
                  <SelectTrigger id="general-subject">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Question</SelectItem>
                    <SelectItem value="technical">Technical Issue</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="general-message">Message</Label>
                <Textarea id="general-message" placeholder="Your message..." required />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Form #4: User Waitlist Signup */}
      <TabsContent value="user-waitlist">
        <Card>
          <CardHeader>
            <CardTitle>Join Our User Waitlist</CardTitle>
            <CardDescription>Be the first to know when Earlyshh is available in your area.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="waitlist-name">Name</Label>
                  <Input id="waitlist-name" placeholder="First & Last Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="waitlist-email">Email</Label>
                  <Input id="waitlist-email" type="email" placeholder="your.email@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="waitlist-city">City or Neighborhood (optional)</Label>
                <Input id="waitlist-city" placeholder="e.g., Brooklyn, NY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="waitlist-source">How did you hear about us? (optional)</Label>
                <Input id="waitlist-source" placeholder="e.g., Instagram, a friend, etc." />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Join Waitlist
              </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
