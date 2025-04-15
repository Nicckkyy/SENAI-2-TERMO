import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Rotas } from "./routes/rotas";


function App() {
  return (
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>
  );
}

export default App
