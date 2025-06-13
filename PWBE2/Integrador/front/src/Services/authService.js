import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

export const login = async ({ username, password }) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/login/`,
      { username, password },
      {
        headers: { "Content-Type": "application/json" },
        timeout: 5000,
      }
    );
    const { access, refresh } = response.data;
    return { access, refresh };
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.detail || "Falha ao fazer login.");
    } else if (error.code === "ECONNABORTED") {
      throw new Error("Tempo de conexão esgotado. Tente novamente.");
    } else {
      throw new Error("Falha ao fazer login. Verifique as credenciais.");
    }
  }
};

export const register = async ({ username, password, email }) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/signup/`,
      { username, password, email },
      {
        headers: { "Content-Type": "application/json" },
        timeout: 5000,
      }
    );
    return response.data; // normalmente pode retornar dados do usuário criado
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.detail || "Falha ao fazer cadastro.");
    } else if (error.code === "ECONNABORTED") {
      throw new Error("Tempo de conexão esgotado. Tente novamente.");
    } else {
      throw new Error("Falha ao fazer cadastro.");
    }
  }
};
