import React, { useEffect, useState } from "react"
import axios from "axios"
import './styles.css'

const ModalTurmas = ({
    isOpen,
    onClose,
    turmaSelecionada,
    setSeta,
    seta
}) => {
    if (!isOpen) return null

    const [id, setId] = useState(turmaSelecionada?.id ?? '')
    const [turma, setTurma] = useState(turmaSelecionada?.turma ?? '')
    const [codigo, setCodigo] = useState(turmaSelecionada?.codigo ?? '')
    const token = localStorage.getItem('token')

    const handleSubmit = (e) => {
        e.preventDefault()
        const novaTurma = { turma, codigo }
        if (turmaSelecionada) {
            atualizar({ ...turmaSelecionada, ...novaTurma })
        } else {
            console.log("Teste nova turma: ", novaTurma)
            criar(novaTurma)
        }
    }

    const newTurma = async () => {
        console.log("Chegou")

        await axios.post('http://127.0.0.1:8000/api/turmas/',
            {
                turma: turma,
                codigo: codigo,
            }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        )
        console.log("Turma inserida com sucesso!")
        setSeta(!seta)
        onClose(true)

    }

    const editTurma = async () => {
        console.log("Chegou")

        await axios.put(`http://127.0.0.1:8000/api/turma/${turmaSelecionada.id}`,
            {
                turma: turma,
                codigo: codigo
            }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        )
        console.log("Turma inserida com sucesso!")
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
                                onChange={(e) => setCodigo(e.target.value)}
                            />
                            <input
                                className="turma-modal"
                                value={turma}
                                placeholder="turma"
                                onChange={(e) => setTurma(e.target.value)}
                            />
                        </div>
                        <div className="caixa2">
                        </div>
                    </form>
                </div>
                <div className="footer-modal">
                    <button type="submit" className="button-save" onClick={turmaSelecionada ? editTurma : newTurma}>{turmaSelecionada ? "Atualizar" : "Salvar"}</button>
                </div>
            </div>
        </div>
    )
}

export default ModalTurmas