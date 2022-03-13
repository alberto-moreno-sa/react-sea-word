import React from 'react';
import { AppProps } from 'next/app';
import { wrapper } from 'store/store';
import { appWithTranslation } from 'services/TranslationService';
import Head from 'next/head';

import 'styles/reset.css';
import 'styles/global.css';

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          key="viewport"
          property="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
      <noscript>
        <div>
          <h2>Tu dispositivo tiene deshabilitado JavaScript.</h2>
          <p>Habilítalo en las configuración de tu navegador web.</p>
          <p>Sigue estas instrucciones:</p>
          <ul>
            <li>
              <a
                href="http://www.technipages.com/google-chrome-enable-or-disable-javascript"
                target="_blank"
                rel="noreferrer"
              >
                Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/javascript-settings-for-interactive-web-pages"
                target="_blank"
                rel="noreferrer"
              >
                Firefox
              </a>
            </li>
            <li>
              <a
                href="http://www.technipages.com/internet-explorer-enabledisable-javascript"
                target="_blank"
                rel="noreferrer"
              >
                Internet Explorer
              </a>
            </li>
            <li>
              <a
                href="http://pchelp.ricmedia.com/enable-disable-javascript-opera/"
                target="_blank"
                rel="noreferrer"
              >
                Opera
              </a>
            </li>
          </ul>
        </div>
      </noscript>
    </React.Fragment>
  );
};

export default wrapper.withRedux(appWithTranslation(MyApp));
