import { LucideIcon, MessageCircle, Users, BarChartBig } from "lucide-react"

export interface Step {
  icon: LucideIcon
  title: string
  description: string
  placeholderQuery: string
}

export const howEarlyshhWorksSteps: Step[] = [
  {
    icon: MessageCircle,
    title: "Strategy Alignment Call",
    description: "Clearly define brand goals, ideal local demographics, and key campaign details.",
    placeholderQuery: "calendar+scheduling+interface+mockup",
  },
  {
    icon: Users,
    title: "Local Consumer Activation",
    description: "Seamlessly connect brands directly with genuine local consumers in real-time, in person.",
    placeholderQuery: "app+user+activation+flow+mockup",
  },
  {
    icon: BarChartBig,
    title: "Real-Time Insights",
    description: "Gain immediate access to genuine feedback and actionable market data for smarter business decisions.",
    placeholderQuery: "data+insights+dashboard+charts+mockup",
  },
]