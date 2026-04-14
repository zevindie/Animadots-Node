import axios from 'axios'
import { useState, useEffect } from 'react'

import './GerenciarAnimal.css'

import Menu from '../../components/menu/Menu'
import Tabela from '../../components/tabela/Tabela'

function GerenciarAnimal() {
    const [animais, setAnimais] = useState([]);

    useEffect(() => {
        async function buscarAnimais() {
            try {
                const response = await axios.get("http://localhost:3000/animal/listar");
                setAnimais(response.data.lista);
                console.log(response.data.lista);
            } catch (error) {
                console.error("Erro ao buscar animais:", error);
            }
        }

        buscarAnimais();
    }, []);

    return (
        <>
            <Menu />
            <div className="corpo">
                <div className="container-sm">
                    <h1>Gerenciar Animais</h1>
                </div>
                <div className="container-sm">
                    <Tabela lista={animais}/>
                </div>
            </div>
        </>
    );
}

export default GerenciarAnimal;