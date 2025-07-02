import { Inter } from "next/font/google"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

const ColorSwatch = ({ color, name, hex }: { color: string; name: string; hex: string }) => (
  <div className="flex flex-col items-center">
    <div className={`w-24 h-24 rounded-lg shadow-md ${color} border-2 border-slate-700`}></div>
    <p className="mt-2 text-sm font-semibold text-slate-100">{name}</p>
    <p className="text-xs text-slate-400">{hex}</p>
  </div>
)

export default function BrandKitPreviewPage() {
  return (
    <div className={`w-full text-white bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 ${inter.className}`}>
      <div className="container mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            EARLYSHH Brand Kit Preview
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            A visual representation of the EARLYSHH brand assets and guidelines.
          </p>
        </header>

        {/* Section 1: Logo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center border-b border-slate-700 pb-4">1. Logo</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">Primary Logo (Wordmark)</h3>
              <div className="bg-slate-800 p-6 rounded-lg inline-block">
                <Image
                  src="/assets/earlyshh-logo-primary.png" // Using the actual SVG
                  alt="EARLYSHH Primary Logo"
                  width={300}
                  height={75}
                />
              </div>
              <p className="text-sm text-slate-400 mt-2">
                Modern, approachable wordmark. "SHH" can be subtly emphasized.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">Logomark / Icon</h3>
              <div className="bg-slate-800 p-6 rounded-lg inline-block">
                <Image
                  src="/assets/earlyshh-logomark.png" // Using the actual SVG
                  alt="EARLYSHH Logomark"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-sm text-slate-400 mt-2">
                Compact icon for favicons, social media. (Conceptual 'E' design)
              </p>
            </div>
          </div>
        </section>

        {/* Other sections (Color Palette, Typography, etc.) remain the same */}
        {/* Section 2: Color Palette */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center border-b border-slate-700 pb-4">
            2. Color Palette
          </h2>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-200 mb-4 text-center">Primary Gradient</h3>
            <div className="p-8 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 rounded-lg shadow-lg text-center">
              <p className="text-white font-bold text-lg">Pink (#ec4899) → Purple (#a855f7) → Cyan (#22d3ee)</p>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-slate-200 mb-6 text-center">Accent Colors</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
            <ColorSwatch color="bg-sky-400" name="Sky Blue" hex="#38bdf8" />
            <ColorSwatch color="bg-blue-500" name="Bright Blue" hex="#3b82f6" />
            <ColorSwatch color="bg-green-400" name="Green" hex="#4ade80" />
            <ColorSwatch color="bg-teal-400" name="Teal" hex="#2dd4bf" />
            <ColorSwatch color="bg-yellow-400" name="Yellow" hex="#facc15" />
            <ColorSwatch color="bg-orange-500" name="Orange" hex="#f97316" />
          </div>
          <h3 className="text-xl font-semibold text-slate-200 mb-6 text-center">Neutral Colors</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <ColorSwatch color="bg-slate-900" name="Dark BG" hex="#0f172a" />
            <ColorSwatch color="bg-slate-800" name="Medium Dark BG" hex="#1e293b" />
            <ColorSwatch color="bg-white" name="Light Text" hex="#ffffff" />
            <ColorSwatch color="bg-slate-300" name="Mid-Light Text" hex="#cbd5e1" />
            <ColorSwatch color="bg-slate-400" name="Subtle Text" hex="#94a3b8" />
          </div>
        </section>

        {/* Section 3: Typography */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center border-b border-slate-700 pb-4">
            3. Typography (Inter)
          </h2>
          <div className="bg-slate-800 p-8 rounded-lg">
            <div>
              <p className="text-xs text-slate-400 mb-1">H1 Heading (font-black)</p>
              <h1 className="text-5xl font-black text-purple-400 mb-6">Connect Directly</h1>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-1">H2 Heading (font-bold)</p>
              <h2 className="text-3xl font-bold text-sky-400 mb-6">Why Brands Choose Earlyshh</h2>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-1">Subheading (font-semibold)</p>
              <h3 className="text-xl font-semibold text-slate-100 mb-4">Our Mission & Vision</h3>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-1">Body Text (font-normal/medium)</p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Earlyshh empowers everyday people to authentically engage with your products, delivering genuine local
                insights and sustainable brand growth—without the influencer headaches.
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-1">Button Text (font-bold)</p>
              <button className="px-6 py-3 bg-pink-500 text-white font-bold rounded-lg text-sm">
                Schedule Your Call
              </button>
            </div>
          </div>
        </section>

        {/* Section 4: Imagery Style */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center border-b border-slate-700 pb-4">
            4. Imagery Style
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-200 mb-3">Photography</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Focus on genuine, unposed moments. Diverse people in local settings. Bright, natural lighting or
                authentic urban moods. Avoid generic stock photos.
              </p>
              <Image
                src="/placeholder.svg?width=400&height=250"
                alt="Photography Style Example"
                width={400}
                height={250}
                className="rounded-md"
              />
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-200 mb-3">Illustrations & Graphics</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Clean, modern, minimalist. Use brand colors. Simple and clear icons. Sleek, contemporary mockups.
              </p>
              <Image
                src="/placeholder.svg?width=400&height=250"
                alt="Illustration Style Example"
                width={400}
                height={250}
                className="rounded-md"
              />
            </div>
          </div>
          <p className="text-center text-slate-300 mt-8 text-lg">
            Overall Feel: Tech-forward but human-centered. Trustworthy, innovative, and community-oriented.
          </p>
        </section>

        {/* Section 5: Brand Voice & Tone */}
        <section>
          <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center border-b border-slate-700 pb-4">
            5. Brand Voice & Tone
          </h2>
          <div className="bg-slate-800 p-8 rounded-lg">
            <p className="text-slate-300 leading-relaxed">
              <strong className="text-slate-100">Keywords:</strong> Authentic, Direct, Local, Community-Focused,
              Innovative, Sustainable, Transparent, Empowering, Simple, Effective, Anti-Influencer.
            </p>
            <br />
            <p className="text-slate-300 leading-relaxed">
              <strong className="text-slate-100">Tone:</strong> Confident & Knowledgeable, Approachable & Friendly,
              Benefit-Driven, Innovative & Forward-Thinking, Enthusiastic & Positive, Slightly Disruptive.
            </p>
            <br />
            <p className="text-slate-300 leading-relaxed italic">
              <strong className="text-slate-100 not-italic">Example:</strong> "Earlyshh empowers everyday people to
              authentically engage with your products, delivering genuine local insights and sustainable brand
              growth—without the influencer headaches."
            </p>
          </div>
        </section>

        <footer className="text-center mt-20 pt-8 border-t border-slate-700">
          <p className="text-sm text-slate-500">
            This is a conceptual preview. Actual assets would be designed and exported separately.
          </p>
        </footer>
      </div>
    </div>
  )
}
