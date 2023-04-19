import "@/styles/globals.css";
import "@/styles/animation.css";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Jual Beli Diamond Lock Growtopia (DL), World Lock Growtopia (WL) Termurah dan Terpercaya. Menerima all payment (Qris, ATM, Gopay, Dana, Shopeepay, Ovo)"
        />
        <meta
          name="keywords"
          content="Growtopia, Diamond Lock, World Lock, Dlcheap, Rapsshop, Termurah, Terpercaya, all payment, rapswhite"
        />
        <title>
          Jual Beli Diamond Lock Growtopia (DL) Termurah dan Terpercaya -
          DLCheap_ID
        </title>
      </Head>
      {/* <Script src='https://cdn.jsdelivr.net/npm/tsparticles-preset-snow@2/tsparticles.preset.snow.bundle.min.js'></Script> */}
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-N39S3BY23K"/>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-N39S3BY23K"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-N39S3BY23K"
      />
      <Script
        id="google-analytics"
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
      <div className="absolute w-full z-30">
        <Navbar />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
