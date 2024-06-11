import React, { FC } from "react"
import GlitchElement from "./GlitchElement"

export type GlitchImageProps = {}

const GlitchImage: FC<GlitchImageProps> = ({}) => {
  return (
    <div className="group relative block size-full h-64 w-full cursor-pointer overflow-hidden">
      <GlitchElement />
      <GlitchElement className="left-[-10px] top-[-5px] hidden animate-glitch1 group-hover:flex" />
      <GlitchElement className="left-[3px] top-[3px] hidden animate-glitch2 group-hover:flex" />
      {/* <GlitchElement className="animate-glitch3 left-[3px] top-[3px]" /> */}
      {/* <GlitchElement className="animate-glitch1" /> */}
      {/* <GlitchElement />
      <GlitchElement /> */}
    </div>
  )
}

export default GlitchImage
