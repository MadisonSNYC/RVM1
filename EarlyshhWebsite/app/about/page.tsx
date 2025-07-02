import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Users,
  MessageSquareText,
  BarChartBig,
  Leaf,
  MapPin,
  Heart,
  ThumbsUp,
  Target,
  CheckCircle,
  Lightbulb,
  Rocket,
  UserCircle,
  ArrowRight,
  Mail,
  Newspaper,
  LocateFixed,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="w-full text-white bg-slate-900">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-pink-500 via-purple-600 via-blue-600 to-turquoise-500 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight !leading-snug mb-6 shadow shadow shadow shadow-md shadow shadow-sm shadow-xs shadow-none">
              Real Products, Real People— Right in Your Neighborhood.
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto">
              Earlyshh connects everyday people directly with new brands through local, authentic experiences—no
              influencers, no complexity, just genuine insights.
            </p>
            <div className="mt-10">
              <Image
                src="/placeholder.svg?width=800&height=400"
                alt="Authentic local product interactions"
                width={800}
                height={400}
                className="rounded-lg shadow-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Origin Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            A Bad Date, Aggressive Energy Drinks, and a New Way Forward
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Earlyshh started from a familiar frustration—a bad date involving endless talk of &apos;marketing
            strategies&apos; and nearly being run over by aggressive energy-drink sample teams on Brooklyn sidewalks.
            Our founder, Madison, found herself thinking: &apos;Why does introducing new products have to be so
            complicated, wasteful, and honestly, stressful?&apos; There had to be a simpler, more authentic way for
            brands to reach local communities without relying on costly influencers or complicated logistics. Earlyshh
            was born to eliminate the influencer hassle and reconnect brands directly to real, local communities—in
            person, sustainably, and authentically.
          </p>
        </div>
      </section>

      {/* 3. Our Mission & Vision */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Reinventing Brand Discovery—Sustainably & Locally
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <Lightbulb className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold text-slate-100 mb-3">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                We’re simplifying how brands introduce their products—by placing them directly in the hands of local
                communities in a sustainable, cost-effective way that ensures real feedback, genuine engagement, and
                meaningful local economic impact.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <Rocket className="w-10 h-10 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold text-slate-100 mb-3">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                Earlyshh aims to become the go-to platform where everyday consumers shape local market trends, brands
                gain invaluable data-driven insights, and communities thrive through authentic, present, and sustainable
                interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Feedback Surveys & Market Data Insights */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Giving Brands an Authentic, Data-Driven Head Start
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-800/70 p-6 rounded-xl shadow-lg border border-green-400/30">
              <MessageSquareText className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-xl font-bold text-slate-100 mb-2">Direct Consumer Feedback</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Brands instantly access authentic, actionable feedback from local consumers who genuinely experience
                their products first-hand.
              </p>
            </div>
            <div className="bg-slate-800/70 p-6 rounded-xl shadow-lg border border-teal-400/30">
              <BarChartBig className="w-8 h-8 text-teal-400 mb-3" />
              <h3 className="text-xl font-bold text-slate-100 mb-2">Market Intelligence & Early Insights</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                With detailed surveys and real-time market data, brands can make smarter decisions, refine products, and
                effectively target their ideal audiences early in their growth.
              </p>
            </div>
            <div className="bg-slate-800/70 p-6 rounded-xl shadow-lg border border-emerald-400/30">
              <Leaf className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-xl font-bold text-slate-100 mb-2">Sustainability in Product Launch</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                By ensuring products reach genuinely interested individuals locally and in-person, Earlyshh
                significantly reduces product waste, creating more sustainable brand experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Community Impact & Sustainability */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Real Presence. Real Sustainability. Real Community Impact.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Local Economic Empowerment",
                text: "Every interaction through Earlyshh directly supports local economies, helping small and emerging brands become genuine community favorites without enormous budgets.",
                color: "text-pink-400",
                borderColor: "border-pink-400/30",
              },
              {
                icon: Users,
                title: "Embracing Diversity Locally",
                text: "Earlyshh promotes genuine local connections, making brand discovery diverse, inclusive, and reflective of the community's authentic preferences.",
                color: "text-purple-400",
                borderColor: "border-purple-400/30",
              },
              {
                icon: Leaf,
                title: "Reducing Environmental Impact",
                text: "Proximity-based activation ensures products reach consumers who are physically present and genuinely interested, dramatically reducing environmental waste.",
                color: "text-green-400",
                borderColor: "border-green-400/30",
              },
              {
                icon: LocateFixed,
                title: "Presence & Authentic Connections",
                text: "Experiences happen in real-time and in person. Our technology ensures offers activate only when users are physically present—real people, real engagement, authentic moments.",
                color: "text-cyan-400",
                borderColor: "border-cyan-400/30",
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className={`bg-slate-800 p-6 rounded-xl shadow-lg border ${item.borderColor}`}>
                  <Icon className={`w-8 h-8 ${item.color} mb-3`} />
                  <h3 className="text-xl font-bold text-slate-100 mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. Simplified, Anti-Influencer Approach */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              All the Benefits of Authentic Engagement, None of the Influencer Hassle
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-800/70 p-6 rounded-xl shadow-lg border border-orange-400/30">
              <Sparkles className="w-8 h-8 text-orange-400 mb-3" />
              <h3 className="text-xl font-bold text-slate-100 mb-2">No More Negotiation & Complexity</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Forget complicated influencer negotiations, costly contracts, and logistical headaches. Earlyshh
                simplifies everything, so brands can focus on growth.
              </p>
            </div>
            <div className="bg-slate-800/70 p-6 rounded-xl shadow-lg border border-red-400/30">
              <MapPin className="w-8 h-8 text-red-400 mb-3" />
              <h3 className="text-xl font-bold text-slate-100 mb-2">Direct Local Connections</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Reach real people directly in their own communities, without shipping costs or influencer markups.
              </p>
            </div>
            <div className="bg-slate-800/70 p-6 rounded-xl shadow-lg border border-yellow-400/30">
              <ThumbsUp className="w-8 h-8 text-yellow-400 mb-3" />
              <h3 className="text-xl font-bold text-slate-100 mb-2">Transparent, Performance-Based Results</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Get measurable insights immediately from actual customers—clear, direct, and actionable, without the
                uncertainty of influencer campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. What Makes Earlyshh Truly Different */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Why Brands are Choosing Authenticity Over Influence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-teal-400/30">
              <CheckCircle className="w-8 h-8 text-teal-400 mb-3" />
              <h3 className="text-xl font-bold text-slate-100 mb-2">Real Recommendations, Zero Influence</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Every recommendation on Earlyshh comes from real people who authentically engage with your products—not
                paid influencers.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-blue-400/30">
              <Target className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-xl font-bold text-slate-100 mb-2">Precision Local Targeting</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Connect with consumers exactly where your product matters—right in local neighborhoods, campuses, and
                communities.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-sky-400/30">
              <Lightbulb className="w-8 h-8 text-sky-400 mb-3" />
              <h3 className="text-xl font-bold text-slate-100 mb-2">Immediate, Actionable Insights</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Get instant access to valuable, real-world market feedback, giving your brand an early competitive
                advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Future Outlook */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Building a Future on Authentic, Sustainable Connections
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Earlyshh is continuously evolving, committed to innovation, deeper community impact, and sustainable brand
            advocacy—always prioritizing genuine local connections and authentic consumer feedback.
          </p>
        </div>
      </section>

      {/* 9. Founder’s Story */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <UserCircle className="w-20 h-20 text-purple-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-slate-100 mb-4">A Note from Our Founder</h2>
          <p className="text-slate-300 text-lg leading-relaxed italic mb-4">
            &quot;Madison founded Earlyshh after too many disappointing dates filled with influencer-talk and close
            calls with aggressive street-sampling marketers. She decided brands and communities deserved better—a
            simpler, more sustainable, genuinely local way to connect. Her approach? Cut the influencer, eliminate the
            drama, and put products directly in the hands of real, present, everyday people.&quot;
          </p>
          <p className="text-slate-200 font-semibold">- Madison, Founder of Earlyshh</p>
        </div>
      </section>
      {/* New Section: Meet the Earlyshh Founders */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Meet the Earlyshh Founders
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {/* Madison's Bio */}
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 text-center flex flex-col items-center">
              <div className="w-32 h-32 rounded-full mb-4 overflow-hidden relative">
                <Image
                  src="/images/madison-founder.jpeg"
                  alt="Madison, Founder of Earlyshh"
                  layout="fill"
                  objectFit="cover"
                  className="" // Removed previous classes like rounded-full, mb-4
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-100">Madison</h3>
              <p className="text-sm font-semibold text-purple-400 mb-4">Founder</p>
              <p className="text-slate-300 text-sm leading-relaxed italic">
                &quot;Madison founded Earlyshh after too many disappointing dates filled with influencer-talk and close
                calls with aggressive street-sampling marketers. She decided brands and communities deserved better—a
                simpler, more sustainable, genuinely local way to connect. Her approach? Cut the influencer, eliminate
                the drama, and put products directly in the hands of real, present, everyday people.&quot;
              </p>
            </div>
            {/* Rob's Bio */}
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 text-center flex flex-col items-center">
              <div className="w-32 h-32 rounded-full mb-4 overflow-hidden relative">
                <Image
                  src="/images/rob-founder.jpeg"
                  alt="Rob, Co-Founder of Earlyshh"
                  layout="fill"
                  objectFit="cover"
                  className="" // Removed previous classes like rounded-full, mb-4
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-100">Rob</h3>
              <p className="text-sm font-semibold text-cyan-400 mb-4">Co-Founder</p>
              <p className="text-slate-300 text-sm leading-relaxed italic">
                &quot;Rob&apos;s our fintech and payments guru from London, with a knack for making complex financial
                stuff feel refreshingly simple. Before Earlyshh, he founded Bread, a platform making sure creators get
                paid fast—like, next-day fast. Rob saw firsthand how tricky creator finances can get, so he&apos;s spent
                his career building easy solutions that give freelancers and creators some much-needed peace of mind.
                When he&apos;s not simplifying finance, you&apos;ll probably find him exploring London’s coffee shops or
                debating the best spots to grab a pint.&quot;
              </p>
            </div>
          </div>
          <div className="text-center max-w-3xl mx-auto mt-12">
            <p className="text-lg text-slate-200 font-semibold">
              Together, Madison and Rob combine authentic, local connections with simplified financial
              expertise—uniquely positioning Earlyshh to revolutionize brand engagement and sustainable local marketing.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Call-to-Action */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 !leading-tight text-white">
            Ready to Get Real Insights from Real People?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-14 px-8 bg-white hover:bg-slate-200 text-slate-900 font-bold text-lg rounded-xl shadow-2xl hover:shadow-slate-400/50 transition-all duration-300 transform hover:scale-105 group"
            >
              <Link href="/book-demo">
                Schedule Your Call
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 px-8 text-white border-white/50 hover:bg-white/10 hover:text-white font-semibold text-lg rounded-xl transition-all duration-300 group"
            >
              <Link href="/contact?subject=Press Inquiry">
                <Newspaper className="w-5 h-5 mr-2" />
                Press Inquiry
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 px-8 text-white border-white/50 hover:bg-white/10 hover:text-white font-semibold text-lg rounded-xl transition-all duration-300 group"
            >
              <Link href="/contact">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
