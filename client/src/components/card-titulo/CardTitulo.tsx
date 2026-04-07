import './CardTitulo.css'

type CardTituloProps = {
    titulo: string
}

function CardTitulo(props: CardTituloProps) {
    return (
        <div className="container-sm">
            <h1 className="lista-animais">{props.titulo}</h1>
        </div>
    )
}

export default CardTitulo
