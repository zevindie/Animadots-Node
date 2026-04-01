import { useState } from 'react'

import Card from './components/Card'

function App() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState(0)
  const [mensagem, setMensagem] = useState('')

  function mostrarMensagem() {
    setMensagem(`Olá, ${nome}! Você tem ${idade} anos.`)
  }

  return (
    <div style={styles.page}>
      <Card
        nome={nome}
        idade={idade}
        onNomeChange={setNome}
        onIdadeChange={setIdade}
        onMostrarMensagem={mostrarMensagem}
        mensagem={mensagem}
      />
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: '32px',
    borderRadius: '16px',
    width: '340px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#111827',
    color: '#fff',
    cursor: 'pointer',
  },
  text: {
    color: '#333',
  },
}

export default App