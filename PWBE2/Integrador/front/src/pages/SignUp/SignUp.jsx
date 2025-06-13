import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../SignUp/SignUp.module.css"; // certifique-se de ter este CSS
import { register } from "../../Services/authService"; // função para cadastro no backend

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!agreeTerms) {
      setError("Você deve concordar com os termos e a política de privacidade.");
      return;
    }

    try {
      await register({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
      });

      navigate("/login"); // redireciona após cadastro com sucesso
    } catch (err) {
      setError("Erro ao criar conta. Verifique os dados e tente novamente.");
    }
  };

return (
    <main className={styles.signupPage}>
      <section className={styles.signupLeft}>
        <h1>Crie sua conta e comece já!</h1>
      </section>

      <section className={styles.signupRight}>
        <form className={styles.signupForm}>
          <h2>Cadastro</h2>

          <label htmlFor="username">Usuário</label>
          <input id="username" type="text" placeholder="Digite seu usuário" />

          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" placeholder="Digite seu e-mail" />

          <label htmlFor="password">Senha</label>
          <input id="password" type="password" placeholder="Crie uma senha" />

          <label htmlFor="confirmPassword">Confirmar senha</label>
          <input id="confirmPassword" type="password" placeholder="Confirme a senha" />

          <button className={styles.signupButton} type="submit">
            Cadastrar
          </button>

          <footer className={styles.signupFooter}>
            <p>
              Já tem uma conta? <a href="/login">Entrar</a>
            </p>
          </footer>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
