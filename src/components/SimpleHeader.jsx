
import { DollarCircleOutlined, FireFilled, InfoCircleOutlined, MenuOutlined, MoonFilled, ShopOutlined, SunFilled } from "@ant-design/icons";
import { Col, Flex, Image, Layout, Menu, Row, Segmented } from "antd"
import Search from "antd/es/input/Search";
import { useState } from "react";

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
            href: '/about'
        },]

    return (
        <Header style={{ height: 'auto', padding: 0, marginBottom: '2rem', background: themeMode === 'light' ? 'transparent' : 'black'}}>
            <Row>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 4 }} xl={{ span: 4 }} xxl={{ span: 4 }}>
                    <Flex align="center" justify="center">
                        <a href="/duda/">
                            <Image src='./assets/images/logos/duda-dark-logo.svg' width='6rem' preview={false} alt="..." />
                        </a>
                    </Flex>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 10 }} xxl={{ span: 10 }}>
                    <Flex vertical align="center" justify="center" style={{ height: '100%' }}>
                        <Search placeholder='Buscar...' enterButton />
                    </Flex>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 10 }} xl={{ span: 10 }} xxl={{ span: 10 }}>
                    <Flex align="center" justify="space-between">
                        <Menu theme={themeMode} style={{ background: 'inherit', border: 'none' }} onClick={onClick} expandIcon={<FireFilled />} mode='horizontal' selectedKeys={[current]} items={items} />
                    </Flex>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                    <Flex style={{height: '100%', margin: '0rem 0 1rem 0'}} justify='center' align='center'>
                        <Segmented options={[
                            { icon: <SunFilled />, value: 'light' },
                            { label: <MoonFilled />, value: 'dark' }
                        ]} onChange={themeChangeHandler} value={themeMode} />
                    </Flex>
                </Col>
            </Row>
        </Header>
    )
}