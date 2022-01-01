import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '@/pages'
import Chat from '@/pages/chat'

const RouterComp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
    </Router>
  )
}

export default RouterComp
