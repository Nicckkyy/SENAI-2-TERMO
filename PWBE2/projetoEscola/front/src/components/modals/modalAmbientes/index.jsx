import React, { useEffect, useState } from "react";
import axios from 'axios'
import './styles.css'

const ModalAmbientes = ({
    isOpen,
    onClose,
    ambienteSelecionado,
    setSeta,
    seta
}) => {
    if (!isOpen) return null

    const [id, setId] = useState(ambienteSelecionado?.id ?? '')
    const [codigo, setCodigo] = useState(ambienteSelecionado?.codigo ?? '')
    const [sala, setSala] = useState(ambienteSelecionado?.sala ?? '')
    const [capacidade, setCapacidade] = useState(ambienteSelecionado?.capacidade ?? '')
    const [responsavel, setResponsavel] = useState(ambienteSelecionado?.responsavel ?? '')
    const [turno, setTurno] = useState(ambienteSelecionado?.turno ?? '')
    const token = localStorage.getItem('token')

    const PERIODO = [
        { value: "M", label: "Manhã" },
        { value: "T", label: "Tarde" },
        { value: "N", label: "Noite" },
        { value: "S", label: "Sabado" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault()
        const novoAmbiente = { codigo, sala, capacidade, responsavel, turno }
        if (ambienteSelecionado) {
            atualizar({ ...ambienteSelecionado, ...novoAmbiente })
        } else {
            console.log("Teste novo professor: ", novoAmbiente)
            criar(novoAmbiente)
        }
    }

    const newsala = async () => {
        console.log("Chegou")

        await axios.post('http://127.0.0.1:8000/api/ambientes/',
            {
                codigo: codigo,
                sala: sala,
                capacidade: capacidade,
                responsavel: responsavel,
                turno: turno
            }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        )
        console.log("Ambiente inserido com sucesso!")
        setSeta(!seta)
        onClose(true)

    }

    const editsala = async () => {
        console.log("Chegou")

        await axios.put(`http://127.0.0.1:8000/api/ambiente/${ambienteSelecionado.id}`,
            {
                codigo: codigo,
                sala: sala,
                capacidade: capacidade,
                responsavel: responsavel,
                turno: turno
            }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        )
        console.log("Ambiente inserido com sucesso!")
        setSeta(!seta)
        onClose(true)

    }

    return (
        <div className="modal-modal">
            <div className="container-modal">
                <div className="head-modal">
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <h2>{ambienteSelecionado ? "Editar" : "Cadastrar"}</h2>
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
                                className="sala-modal"
                                value={sala}
                                placeholder="sala"
                                onChange={(e) => setSala(e.target.value)}
                            />
                            <input
                                className="capacidade-modal"
                                value={capacidade}
                                placeholder="turno"
                                onChange={(e) => setCapacidade(e.target.value)}
                            />
                            <input
                                className="responsavel-modal"
                                value={responsavel}
                                placeholder="responsavel"
                                onChange={(e) => setResponsavel(e.target.value)}
                            />
                            <select value={turno} onChange={(e) => setTurno(e.target.value)}>
                                <option value="" disabled>Selecione o turno</option>
                                {PERIODO.map((opcao) => (
                                    <option key={opcao.value} value={opcao.value}>{opcao.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="caixa2">

                        </div>

                    </form>
                </div>
                <div className="footer-modal">
                    <button type="submit" className="button-save" onClick={ambienteSelecionado ? editsala : newsala}>{ambienteSelecionado ? "Atualizar" : "Salvar"}</button>
                </div>
            </div>
        </div>
    )
}


export default ModalAmbientes
