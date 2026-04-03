import { useState } from 'react'

import './Login.css'

import imagem from '../../assets/logo.png'
import Card from '../../components/card/Card'

function Login() {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')

    function mostrarMensagem() {
        setMensagem(`Olá, ${login}! Sua senha é ${senha}.`)
    }

    function limparMensagem() {
        setMensagem('')
    }

    return (
        <div className="body">
            <div className="page">
                <Card
                    imagem={imagem}
                    login={login}
                    senha={senha}
                    onLoginChange={setLogin}
                    onSenhaChange={setSenha}
                    onUserTyping={limparMensagem}
                    onMostrarMensagem={mostrarMensagem}
                    mensagem={mensagem}
                />
            </div>
        </div>
    )
}

export default Login