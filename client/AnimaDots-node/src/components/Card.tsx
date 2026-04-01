import '../App.css'

type CardProps = {
  nome: string
  idade: number
  onNomeChange: (valor: string) => void
  onIdadeChange: (valor: number) => void
  onMostrarMensagem: () => void
  mensagem: string
}

function Card(props: CardProps) {
  return (
    <div className="card">
        <h1 className="title">Minha primeira tela</h1>

        <input
            className="input"
            type="text"
            value={props.nome}
            onChange={(e) => props.onNomeChange(e.target.value)}
            placeholder="Digite seu nome"
        />

        <input
            className="input"
            type="number"
            value={props.idade}
            onChange={(e) => props.onIdadeChange(e.target.valueAsNumber)}
            placeholder="Digite sua idade"
            min={0}
        />

        <button className="botao" onClick={props.onMostrarMensagem}>
            Mostrar mensagem
        </button>

        {props.mensagem && <p className="text">{props.mensagem}</p>}
    </div>
  )
}

export default Card