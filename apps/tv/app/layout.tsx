// import Head from 'next/head'
import './globals.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    {/* next/head broken */}
    {/* <Head>
      <title>onthechain.tv</title>
      <meta name='description' content='TODO' />
      <link rel='icon' href='/favicon.ico' />
    </Head> */}

    {/* TODO: Navbar */}
    <body>{children}</body>
  </html>
)

// eslint-disable-next-line import/no-default-export
export default RootLayout
