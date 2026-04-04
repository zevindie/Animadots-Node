import axios from 'axios'
import { useState } from 'react'

import './Login.css'

import imagem from '../../assets/logo.png'
import Card from '../../components/card/Card'

function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')

    async function handleLogin(e: any) {
        e.preventDefault()

        try {
            await axios.post('http://localhost:3000/login/logar', {
                "emailFuncionario": email,
                "senhaFuncionario": senha
            })
        } catch (error: any) {
            setMensagem('Login inválido. Verifique o e-mail e senha e tente novamente.')                        
        }
    }

    function limparMensagem() {
        setMensagem('')
    }

    return (
        <div className="body">
            <div className="page">
                <Card
                    imagem={imagem}
                    email={email}
                    senha={senha}
                    onEmailChange={setEmail}
                    onSenhaChange={setSenha}
                    onUserTyping={limparMensagem}
                    handleLogin={handleLogin}
                    mensagem={mensagem}
                />
            </div>
        </div>
    )
}

export default Login