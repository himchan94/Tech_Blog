import type { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";
import Layout from "../layout";
import ModeProvider from "../hoc/ModeProvider";
import "../styles/index.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModeProvider>
      <Layout>
        <Header />
        <main className='content'>
          <Component {...pageProps} />
        </main>
        <Footer />
      </Layout>
    </ModeProvider>
  );
}

export default MyApp;
