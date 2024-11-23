import MainHeader from "@/components/MainHeader.jsx"
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
      </body>
    </html>
  )
}
