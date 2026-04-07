import './Menu.css'

function Menu() {
    return (
        <header>
            <div className="logo">AnimaDots</div>
            
            <div className="menu">
                <button className="button">Gerenciar Animal</button>
                <button className="button">Analisar Adoção</button>
                <button className="button">Sair</button>
            </div>
        </header>
    );
}

export default Menu