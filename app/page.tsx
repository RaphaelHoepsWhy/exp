import { cn } from "@/lib/utils"
import React, { FC } from "react"
import GlitchImage from "./components/GlitchImage/GlitchImage"

export type pageProps = {}

const HomePage: FC<pageProps> = ({}) => {
  return (
    <>
      <h1 className={cn("mb-8 text-xl text-lime-500")}>Analog</h1>
      <GlitchImage />
    </>
  )
}

export default HomePage
