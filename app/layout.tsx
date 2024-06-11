import "./globals.css"
import { Inter, Source_Code_Pro } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceCodePro.variable}`}>
      <body className="bg-neutral-900 p-32 font-mono text-lime-500">
        {children}
      </body>
    </html>
  )
}
