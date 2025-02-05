import React, {useState} from "react"
import './styles.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Login(){
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    // console.log("Usuário: ", user)
    // console.log("Senha: ", password)

    const logar = async ()=>{
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/token/',
                {
                    username: user,
                    password: password
                }
            )
            console.log("Token Login: ", response.data.access)
            localStorage.setItem('token', response.data.access)
            navigate('/home')
        } catch (error) {
            console.error(error)
        }
    }

  return(
    <div className="container_login">
      <h1>Login</h1>
      <input
        placeholder="User"
        className="caixa"
        value={user}
        onChange={(e)=>{setUser(e.target.value)}}
      />

      <input
        placeholder="Password"
        className="caixa"
        type="password"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
      />

      <button className="btn" onClick={logar}>
        Enter
      </button>

    </div>
  )
}