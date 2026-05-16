import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TriageAI — AI-Powered Support Ticket Urgency Classifier',
  description: 'Automatically classify support tickets by urgency and route critical issues to senior staff immediately. Save hours of manual triage every day.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b50db958-53bf-40c7-ae72-855eb5f44267"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
