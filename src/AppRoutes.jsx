import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop/:offerId" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound title='Oops! Você está perdido?' description='Parece que a página que você está procurando não existe mais ou foi movida. Mas não se preocupe! Navegue pelo menu acima ou volte para a página inicial para continuar explorando nosso site.'/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
