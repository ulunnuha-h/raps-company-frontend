import '@/styles/globals.css'
import '@/styles/animation.css'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Script from "next/script"

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Jual Beli DL murah 24 jam' />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <title>Raps Company</title>
      </Head>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-N39S3BY23K"/>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N39S3BY23K', {
              page_path: window.location.pathname,
          });
          `,
          }}
      />
      <div className='absolute w-full z-50'>
        <Navbar/>
      </div>
      <Component {...pageProps}/>
      <Footer/>
    </>
  )
}
