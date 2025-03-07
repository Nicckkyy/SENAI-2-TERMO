import React, { useState, useEffect } from "react";
import './styles.css'

const ModalProfessores = ({
    isOpen,
    onClose,
    professorSelecionado,
    criar,
    atualizar,
}) => {
    if (!isOpen) return null

    const [id, setId] = useState(professorSelecionado?.id || '')
    const [n1, setN1] = useState(professorSelecionado?.n1 || '')
    const [nome, setNome] = useState(professorSelecionado?.nome || '')
    const [email, setEmail] = useState(professorSelecionado?.email || '')
    const [tel, setTel] = useState(professorSelecionado?.tel || '')
    const [ocupacao, setOcupacao] = useState(professorSelecionado?.ocupacao || '')

    useEffect(() => {
        if (professorSelecionado) {
            setId(professorSelecionado.id || '')
            setN1(professorSelecionado.n1 || '')
            setNome(professorSelecionado.nome || '')
            setEmail(professorSelecionado.email || '')
            setTel(professorSelecionado.tel || '')
            setOcupacao(professorSelecionado.ocupacao || '')
        } else {
            setId('')
            setN1('')
            setNome('')
            setEmail('')
            setTel('')
            setOcupacao('')
        }

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const novoProfessor = {
            n1,
            nome,
            email,
            tel,
            ocupacao
        }

        if (professorSelecionado) {
            atualizar({ ...professorSelecionado })
        } else {
            criar(novoProfessor)
        }
    }


    return (
        <>
            <div className="modal_modal">

                <div className="container_modal">
                    <button className="close_button" onClick={onClose}>X</button>
                    <h2>{professorSelecionado ? "Editar" : "Cadastrar"}</h2>
                    <div className="body_modal">
                        <form onSubmit={handleSubmit}>
                            <input
                                className="ni_modal"
                                value={n1}
                                placeholder="n1"
                                onChange={(e) => setN1(e.target.value)}
                                type="text"
                            />
                            <input
                                className="nome_modal"
                                value={nome}
                                placeholder="Nome"
                                onChange={(e) => setNome(e.target.value)}
                                type="text"
                            />
                            <input
                                className="email_modal"
                                value={email}
                                placeholder="email"
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                            />
                            <input
                                className="tel_modal"
                                value={tel}
                                placeholder="tel"
                                onChange={(e) => setTel(e.target.value)}
                                type="text"
                            />
                            <input
                                className="ocupacao_modal"
                                value={ocupacao}
                                placeholder="ocupacao"
                                onChange={(e) => setOcupacao(e.target.value)}
                                type="text"
                            />
                            <button type="submit">Salvar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}



export default ModalProfessores;