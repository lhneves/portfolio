import Head from 'next/head';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import '@/styles/globals.css';

import { League_Spartan } from 'next/font/google';
const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Head>
        <title>Luiz Doretto | Portfolio</title>
      </Head>
      <main className={leagueSpartan.className}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
