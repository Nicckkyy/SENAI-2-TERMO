import axios from 'axios';
import React, {useState, useEffect} from "react";
import {FaEdit, FaTrash, FaPlus, FaSearch} from 'react-icons/fa'
import './styles.css'

export default function Home(){
    const [dados, setDados] = useState([])
    const token = localStorage.getItem('token')
    console.log("Token Home", token)

    useEffect(()=> {

        if (!token) return;

        const fetchData =  async()=>{
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/professores',
                    {
                        headers: {
                            Authorizaton: 'Bearer' &{token}
                        }
                    }
                )
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    return (
        <body>
            <div className="container_home">

                <header>
                    <div className='container_header'>
                        <h1> Lista de professores </h1>
                    </div>
                </header>

            </div>  

            <main className='container_main'>
                {dados.map((professor)=>{
                    <div className="lista " key={professor.id}>
                        <FaEdit className='edit'/>
                        <FaTrash className='delete'/>
                        <span className='id'>{professor.id}</span>
                        <span className='ni'>{professor.id}</span>
                        <span className='nome'>{professor.id}</span>
                        <span className='email'>{professor.id}</span>
                        <span className='tel'>{professor.id}</span>
                        <span className='ocupacao'>{professor.id}</span>
                    </div>
                })}
            </main>

            <footer>
                <div className='container_footer'>
                    <h1> TESTE </h1>
                </div>                
            </footer> 

        </body>
    )    

}
