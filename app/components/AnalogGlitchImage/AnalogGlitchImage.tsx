import React, { FC } from "react"
import GlitchElement from "./AnalogGlitchElement"

export type GlitchImageProps = {}

const GlitchImage: FC<GlitchImageProps> = ({}) => {
  return (
    <div className="group relative block aspect-video size-full w-full cursor-pointer overflow-hidden rounded-md">
      <GlitchElement />
      <GlitchElement className="left-[-10px] top-[-5px] hidden animate-glitch1 group-hover:flex" />
      <GlitchElement className="left-[3px] top-[3px] hidden animate-glitch2 delay-200 group-hover:flex" />
    </div>
  )
}

export default GlitchImage
