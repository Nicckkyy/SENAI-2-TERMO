import { Routes, Route } from "react-router-dom";
import { Inicial } from '../pages/inicial/inicial';
import { List } from "../components/list/list";
import { Perfil } from '../pages/perfil/perfil';
import { Serie } from "../pages/series/series";

export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Inicial/>}>
                <Route index element={<List/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/serie" element={<Serie/>}/>
            </Route>
        </Routes>
    )
}