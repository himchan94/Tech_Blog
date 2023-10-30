import { useEffect } from "react";
import TagManager, { TagManagerArgs } from "react-gtm-module";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";
import Layout from "../layout";
import ModeProvider from "../hoc/ModeProvider";
import "../styles/index.scss";
import { useRouter } from "next/router";
import cx from "classnames";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router.pathname;
  const isPlaygroundPage =
    pathname.includes("playground") && pathname.split("/")?.length === 3;

  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

  const tagManagerArgs: TagManagerArgs = {
    gtmId,
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <ModeProvider>
      <Layout>
        <Header />
        <main
          className={cx(isPlaygroundPage ? "playground-content" : "content")}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </Layout>
    </ModeProvider>
  );
}

export default MyApp;
