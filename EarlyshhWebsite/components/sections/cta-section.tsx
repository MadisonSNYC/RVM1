import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { gradients } from "@/data/constants"

export default function CTASection() {
  return (
    <div className={`py-20 md:py-32 bg-gradient-to-r ${gradients.cta}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 !leading-tight">
          Ready to Engage Authentically with Your Local Community?
        </h2>
        <Button
          asChild
          size="lg"
          className="h-16 px-10 bg-white hover:bg-slate-200 text-slate-900 font-bold text-lg rounded-xl shadow-2xl hover:shadow-slate-400/50 transition-all duration-300 transform hover:scale-105 group"
        >
          <Link href="/book-demo">
            Schedule Your Strategy Call
            <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}