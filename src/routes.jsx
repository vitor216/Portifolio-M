import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sobre from "./Pages/Sobre";
import Projetos from "./Pages/Projetos";
import Contato from "./Pages/Contato";
import Home from "./Pages/Home";
import Page404 from "./Pages/Page404";
import PageaBase from "./Pages/PageaBase";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageaBase />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/sobre" element={<Sobre />}></Route>
                    <Route path="/projetos" element={<Projetos />}></Route>
                    <Route path="/contatos" element={<Contato />}></Route>
                    <Route path="*" element={<Page404 />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
