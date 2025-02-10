import { LoadingOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route, useSearchParams, Navigate } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const StoresPage = lazy(() => import("./pages/StoresPage"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

const ShopWrapper = () => {

    const [searchParams] = useSearchParams();

    const offerId = searchParams.get("id");

    if (!offerId) {
        return <Navigate to="/" replace />;
    }

    return <Shop offerId={offerId} />;
};

const AppRoutes = () => {
    return (
        <HashRouter>
            <Suspense fallback={
                <Flex vertical align="stretch" style={{ width: '100%', height: '100vh', background: 'transparent' }}>
                    <Flex vertical align="center" gap={'small'}>
                        <LoadingOutlined />
                        <Paragraph type="secondary">Carregando...</Paragraph>
                    </Flex>
                </Flex>
            }>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<ShopWrapper />} />
                    <Route path="/daily-offers" element={<ShopWrapper />} />
                    <Route path="/stores" element={<StoresPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound title="Oops! Você está perdido?" description="A página que você está procurando não existe mais ou foi movida." />} />
                </Routes>
            </Suspense>
        </HashRouter>
    );
};

export default AppRoutes;
