import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            
            const response = await axios.post('http://127.0.0.1:8000/api/signup/',
            {
                username,
                email,
                password,
            }, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
                
            )

            console.log("Usuário cadastrado com sucesso:", response.data);
            alert("Cadastro realizado!");
        } catch (error) {
            console.error("Erro ao cadastrar:", error.response?.data || error.message);
            alert("Erro no cadastro!");
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default Register;