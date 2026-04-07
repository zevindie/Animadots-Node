import { Routes, Route } from 'react-router-dom'

import Login from './pages/login/Login'
import Home from './pages/Home'

import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
} 