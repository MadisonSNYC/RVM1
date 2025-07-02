import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} EARLYSHH. All rights reserved.</p>
        {/* Placeholder for optional Creator Signup link */}
        <div className="mt-4">
          <Link href="/creator-signup" className="text-xs text-purple-400 hover:text-purple-300">
            Are you a Creator? Sign up here.
          </Link>
        </div>
      </div>
    </footer>
  )
}
