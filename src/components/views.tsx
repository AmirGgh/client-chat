import { Routes, Route } from 'react-router-dom'
import Login from './Login/Login'
import Signup from './Login/Signup'
import Chat from './Chat/Chat'

const Views = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="*" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
        </Routes>
    )
}

export default Views
