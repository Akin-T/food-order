import Head from "next/head";
import Home from "./home";
import Header from "../components/layout/Header";


export default function Index() {
  return (
    <div className="">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Header />
      <Home />
    </div>
  );
}
