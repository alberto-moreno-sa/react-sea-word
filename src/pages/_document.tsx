import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" name="charset" property="charset" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            property="apple-mobile-web-app-status-bar-style"
            name="apple-mobile-web-app-status-bar-style"
            content="black"
          />
          <meta
            property="apple-mobile-web-app-capable"
            name="apple-mobile-web-app-capable"
            content="yes"
          />
          <link rel="icon" href="/favicon.png" />
          <link rel="icon" href="/android-icon.png" sizes="192x192" />
          <link rel="apple-touch-icon" sizes="180x180" href="/touch-icon-iphone-retina.png" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
            integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript crossOrigin="" />
        </body>
      </Html>
    );
  }
}

export default Document;
