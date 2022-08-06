import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BaseLayout from "../pages/baseLayout";
import Portfolio from "../pages/portifolio";
import Contato from "../pages/contato";
import Loading from "../pages/loading";
import Sobre from "../pages/sobre";
import MinhasSkills from "../pages/minhasSkills";

function AppRoutes() {
    return(
            <Routes>
                <Route element={<BaseLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sobre" element={<Sobre/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/minhas-skills" element={<MinhasSkills/>}/>
                    <Route path="/contato" element={<Contato/>}/>
                    <Route path="/loading" element={<Loading/>}/>
                </Route>
            </Routes>
    )
}

export default AppRoutes