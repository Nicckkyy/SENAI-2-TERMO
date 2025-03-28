import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa'
import Header from "../../components/header";
import Footer from "../../components/footer";
import ModalCursos from "../../components/modals/modalCursos";
import axios from "axios";
import "./styles.css"

export default function Curso() {
    const [dados, setDados] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [cursoSelecionado, setCursoSelecionado] = useState(null)
    const [seta, setSeta] = useState(false)
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) return;
        
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/cursos/',
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
                await axios.delete(`http://127.0.0.1:8000/api/curso/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                setDados(dados.filter((curso) => { curso.id !== id }))
                setSeta(!seta)
            } catch (error) {
                console.error(error)
            }
        }
    }

    const atualizar = async (curso)=>{
       setCursoSelecionado(curso)
       setModalOpen(true)

    }

    return (
        <div >
            <Header />
            <div className="container_cursos">
                <div className="lista">
                    <table>
                        <thead>
                            <tr className="icons">
                                <div className="col1"></div>
                                <div className="col2"></div>
                                <div className="col3"><th>ID</th></div>
                                <div className="col4"><th>CÓDIGO</th></div>
                                <div className="col5"><th>CURSO</th></div>
                                <div className="col6"><th>TIPO</th></div>
                                <div className="col7"><th>HORA AULA</th></div>
                                <div className="col8"><th>SIGLA</th></div>
                                

                            </tr>
                        </thead>
                        <tbody> 
                            {dados.map((curso) => (
                                <tr key={curso.id} className="campos">
                                    <td className="icons">
                                        <div className="col1">
                                            <FaEdit className="edit" onClick={()=> atualizar(curso)}/>
                                        </div>
                                        <div className="col2">
                                            <FaTrash className="delete" onClick={() => apagar(curso.id)} />
                                        </div>
                                    </td>
                                    <div className="col3"><td>{curso.id}</td></div>
                                    <div className="col4"><td>{curso.codigo}</td></div>
                                    <div className="col5"><td>{curso.curso}</td></div>
                                    <div className="col6"><td>{curso.tipo}</td></div>
                                    <div className="col7"><td>{curso.hora_aula}</td></div>
                                    <div className="col8"><td>{curso.sigla}</td></div>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="footer_table">
                    <div className="btn1">
                        <FaPlus className="adicionar" onClick={()=>{setModalOpen(true), setCursoSelecionado(null)}}/>
                    </div>
                    <div className="id">
                        <input placeholder="id" />
                    </div>
                    <div className="nome">
                        <input placeholder="nome dO curso" />
                    </div>
                    <div className="btn2">
                        <FaSearch className="procurar" />
                    </div>
                </div>
                <ModalCursos
                    isOpen={modalOpen}
                    onClose={()=>setModalOpen(false)}
                    cursoSelecionado={cursoSelecionado}
                    setSeta = {setSeta}
                    seta = {seta}
                />
            </div>
            <Footer />
        </div>
    )
}
