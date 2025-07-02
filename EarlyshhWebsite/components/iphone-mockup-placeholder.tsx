import Image from "next/image"

interface IphoneMockupPlaceholderProps {
  src: string // Expected to be like "/placeholder.svg?width=138&height=288"
  alt: string
}

export default function IphoneMockupPlaceholder({ src, alt }: IphoneMockupPlaceholderProps) {
  return (
    <div className="relative mx-auto border-slate-700 bg-slate-800 border-[6px] rounded-[1.8rem] h-[300px] w-[150px] shadow-lg">
      {/* Notch */}
      <div className="w-[70px] h-[14px] bg-slate-800 top-0 rounded-b-[0.8rem] left-1/2 -translate-x-1/2 absolute z-10"></div>
      {/* Screen Area */}
      <div className="rounded-[1.4rem] overflow-hidden w-full h-full bg-slate-900 relative">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="transform transition-transform duration-300 group-hover:scale-105" // Optional: subtle hover effect
        />
      </div>
    </div>
  )
}
