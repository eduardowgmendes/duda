
import { DollarCircleOutlined, FireFilled, InfoCircleOutlined, MenuOutlined, MoonFilled, ShopOutlined, SunFilled } from "@ant-design/icons";
import { Col, Flex, Image, Layout, Menu, Row, Segmented } from "antd"
import Search from "antd/es/input/Search";
import { useState } from "react";
import Container from "./layout/Container";

const { Header } = Layout;

export default function SimpleHeader({ themeChangeHandler, themeMode }) {

    const [current, setCurrent] = useState('')

    const onClick = (e) => {
        setCurrent(e.key)
    }

    const departments = [{
        key: 'fashion-and-beauty',
        label: 'Moda & Beleza'
    }, {
        key: 'eletro-and-home',
        label: 'Eletro & Casa'
    }, {
        key: 'supermarket',
        label: 'Mercado'
    }, {
        key: 'perfumery',
        label: 'Perfumaria'
    }, {
        key: 'supplements',
        label: 'Suplementos'
    }, {
        key: 'childrens',
        label: 'Infantil'
    }]

    const items = [
        {
            label: 'Departamentos',
            key: 'departments',
            icon: <MenuOutlined />,
            children: departments
        },
        {
            label: 'Ofertas do Dia',
            key: 'daily-offers',
            icon: <DollarCircleOutlined />,
            href: '/daily-offers'
        }, {
            label: 'Lojas',
            key: 'stores',
            icon: <ShopOutlined />,
            href: '/stores'
        },
        {
            label: 'Sobre',
            key: 'about',
            icon: <InfoCircleOutlined />,
            href: '.duda/about'
        },]

    return (
        <Header style={{ height: 'auto', padding: 0, background: 'transparent', margin: '2rem 0 2rem 0' }}>
            <Container>
                <Row>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 2 }} xl={{ span: 2 }} xxl={{ span: 2 }}>
                        <Flex align="center" justify="center">
                            <a href="/duda/">
                                <Image src='./assets/images/logos/duda-dark-logo.svg' width='6rem' preview={false} alt="..." />
                            </a>
                        </Flex>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 10 }} xl={{ span: 10 }} xxl={{ span: 10 }}>
                        <Flex vertical align="center" justify="center" style={{ height: '100%' }}>
                            <Search placeholder='Buscar...' enterButton />
                        </Flex>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 10 }} xl={{ span: 10 }} xxl={{ span: 10 }}>
                        <Flex align="center" justify="space-between">
                            <Menu theme="dark" style={{ background: 'inherit', border: 'none' }} onClick={onClick} expandIcon={<FireFilled />} mode='horizontal' selectedKeys={[current]} items={items} />
                            <Segmented options={[
                                { label: 'Auto', value: 'auto' },
                                { icon: <SunFilled />, value: 'light' },
                                { label: <MoonFilled />, value: 'dark' }
                            ]} onChange={themeChangeHandler} value={themeMode} />
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </Header>
    )
}