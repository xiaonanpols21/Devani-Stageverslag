import '../styles/globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" /> 
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Devani Stageverslag</title>
            <link rel="icon" type="image/x-icon" href="/img/vercel.svg" />
        </head>
        <body>
            {children}
        </body>
    </html>
  )
}
