import './CardLogin.css'

type CardProps = {
  email: string
  senha: string
  onEmailChange: (valor: string) => void
  onSenhaChange: (valor: string) => void
  onUserTyping: () => void
  handleLogin: (e: any) => void
  mensagem: string
  imagem: string
}

function Card(props: CardProps) {
  return (
    <div className="card">
      <img src={props.imagem} alt="Logo" />
      <p className="title">Bem-vindo(a)!</p>

      <form onSubmit={props.handleLogin}>
        <input
          className="input"
          type="text"
          value={props.email}
          onChange={(e) => {props.onEmailChange(e.target.value); props.onUserTyping()}}
          placeholder="Digite seu login"
        />
        <br/>
        <input
          className="input"
          type="password"
          value={props.senha}
          onChange={(e) => {props.onSenhaChange(e.target.value); props.onUserTyping()}}
          placeholder="Digite sua senha"
        />

        {props.mensagem && <p className="text">{props.mensagem}</p>}
        <br/>
        <button className="botao" type="submit">
          Acessar
        </button>
      </form>
    </div>
  )
}

export default Card