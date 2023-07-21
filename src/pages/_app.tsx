import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import '@/styles/globals.css';

import { League_Spartan } from 'next/font/google';
const leagueSpartan = League_Spartan({ subsets: ['latin'] });

import Header from '@/resources/Header';

const lightTheme = createTheme({
  type: 'light',
  theme: {},
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#191919',
      backgroundAlpha: '#191919',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Head>
          <title>Luiz Doretto | Portfolio</title>
        </Head>
        <main className={leagueSpartan.className}>
          <Header />
          <Component {...pageProps} />
        </main>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
