import useTheme from '@/hooks/useTheme'

import AppLayout from '@/layouts/app-layout'

import { themeLight } from '@/styles/themes'

import 'normalize.css'
import 'nes.css/css/nes.min.css'
import '@/styles/globals.css'

function App () {
  useTheme(themeLight)

  return (
    <>
      <AppLayout>
        Hola Mundo
      </AppLayout>
    </>
  )
}

export default App
