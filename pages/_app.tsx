import { AppProps } from 'next/app'

import '~@styles/globals.scss'

import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'

function NucleiApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default NucleiApp
