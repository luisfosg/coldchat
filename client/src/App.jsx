import { BrowserRouter as Router } from 'react-router-dom'

import { SocketContextProvider } from '@/context/SocketContext'

import useTheme from '@/hooks/useTheme'

import AppLayout from '@/layouts/app-layout'

import { themeDark } from '@/styles/themes'
import RouterPage from '@/Router'

import '@/styles/globals.css'

function App () {
  useTheme(themeDark)

  return (
    <Router>
      <SocketContextProvider>
        <AppLayout>
          <RouterPage />
        </AppLayout>
      </SocketContextProvider>
    </Router>
  )
}

export default App
