import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Shop from "./pages/Shop";

const AppRoutes = () => {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/duda/shop" element={<Shop />} />
                <Route path="/duda/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
