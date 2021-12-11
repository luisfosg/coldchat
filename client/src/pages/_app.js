import Head from 'next/head'

import useTheme from 'hooks/useTheme'

import AppLayout from 'layouts/app-layout'

import { themeLight } from 'styles/themes'

import 'normalize.css'
import 'nes.css/css/nes.min.css'
import 'styles/globals.css'

function MyApp ({ Component, pageProps }) {
  useTheme(themeLight)

  return (
    <>
      <Head>
        <title>ColdChat</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}

export default MyApp
