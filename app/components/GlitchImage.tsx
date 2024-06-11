import React, { FC } from "react"
import Image from "next/image"
import photo from "../../img/photo.jpg"

export type GlitchImageProps = {}

const GlitchImage: FC<GlitchImageProps> = ({}) => {
  return (
    <div className="relative aspect-video w-full">
      <Image src={photo} alt="" fill={true} className="object-cover" />
    </div>
  )
}

export default GlitchImage
