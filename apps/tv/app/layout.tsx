import Head from 'next/head'
import './globals.css'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Head>
        <title>onthechain.tv</title>
        <meta name='description' content='TODO' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>{children}</body>
    </html>
  )
}
