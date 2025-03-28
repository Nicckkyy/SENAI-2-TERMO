import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa'
import Header from "../../components/header";
import Footer from "../../components/footer";
import ModalTurmas from "../../components/modals/modalTurma";
import axios from "axios";
import "./styles.css"

export default function Turma() {
    const [dados, setDados] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [turmaSelecionada, setTurmaSelecionada] = useState(null)
    const [seta, setSeta] = useState(false)
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) return;
        
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/turmas/',
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
                await axios.delete(`http://127.0.0.1:8000/api/turma/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                setDados(dados.filter((turma) => { turma.id !== id }))
                setSeta(!seta)
            } catch (error) {
                console.error(error)
            }
        }
    }

    const atualizar = async (turma)=>{
       setTurmaSelecionada(turma)
       setModalOpen(true)

    }

    return (
        <div >
            <Header />
            <div className="container_turmas">
                <div className="lista">
                    <table>
                        <thead>
                            <tr className="icons">
                                <div className="col1"></div>
                                <div className="col2"></div>
                                <div className="col3"><th>ID</th></div>
                                <div className="col4"><th>CÓDIGO</th></div>
                                <div className="col5"><th>TURMA</th></div>

                            </tr>
                        </thead>
                        <tbody> 
                            {dados.map((turma) => (
                                <tr key={turma.id} className="campos">
                                    <td className="icons">
                                        <div className="col1">
                                            <FaEdit className="edit" onClick={()=> atualizar(turma)}/>
                                        </div>
                                        <div className="col2">
                                            <FaTrash className="delete" onClick={() => apagar(turma.id)} />
                                        </div>

                                    </td>
                                    <div className="col3"><td>{turma.id}</td></div>
                                    <div className="col4"><td>{turma.codigo}</td></div>
                                    <div className="col5"><td>{turma.turma}</td></div>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="footer_table">
                    <div className="btn1">
                        <FaPlus className="adicionar" onClick={()=>{setModalOpen(true), setTurmaSelecionada(null)}}/>
                    </div>
                    <div className="id">
                        <input placeholder="id" />
                    </div>
                    <div className="nome">
                        <input placeholder="nome da turma" />
                    </div>
                    <div className="btn2">
                        <FaSearch className="procurar" />
                    </div>
                </div>
                <ModalTurmas
                    isOpen={modalOpen}
                    onClose={()=>setModalOpen(false)}
                    turmaSelecionada={turmaSelecionada}
                    setSeta = {setSeta}
                    seta = {seta}
                />
            </div>
            <Footer />
        </div>
    )
}
