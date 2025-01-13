// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils' // Optional: a utility class merger (e.g. clsx) if you like
import { ThemeProviderWrapper } from '@/components/ThemeProviderWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Swing Trade Fun',
  description: '1000 trades, 1000 wins.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Force dark mode by adding "dark" class on the html or body. */}
      <body className={cn(inter.className, "dark bg-[#343541] text-white")}>
        <ThemeProviderWrapper attribute="class" defaultTheme="dark">
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
