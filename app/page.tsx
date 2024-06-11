import { cn } from "@/lib/utils"
import React, { FC } from "react"

export type pageProps = {}

const HomePage: FC<pageProps> = ({}) => {
  return (
    <>
      <h1 className={cn("text-xl text-lime-500")}>Hello</h1>
    </>
  )
}

export default HomePage
