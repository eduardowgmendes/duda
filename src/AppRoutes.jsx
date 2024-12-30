import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import StoresPage from "./pages/StoresPage";

const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop/:offerId" element={<Shop />} />
                <Route path="/daily-offers/:offerId" element={<Shop />} />
                <Route path="/stores" element={<StoresPage />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound title='Oops! Você está perdido?' description='Parece que a página que você está procurando não existe mais ou foi movida. Mas não se preocupe! Navegue pelo menu acima ou volte para a página inicial para continuar explorando nosso site.'/>} />
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes
