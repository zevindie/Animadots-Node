import './Home.css'

import imagem from '../assets/logo.png'
import Menu from '../components/menu/Menu'
import CardTitulo from '../components/card-titulo/CardTitulo';

function Home() {
    return (
        <>
            <Menu />
            <div className="body">
                <CardTitulo titulo="Gerenciar Animais" />
                <CardTitulo titulo={imagem} />
            </div>
        </>
    );
}

export default Home;