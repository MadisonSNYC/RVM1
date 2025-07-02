import { Mail, MapPin, MessageSquare } from "lucide-react"
import ContactForms from "./contact-forms"
import Link from "next/link"
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function ContactPage() {
  return (
    <div className="w-full text-white bg-slate-900">
      {/* 1. Page Header / Hero Section */}
      <section className="bg-gradient-to-br from-pink-500 via-purple-600 to-turquoise-500 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <MessageSquare className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight !leading-snug mb-6">
              Get in Touch With the Earlyshh Team
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto">
              Questions, press inquiries, or interested in partnerships? We&apos;d love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* 2. Clearly Organized Contact Forms */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForms />
        </div>
      </section>

      {/* 3. Alternative Contact Methods */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Or Reach Out Directly</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <Mail className="w-8 h-8 text-purple-400" />
              <a href="mailto:hello@earlyshh.com" className="text-lg text-slate-200 hover:text-purple-300">
                hello@earlyshh.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="Instagram">
                <FaInstagram className="w-7 h-7 text-slate-400 hover:text-pink-400 transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <FaLinkedin className="w-7 h-7 text-slate-400 hover:text-blue-400 transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <FaTwitter className="w-7 h-7 text-slate-400 hover:text-sky-400 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Emphasis on Local Presence & Authenticity */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <MapPin className="w-12 h-12 mx-auto mb-6 text-green-400" />
          <h2 className="text-3xl font-bold mb-4">We’re Right Here in Your Neighborhood</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Earlyshh is committed to fostering genuine local engagement and sustainable community connections—right
            where you live.
          </p>
        </div>
      </section>
    </div>
  )
}
