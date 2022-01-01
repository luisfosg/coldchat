import useTheme from '@/hooks/useTheme'

import AppLayout from '@/layouts/app-layout'

import { themeLight } from '@/styles/themes'
import RouterPage from '@/Router'

import 'normalize.css'
import 'nes.css/css/nes.min.css'
import '@/styles/globals.css'

function App () {
  useTheme(themeLight)

  return (
    <>
      <AppLayout>
        <RouterPage />
      </AppLayout>
    </>
  )
}

export default App
