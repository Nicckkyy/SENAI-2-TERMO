import React, { useEffect, useState } from "react";
import axios from 'axios'
import './styles.css'

const ModalTurma = ({
    isOpen,
    onClose,
    turmaSelecionada,
    setSeta,
    seta
}) => {
    if (!isOpen) return null

    const [id, setId] = useState(turmaSelecionada?.id ?? '')
    const [codigo, setCodigo] = useState(turmaSelecionada?.codigo??'')
    const [turma, setTurma] = useState(turmaSelecionada?.turma??'')


    const handleSubmit = (e) => {
        e.preventDefault()
        const novaTurma = { codigo, turma}
        if (turmaSelecionadaSelecionado) {
            atualizar({ ...turmaSelecionada, ...novaTurma })
        } else {
            console.log("Teste nova turma: ", novaTurma)
            criar(novaTurma)
        }
    }

    const newTeacher = async () => {
        await axios.post('http://127.0.0.1:8000/api/tumas',
            {
              codigo: codigo,
              turma: turma
            }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        )
        console.log("Turma criada com sucesso!")
        setSeta(!seta)
        onClose(true)
    }

    const editTeacher = async () => {
        await axios.put(`http://127.0.0.1:8000/api/turma/${turmaSelecionada.id}`,
            {
              codigo: codigo,
              turma: turma
            }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        )
        console.log("Turma criada com sucesso!")
        setSeta(!seta)
        onClose(true)
    }

    return (
        <div className="modal-modal">
            <div className="container-modal">
                <div className="head-modal">
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <h2>{turmaSelecionada ? "Editar" : "Cadastrar"}</h2>
                <div className="body-modal">
                    <form onSubmit={handleSubmit}>
                        <div className="caixa1">
                            <input
                                className="codigo-modal"
                                value={codigo}
                                placeholder="codigo"
                                onChange={(e) => setNi(e.target.value)}
                            />
                            <input
                                className="turma-modal"
                                value={turma}
                                placeholder="turma"
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="caixa2">

                        </div>

                    </form>
                </div>
                <div className="footer-modal">
                    <button
                        type="submit"
                        className="button-save"
                        onClick={turmaSelecionada ? editTurma: newTurma}
                    >
                        {turmaSelecionada? "Atualizar" : "Salvar"}
                    </button>
                </div>
            </div>
        </div>
    )
}


export default ModalTurma
