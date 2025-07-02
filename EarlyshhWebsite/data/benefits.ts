import { LucideIcon, MessageSquareText, Users, Leaf, Settings2, Target, BadgeCheck } from "lucide-react"

export interface Benefit {
  icon: LucideIcon
  title: string
  description: string
  bgColor: string
  borderColor: string
  iconColor: string
}

export const whyChooseEarlyshhBenefits: Benefit[] = [
  {
    icon: MessageSquareText,
    title: "Direct Local Consumer Insights",
    description: "Receive immediate, actionable feedback from actual consumers who genuinely experience your products.",
    bgColor: "from-sky-500/10 to-cyan-500/10",
    borderColor: "border-sky-400/50",
    iconColor: "text-sky-400",
  },
  {
    icon: Users,
    title: "Authentic Engagement at Scale",
    description: "Activate hundreds of real community members per campaign, organically growing brand loyalty.",
    bgColor: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-400/50",
    iconColor: "text-purple-400",
  },
  {
    icon: Leaf,
    title: "Cost-Effective and Sustainable",
    description: "Eliminate influencer markups and shipping waste with direct, in-person, local connections.",
    bgColor: "from-green-500/10 to-teal-500/10",
    borderColor: "border-green-400/50",
    iconColor: "text-green-400",
  },
  {
    icon: Settings2,
    title: "Simplified Campaign Management",
    description: "We handle outreach, logistics, and tracking—allowing you to focus on your business growth.",
    bgColor: "from-blue-500/10 to-indigo-500/10",
    borderColor: "border-blue-400/50",
    iconColor: "text-blue-400",
  },
  {
    icon: Target,
    title: "Precision Local Targeting",
    description:
      "Pinpoint and engage your brand's ideal customers within specific local communities, ensuring impactful connections that align with your unique demographic profile.",
    bgColor: "from-red-500/10 to-orange-500/10",
    borderColor: "border-red-400/50",
    iconColor: "text-red-400",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance & Verification",
    description:
      "Every participant is verified for authentic local engagement, ensuring quality interactions and brand safety.",
    bgColor: "from-yellow-500/10 to-amber-500/10",
    borderColor: "border-yellow-400/50",
    iconColor: "text-yellow-400",
  },
]