import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-roboto min-h-screen bg-cover bg-center bg-no-repeat bg-fixed bg-slate-800 text-white">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico"></link>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
