import '../../styles/globals.css'

import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import type { AppProps } from 'next/app'

import * as Layout from '@/components/layout'

import { mainTheme } from '../themes'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={mainTheme}>
      <CSSReset />
      <Layout.Container>
        <Component {...pageProps} />
      </Layout.Container>
    </ThemeProvider>
  )
}

export default MyApp
