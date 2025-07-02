import Image from "next/image"
import { Heart, Send, MoreHorizontal } from "lucide-react"

export default function InstagramStoryMockup() {
  const brandName = "@Superoot"

  return (
    <div className="relative mx-auto border-slate-800 bg-slate-800 border-[8px] rounded-[2.5rem] h-[520px] w-[260px] shadow-xl">
      <div className="w-[100px] h-[18px] bg-slate-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[32px] w-[3px] bg-slate-800 absolute -left-[10px] top-[64px] rounded-l-lg"></div>
      <div className="h-[32px] w-[3px] bg-slate-800 absolute -left-[10px] top-[110px] rounded-l-lg"></div>
      <div className="h-[48px] w-[3px] bg-slate-800 absolute -right-[10px] top-[128px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-900">
        {/* Instagram Story Content */}
        <div className="relative w-full h-full">
          <Image
            src="/images/superoot-story-background-2.jpg"
            alt="Person holding a Superoot drink"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>

          {/* Story Header */}
          <div className="absolute top-0 left-0 right-0 p-3">
            <div className="flex items-center space-x-2">
              <div className="w-full h-1 bg-white/30 rounded-full">
                <div className="w-1/2 h-1 bg-white rounded-full"></div> {/* Progress bar */}
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full overflow-hidden relative border-2 border-pink-500">
                  <Image
                    src="/images/user-avatar-story.jpeg"
                    alt="User avatar - smiling woman"
                    fill
                  />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">{"TheNYCAgent_"}</p>
                  <p className="text-white/70 text-[10px]">2h</p>
                </div>
              </div>
              <MoreHorizontal className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Story Text Overlay */}
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-[55%] text-center w-full px-4">
            <div className="bg-black/50 backdrop-blur-sm p-3 rounded-lg">
              <p className="text-white text-sm md:text-base font-semibold">
                Finally got to try <span className="text-pink-400 font-bold">@Superoot</span> - no chance I&apos;m going
                back to coffee!! ☕️
              </p>
            </div>
          </div>

          {/* Story Footer Actions (Simplified) */}
          <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
            <input
              type="text"
              placeholder="Send message"
              className="bg-black/40 text-white text-xs placeholder-white/60 rounded-full py-2 px-3 w-full focus:outline-none"
            />
            <Heart className="w-6 h-6 text-white ml-2 cursor-pointer" />
            <Send className="w-6 h-6 text-white ml-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}
