import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css'></link>
        <link
          href='https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css'
          rel='stylesheet'
        />
        <link
          href='https://fonts.cdnfonts.com/css/monument-extended'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
