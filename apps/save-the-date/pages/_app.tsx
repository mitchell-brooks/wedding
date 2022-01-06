import { AppProps } from 'next/app';
import Head from 'next/head';
import '../assets/fonts/fonts.css';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { GlobalStyles } from '../theme-config';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Emily & Mitchell - June 11th, 2022</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
      <GlobalStyles />
    </>
  );
}

export default CustomApp;
