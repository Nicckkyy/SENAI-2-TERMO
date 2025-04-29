import { Routes, Route } from "react-router-dom";
import { Inicial } from '../pages/inicial/inicial';
import { List } from "../components/list/list";
import { Perfil } from '../pages/perfil/perfil';
import { Serie } from "../pages/series/series";
import { Listseries } from "../components/list/listserie";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Inicial />}>
                <Route index element={<List />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/serie" element={<Serie />}>
                    <Route index element={<Listseries />} />
                </Route>
            </Route>
        </Routes>
    )
}