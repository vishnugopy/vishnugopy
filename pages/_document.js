import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="./webcover.png" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#1ad0d6"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#1ad0d6"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <meta
          name="description"
          content="Je suis un développeur web JavaScript,j'habite en France et je suis passionné par le développement web"
        />
        <link rel="apple-touch-icon" href="/vishnugopy.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4828304388648873"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className="dark font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
