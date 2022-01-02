import { Routes, Route } from 'react-router-dom'

import Home from '@/pages'
import Chat from '@/pages/chat'

const RouterComp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
    </>
  )
}

export default RouterComp
