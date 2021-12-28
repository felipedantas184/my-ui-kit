import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import theme from '../styles/theme'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
