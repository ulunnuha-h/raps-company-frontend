import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <>
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    </>
  )
}
