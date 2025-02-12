import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa'
import './styles.css'
import Header from "../../components/header";
import Footer from "../../components/footer";


export default function Home() {
    const [dados, setDados] = useState([])
    const token = localStorage.getItem('token')
    console.log("Token Home", token)

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
    }, [dados])

    const apagar = async (id) => {
        if (window.confirm("Tem certeza? ")) {
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

    return (
        <div >
            <Header />
            <div className="container_home">
                <div className="lista">
                    <table>
                        <thead>
                            <tr className="icons">
                                <div className="col1"></div>
                                <div className="col2"></div>
                                <div className="col3"><th>ID</th></div>
                                <div className="col4"><th>NI</th></div>
                                <div className="col5"><th>ID</th></div>
                                <div className="col6"><th>NOME</th></div>
                                <div className="col7"><th>TELEFONE</th></div>
                                <div className="col8"><th>OC</th></div>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((professor) => (
                                <tr key={professor.id} className="campos">
                                    <td className="icons">
                                        <div className="col1">
                                            <FaEdit className="edit" />
                                        </div>
                                        <div className="col2">
                                            <FaTrash className="delete" onClick={() => apagar(professor.id)} />
                                        </div>

                                    </td>
                                    <div className="col3"><td>{professor.id}</td></div>
                                    <div className="col4"><td>{professor.ni}</td></div>
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
                        <FaPlus className="adicionar" />
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
            </div>
            <Footer />
        </div>
    )
}
