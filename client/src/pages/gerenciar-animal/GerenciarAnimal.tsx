import axios from 'axios'
import { useState, useEffect } from 'react'

import './GerenciarAnimal.css'

import Menu from '../../components/menu/Menu'
import Tabela from '../../components/tabela/Tabela'
import Modal from '../../components/modal/Modal'

function GerenciarAnimal() {
    const [animal, setAnimal] = useState<any>(null)
    const [animais, setAnimais] = useState([])
    const [open, setOpen] = useState(false)

    const handleOpen = (item: any) => { setOpen(true), setAnimal(item) }
    const handleClose = () => setOpen(false)

    useEffect(() => {
        buscarAnimais()
    }, [])

    async function buscarAnimais() {
        try {
            const response = await axios.get("http://localhost:3000/animal/listarTabela")

            setAnimais(response.data.lista)
        } catch (error) {
            console.error("Erro ao buscar animais:", error)
        }
    }

    async function deletarAnimal(idAnimal: any) {
        try {
            const response = await axios.delete(`http://localhost:3000/animal/deletar/${idAnimal}`)

            console.log(response.data)
            
            handleClose()
            buscarAnimais()
        } catch (error) {
            console.error("Erro ao excluir animal:", error)
        }
    }

    return (
        <>
            <Menu />
            <div className="corpo">
                <div className="container-sm">
                    <h1>Gerenciar Animais</h1>
                </div>
                <div className="container-sm">
                    <Tabela lista={animais} abrirModal={handleOpen} />
                    <Modal 
                        open={open} 
                        handleClose={handleClose}
                        handleAction={() => deletarAnimal(animal.ID)}
                        titulo="Excluir animal"
                        descricao="Tem certeza de que deseja excluir o animal? Essa ação não poderá ser desfeita."
                    />
                </div>
            </div>
        </>
    );
}

export default GerenciarAnimal