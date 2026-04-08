import { Routes, Route } from 'react-router-dom'

import Login from './pages/login/Login'
import GerenciarAnimal from './pages/gerenciar-animal/GerenciarAnimal'
import AnalisarAdocao from './pages/analisar-adocao/AnalisarAdocao'

import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/gerenciar-animal" element={<GerenciarAnimal />} />
      <Route path="/analisar-adocao" element={<AnalisarAdocao />} />
    </Routes>
  )
} 