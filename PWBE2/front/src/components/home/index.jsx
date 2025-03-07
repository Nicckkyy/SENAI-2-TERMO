import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaUser, FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa'
import './styles.css'
import Header from "../header";
import Footer from "../footer";
import ModalProfessores from "../modal";


export default function Home() {
    const [dados, setDados] = useState([])
    const token = localStorage.getItem('token')
    const [modalOpen, setModalOpen] = useState(false)
    const [professorSelecionado, setProfessorSelecionado] = useState(null)

    useEffect(() => {

        if (!token) return;

        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/professores',
                    
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                setDados(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    const apagar = async (id) => {
        if (true) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/professor/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                setDados(dados.filter((professor) => { professor.id !== id }))
            } catch (error) {
                console.error(error)
            }
        }
    }

    const criar = async (novoProfessor) => {
        console.log("Novo Professor: ", novoProfessor)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/prof',
                {
                    n1: novoProfessor.n1,
                    nome: novoProfessor.nome,
                    email: novoProfessor.email,
                    tel: novoProfessor.tel,
                    ocupacao: novoProfessor.ocupacao,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                },
            )
            console.log("Dados Inseridos: ", response.data)
            setDados([...dados, novoProfessor])
            setModalOpen(false)
        }
        catch (error) {
            console.error(error)
        }
    }
    const atualizar = async (professorAtualizado) => {
        console.log("Professor Atualizado: ", professorAtualizado)
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/professores${professorAtualizado.id}`,
                {
                    n1: professorAtualizado.n1,
                    nome: professorAtualizado.nome,
                    email: professorAtualizado.email,
                    tel: professorAtualizado.tel,
                    ocupacao: professorAtualizado.ocupacao
                },
                {
                    headers: {
                        Authorization: `Bearer: ${token}`
                    }
                }
            )
            console.log("Dados Atualizados com Sucesso: ", response.data)
            setDados(dados.map((professor)=> professor.id === professorAtualizado.id ? professorAtualizado : professor))
            setModalOpen(false)
        }
        catch (error) {
            console.error(error)
        }

    }

    return (
        <div >
            <Header />
            <div className="container_home">
                <div className="lista">
                    <table>
                        <thead>
                            <tr className="titles">
                                <th>Ações</th>
                                <th>ID</th>
                                <th>N1</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Ocupação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((professor) => (
                                <tr key={professor.id} className="campos">
                                    <td className="icons">
                                        <div className="col1">
                                            <FaEdit className="edit"  />
                                        </div>
                                        <div className="col2">
                                            <FaTrash className="delete" onClick={() => apagar(professor.id)} />
                                        </div>

                                    </td>
                                    <div className="col3"><td>{professor.id}</td></div>
                                    <div className="col4"><td>{professor.n1}</td></div>
                                    <div className="col5"><td>{professor.nome}</td></div>
                                    <div className="col6"><td>{professor.email}</td></div>
                                    <div className="col7"><td>{professor.tel}</td></div>
                                    <div className="col8"><td>{professor.ocupacao}</td></div>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="footer_table">
                    <div className="btn1">
                        <FaPlus className="adicionar" onClick={() => { setModalOpen(true), setProfessorSelecionado(null) }} />
                    </div>
                    <div className="id">
                        <input placeholder="id" />
                    </div>
                    <div className="nome">
                        <input placeholder="nome do professor" />
                    </div>
                    <div className="btn2">
                        <FaSearch className="procurar" />
                    </div>
                </div>
                <ModalProfessores
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    professorSelecionado={professorSelecionado}
                    setProfessorSelecionado={setProfessorSelecionado}
                    criar={criar}
                    atualizar={atualizar}
                />

            </div>
            <Footer />
        </div>
    )
}