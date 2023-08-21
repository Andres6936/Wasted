import './globals.css'

export const metadata = {
  title: 'Waste',
  description: 'Join us in the fight for the environment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={"h-full"}>
      <body>
        <main className="h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
