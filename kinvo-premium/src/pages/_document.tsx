import Document, { Head, Html, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';
import React from 'react';

interface DocumentProps {
  styleTags: any;
}

export default class MyDocument extends Document<DocumentProps> {
  static getInitialProps({ renderPage }: any) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App: typeof React.Component) => (props: {}) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,400;0,500;0,600;0,800;0,900;1,700&display=swap"
            rel="stylesheet"
          />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
