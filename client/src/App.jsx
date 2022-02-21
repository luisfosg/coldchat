import { BrowserRouter as Router } from 'react-router-dom'

import { SocketContextProvider } from '@/context/SocketContext'
import { ThemeContextProvider } from '@/context/ThemeContext'

import AppLayout from '@/layouts/app-layout'

import RouterPage from '@/Router'

import '@/styles/globals.css'

function App () {
  return (
    <Router>

      <SocketContextProvider>
        <ThemeContextProvider>

          <AppLayout>
            <RouterPage />
          </AppLayout>

        </ThemeContextProvider>
      </SocketContextProvider>

    </Router>
  )
}

export default App
