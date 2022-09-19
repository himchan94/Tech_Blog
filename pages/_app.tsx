import { useContext } from "react";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";
import Layout from "../layout";
import ModeProvider from "../hoc/ModeProvider";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ModeProvider>
        <Header />
        <div className='content'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </ModeProvider>
    </Layout>
  );
}

export default MyApp;
