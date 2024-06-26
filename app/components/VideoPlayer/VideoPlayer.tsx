"use client"
import { cn } from "@/lib/utils"
import { useRef } from "react"

export interface VideoPlayerProps {
  poster: string
  className?: string
  video: string
}

export default function VideoPlayer(props: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  function play() {
    if (!videoRef.current) {
      return
    }

    videoRef.current.play()
  }

  function stop() {
    if (!videoRef.current) {
      return
    }
    videoRef.current.pause()
    videoRef.current.currentTime = 0
  }

  return (
    <div
      className={cn(
        "aspect-image cursor-pointer overflow-hidden rounded-md",
        props.className,
      )}
      onMouseEnter={play}
      onMouseLeave={stop}
    >
      <video
        ref={videoRef}
        className={"size-full max-w-none object-cover"}
        loop={true}
        muted={true}
        playsInline={true}
        poster={props.poster}
      >
        <source src={props.video} type={"video/webm"} />
      </video>
    </div>
  )
}
