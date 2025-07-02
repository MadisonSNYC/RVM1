import { LucideIcon, BarChartBig, Library, LocateFixed, MessageSquareText, LayoutDashboard, Brain } from "lucide-react"

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
  iconColor: string
  placeholderQuery?: string
}

export const futureFocusedFeatures: Feature[] = [
  {
    icon: BarChartBig,
    title: "Advanced Analytics & Insights",
    description: "Real-time metrics, deep local consumer intelligence, precise ROI tracking.",
    iconColor: "text-sky-400",
    placeholderQuery: "real-time+analytics+dashboard+mockup",
  },
  {
    icon: Library,
    title: "Content & User-Generated Assets",
    description: "Curated local consumer-generated content and performance analytics.",
    iconColor: "text-emerald-400",
    placeholderQuery: "curated+user-generated+content+library+mockup",
  },
  {
    icon: LocateFixed,
    title: "Local Market Integration",
    description: "Actionable neighborhood-level consumer insights and retail optimization tools.",
    iconColor: "text-rose-400",
  },
  {
    icon: MessageSquareText,
    title: "Feedback System",
    description: "Detailed category-specific consumer feedback surveys, integrated with market research.",
    iconColor: "text-amber-400",
    placeholderQuery: "survey+feedback+dashboard+mockup",
  },
  {
    icon: LayoutDashboard,
    title: "CRM & Brand Management",
    description: "Efficient tools for campaign management, consumer relationship tracking, and strategic reporting.",
    iconColor: "text-violet-400",
    placeholderQuery: "crm+dashboard+interface+mockup",
  },
  {
    icon: Brain,
    title: "Value-Add & Strategic Services",
    description: "Expert recommendations for local market engagement and upcoming seamless integrations.",
    iconColor: "text-fuchsia-400",
    placeholderQuery: "strategic+services+concept+mockup",
  },
]