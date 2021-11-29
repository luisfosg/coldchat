import AppLayout from 'layouts/app-layout'

import 'normalize.css'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
