import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BaseLayout from "../pages/baseLayout";
import Portfolio from "../pages/portifolio";
import Contato from "../pages/contato";
import Loading from "../pages/loading";

function AppRoutes() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route element={<BaseLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/contato" element={<Contato/>}/>
                    <Route path="/loading" element={<Loading/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes