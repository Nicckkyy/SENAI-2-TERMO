import React, { useEffect, useState } from "react";
import axios from 'axios'
import './styles.css'

const ModalCursos = ({
    isOpen,
    onClose,
    cursoSelecionado,
    setSeta,
    seta
}) => {
    if (!isOpen) return null

    const [id, setId] = useState(cursoSelecionado?.id ?? '')
    const [codigo, setCodigo] = useState(cursoSelecionado?.codigo ?? '')
    const [curso, setCurso] = useState(cursoSelecionado?.curso ?? '')
    const [tipo, setTipo] = useState(cursoSelecionado?.tipo ?? '')
    const [hora_aula, setHoraAula] = useState(cursoSelecionado?.hora_aula ?? '')
    const [sigla, setSigla] = useState(cursoSelecionado?.sigla ?? '')
    const token = localStorage.getItem('token')

    const TIPOS_DE_CURSO = [
        { value: "CAI", label: "Curso de Aprendizagem Técnica" },
        { value: "CT", label: "Curso Técnico" },
        { value: "FIC", label: "Formação Inicial e Continuada" },
        { value: "CS", label: "Curso Superior" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault()
        const novoCurso = { codigo, curso, tipo, hora_aula, sigla }
        if (cursoSelecionado) {
            atualizar({ ...cursoSelecionado, ...novoCurso })
        } else {
            console.log("Teste novo professor: ", novoCurso)
            criar(novoCurso)
        }
    }

    const newCurso = async () => {
        console.log("Chegou")

        await axios.post('http://127.0.0.1:8000/api/cursos/',
            {
                codigo: codigo,
                curso: curso,
                tipo: tipo,
                hora_aula: hora_aula,
                sigla: sigla
            }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        )
        console.log("Curso inserido com sucesso!")
        setSeta(!seta)
        onClose(true)

    }

    const editCurso = async () => {
        console.log("Chegou")

        await axios.put(`http://127.0.0.1:8000/api/curso/${cursoSelecionado.id}`,
            {
                codigo: codigo,
                curso: curso,
                tipo: tipo,
                hora_aula: hora_aula,
                sigla: sigla
            }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        )
        console.log("Curso inserido com sucesso!")
        setSeta(!seta)
        onClose(true)

    }

    return (
        <div className="modal-modal">
            <div className="container-modal">
                <div className="head-modal">
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <h2>{cursoSelecionado ? "Editar" : "Cadastrar"}</h2>
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
                                className="curso-modal"
                                value={curso}
                                placeholder="curso"
                                onChange={(e) => setCurso(e.target.value)}
                            />
                            <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                                <option value="" disabled>Selecione o tipo de curso</option>
                                {TIPOS_DE_CURSO.map((opcao) => (
                                    <option key={opcao.value} value={opcao.value}>{opcao.label}</option>
                                ))}
                            </select>
                            <input
                                type="time"
                                className="hora_aula-modal"
                                value={hora_aula}
                                placeholder="hora_aula"
                                onChange={(e) => setHoraAula(e.target.value)}
                            />
                            <input
                                className="sigla-modal"
                                value={sigla}
                                placeholder="sigla"
                                onChange={(e) => setSigla(e.target.value)}
                            />
                        </div>
                        <div className="caixa2">

                        </div>

                    </form>
                </div>
                <div className="footer-modal">
                    <button type="submit" className="button-save" onClick={cursoSelecionado ? editCurso : newCurso}>{cursoSelecionado ? "Atualizar" : "Salvar"}</button>
                </div>
            </div>
        </div>
    )
}


export default ModalCursos
