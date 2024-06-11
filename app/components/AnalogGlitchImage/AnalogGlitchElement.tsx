import React, { FC } from "react"
import photo from "../../../img/photo.jpg"
import Image from "next/image"
import { cn } from "@/lib/utils"

export type ImageProps = {
  className?: string
}

const GlitchElement: FC<ImageProps> = ({ className }) => {
  return (
    <div className={cn("absolute size-full object-cover", className)}>
      <div className={"relative size-full"}>
        <Image src={photo} alt="" fill={true} className="object-cover" />
      </div>
    </div>
  )
}

export default GlitchElement
