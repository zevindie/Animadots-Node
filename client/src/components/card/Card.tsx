import './Card.css'

type CardProps = {
  login: string
  senha: string
  onLoginChange: (valor: string) => void
  onSenhaChange: (valor: string) => void
  onUserTyping: () => void
  onMostrarMensagem: () => void
  mensagem: string
  imagem: string
}

function Card(props: CardProps) {
  return (
    <div className="card">
      <img src={props.imagem} alt="Logo" />
      <p className="title">Bem-vindo(a)!</p>

      <input
        className="input"
        type="text"
        value={props.login}
        onChange={(e) => {props.onLoginChange(e.target.value); props.onUserTyping()}}
        placeholder="Digite seu login"
      />

      <input
        className="input"
        type="password"
        value={props.senha}
        onChange={(e) => {props.onSenhaChange(e.target.value); props.onUserTyping()}}
        placeholder="Digite sua senha"
      />

      {props.mensagem && <p className="text">{props.mensagem}</p>}

      <button className="botao" onClick={props.onMostrarMensagem}>
        Acessar
      </button>
    </div>
  )
}

export default Card