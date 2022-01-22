import { BrowserRouter as Router } from 'react-router-dom'

import { SocketContextProvider } from '@/context/SocketContext'

import AppLayout from '@/layouts/app-layout'

import RouterPage from '@/Router'

import '@/styles/globals.css'

function App () {
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
