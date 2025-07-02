import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import InstagramStoryMockup from "@/components/instagram-story-mockup"
import { gradients, colors } from "@/data/constants"

export default function HeroSection() {
  return (
    <div className={`bg-gradient-to-br ${gradients.primary}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20 lg:py-12">
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight !leading-snug">
              Connect Directly With Real Local Consumers
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-xl mx-auto lg:mx-0">
              Earlyshh empowers everyday people to authentically engage with your products, delivering genuine local
              insights and sustainable brand growth—without the influencer headaches.
            </p>
            <div className="space-y-4 pt-4">
              <Button
                asChild
                size="lg"
                className={`w-full max-w-xs mx-auto lg:mx-0 h-14 bg-gradient-to-r ${colors.button.primary} hover:${colors.button.primaryHover} text-slate-900 font-bold text-lg rounded-xl shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 group`}
              >
                <Link href="/book-demo">
                  <Sparkles className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:animate-pulse" />
                  Set Up a Call
                </Link>
              </Button>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6 pt-3">
                <Link
                  href="/how-it-works"
                  className="text-sm text-slate-300 hover:text-yellow-300 transition-colors group flex items-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-slate-300 hover:text-purple-300 transition-colors group flex items-center"
                >
                  Explore Possibilities
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pt-8 lg:pt-0">
            <div className="transform transition-transform duration-500 hover:scale-105">
              <InstagramStoryMockup />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}