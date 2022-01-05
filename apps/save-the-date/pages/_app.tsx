import { AppProps } from 'next/app';
import Head from 'next/head';
import '../assets/fonts/fonts.css';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { GlobalStyles, theme } from '../theme-config';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Emily & Mitchell - June 11th, 2022</title>
      </Head>
      <ThemeProvider theme={theme}>
        <main className="app">
          <Component {...pageProps} />
        </main>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
