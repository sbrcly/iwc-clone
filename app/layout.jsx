import MainHeader from "@/components/MainHeader.jsx"
import MainFooter from "@/components/MainFooter.jsx"

import "./globals.css"

export const metadata = {
  title: "Swiss Luxury Watches | IWC Schaffhausen",
  description: "Clone of the IWC Watches website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  )
}
