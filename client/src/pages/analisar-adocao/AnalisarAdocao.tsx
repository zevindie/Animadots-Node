import './AnalisarAdocao.css'

import Menu from '../../components/menu/Menu'
import Tabela from '../../components/tabela/Tabela'

function AnalisarAdocao() {
    return (
        <>
            <Menu />
            <div className="corpo">
                <div className="container-sm">
                    <h1>Analisar Adoção</h1>
                </div>
                <div className="container-sm">
                    <Tabela />
                </div>
            </div>
        </>
    );
}

export default AnalisarAdocao;