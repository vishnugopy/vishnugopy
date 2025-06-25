import Head from "next/head";
import Header from "../src/components/Header";
import HomePage from "../src/pages/HomePage";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vishnu Gopy</title>
      </Head>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}
