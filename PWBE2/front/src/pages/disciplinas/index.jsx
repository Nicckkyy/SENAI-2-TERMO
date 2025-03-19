import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa'
import Header from "../../components/header";
import Footer from "../../components/footer";
import ModalDisciplinas from "../../components/modalDisciplinas";
import axios from "axios";
import './styles.css'


export default function Disciplina() {
    const [dados, setDados] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [disciplinaSelecionada, setDisciplinaSelecionada] = useState(null)
    const [seta, setSeta] = useState(false)
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) return;
        
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/disciplinas/',
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
    }, [seta])

    const apagar = async (id) => {
        if (window.confirm("Tem certeza? ")) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/disciplina/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                setDados(dados.filter((disciplina) => { disciplina.id !== id }))
                setSeta(!seta)
            } catch (error) {
                console.error(error)
            }
        }
    }

    const criar = async(novaDiscplina)=>{
        console.log("Novo Professor: ", novaDiscplina)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/disciplinas/',
                {
                    disciplina: novaDiscplina.disciplina,
                    codigo: codigo.nome,
                    carga_horaria: carga_horaria.email,
                    tel: novaDiscplina.tel,
                    ocupacao: novaDiscplina.ocupacao
                },{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log("Dados inseridos com sucesso!", response.data)
            setDados([...dados, novaDiscplina])
            setModalOpen(false)
        } catch (error) {
            console.error(error)
        }

    }

    const atualizar = async (disciplina)=>{
       setDisciplinaSelecionada(disciplina)
       setModalOpen(true)

    }

    return (
        <div >
            <Header />
            <div className="container_disciplina">
                <div className="lista">
                    <table>
                        <thead>
                            <tr className="icons">
                                <div className="col1"></div>
                                <div className="col2"></div>
                                <div className="col3"><th>ID</th></div>
                                <div className="col4"><th>DISCPLINA</th></div>
                                <div className="col5"><th>CÓDIGO</th></div>
                                <div className="col6"><th>CARGA HORARIA</th></div>

                            </tr>
                        </thead>
                        <tbody> 
                            {dados.map((disciplina) => (
                                <tr key={disciplina.id} className="campos">
                                    <td className="icons">
                                        <div className="col1">
                                            <FaEdit className="edit" onClick={()=> atualizar(disciplina)}/>
                                        </div>
                                        <div className="col2">
                                            <FaTrash className="delete" onClick={() => apagar(disciplina.id)} />
                                        </div>

                                    </td>
                                    <div className="col3"><td>{disciplina.id}</td></div>
                                    <div className="col4"><td>{disciplina.disciplina}</td></div>
                                    <div className="col5"><td>{disciplina.codigo}</td></div>
                                    <div className="col6"><td>{disciplina.carga_horaria}</td></div>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="footer_table">
                    <div className="btn1">
                        <FaPlus className="adicionar" onClick={()=>{setModalOpen(true), setDisciplinaSelecionada(null)}}/>
                    </div>
                    <div className="id">
                        <input placeholder="id" />
                    </div>
                    <div className="nome">
                        <input placeholder="nome do disciplina" />
                    </div>
                    <div className="btn2">
                        <FaSearch className="procurar" />
                    </div>
                </div>
                <ModalDisciplinas
                    isOpen={modalOpen}
                    onClose={()=>setModalOpen(false)}
                    disciplinaSelecionada={disciplinaSelecionada}
                    setSeta = {setSeta}
                    seta = {seta}
                />
            </div>
            <Footer />
        </div>
    )
}
