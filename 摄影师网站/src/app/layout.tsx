import type { Metadata } from "next"
import { Noto_Sans_SC } from "next/font/google"
import "./globals.css"

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "林墨 | 摄影师",
  description: "林墨 —— Fine Art Photographer，专注于人像与风光摄影。",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={notoSansSC.className}>
      <body>{children}</body>
    </html>
  )
}
