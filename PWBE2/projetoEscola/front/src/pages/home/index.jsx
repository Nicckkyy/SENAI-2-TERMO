import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import './styles.css'
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
    return (
        <div className="algo">
            <Header />
            <div className="container_home">

                <h1>Home</h1>
                <button onClick={()=>navigate('/professor')}>Professor</button>
                <button onClick={()=>navigate('/disciplinas')}>Disciplinas</button>
                <button onClick={()=>navigate('/turmas')}>Turmas</button>
                <button onClick={()=>navigate('/cursos')}>Cursos</button>
                <button onClick={()=>navigate('/ambientes')}>Ambientes</button>
                
            </div>
            <Footer />
        </div>

    )
}