import React, {useEffect, useState} from "react";
import axios from "axios";


const ModalDisciplinas = ({
    isOpen,
    onClose,
    disciplinaSelecionada,
    setSeta,
    seta
}) => {
    if (!isOpen) return null

    const [id, setId] = useState(disciplinaSelecionada?.id ?? '')
    const [disciplina, setDisciplina] = useState(disciplinaSelecionada?.disciplina ?? '')
    const [codigo, setCodigo] = useState(disciplinaSelecionada?.codigo ?? '')
    const [carga_horaria, setCarga_Horaria] = useState(disciplinaSelecionada?.carga_horaria ?? '')
    const token = localStorage.getItem('token')

    const handleSubmit = (e) => {
        e.preventDefault()
        const novaDisciplina = { disciplina, codigo, carga_horaria }
        if (disciplinaSelecionada) {
            atualizar({ ...disciplinaSelecionada, ...novaDisciplina })
        } else {
            console.log("Teste novo professor: ", novaDisciplina)
            criar(novaDisciplina)
        }
    }

    const newDisciplina = async () =>{
        console.log("disciplina",disciplina)
      
            await axios.post('http://127.0.0.1:8000/api/disciplinas/',
                {
                    disciplina: disciplina,
                    codigo: codigo,
                    carga_horaria: carga_horaria
                },{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log("Professor inserido com sucesso!")
            setSeta(!seta)
            onClose(true)
      
    }

    const editDisciplina = async () =>{
        console.log("Chegou")
      
            await axios.put(`http://127.0.0.1:8000/api/disciplina/${disciplinaSelecionada.id}`,
                {
                    disciplina: disciplina,
                    codigo: codigo,
                    carga_horaria: carga_horaria
                },{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log("Professor inserido com sucesso!")
            setSeta(!seta)
            onClose(true)
      
    }

    return (
        <div className="modal-modal">
            <div className="container-modal">
                <div className="head-modal">
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <h2>{disciplinaSelecionada ? "Editar" : "Cadastrar"}</h2>
                <div className="body-modal">
                    <form onSubmit={handleSubmit}>
                        <div className="caixa1">
                            <input
                                className="disciplina-modal"
                                value={disciplina}
                                placeholder="disciplina"
                                onChange={(e) => setDisciplina(e.target.value)}
                            />
                            <input
                                className="codigo-modal"
                                value={codigo}
                                placeholder="codigo"
                                onChange={(e) => setCodigo(e.target.value)}
                            />
                            <input
                                className="carga_horaria-modal"
                                value={carga_horaria}
                                placeholder="carga_horaria"
                                onChange={(e) => setCarga_Horaria(e.target.value)}
                            />
                        </div>
                        <div className="caixa2">
                            
                        </div>

                    </form>
                </div>
                <div className="footer-modal">
                    <button type="submit" className="button-save" onClick={disciplinaSelecionada ? editDisciplina : newDisciplina}>{disciplinaSelecionada ? "Atualizar" : "Salvar" }</button>
                </div>
            </div>
        </div>
    )
}

export default ModalDisciplinas