import { cn } from "@/lib/utils"
import React, { FC } from "react"
import GlitchImage from "./components/AnalogGlitchImage/AnalogGlitchImage"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"

export type pageProps = {}

const HomePage: FC<pageProps> = ({}) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[900px]">
        <h1 className={cn("mb-8 text-xl text-lime-500")}>Analog</h1>
        <GlitchImage />
        <div className="pb-16" />
        <h1 className={cn("mb-8 text-xl text-lime-500")}>Digital</h1>

        <VideoPlayer poster="video/original.png" video="/video/output.webm" />
        <div className="pb-16" />

        <VideoPlayer poster="video/robots.png" video="/video/robots.webm" />
      </div>
    </div>
  )
}

export default HomePage
