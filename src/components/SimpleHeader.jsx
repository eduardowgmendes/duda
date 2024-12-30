
import { CaretRightFilled, DollarCircleOutlined, FireFilled, InfoCircleOutlined, MenuOutlined, MoonFilled, ShopOutlined, SunFilled } from "@ant-design/icons";
import { Col, Flex, Image, Layout, Menu, Row, Segmented } from "antd"
import Search from "antd/es/input/Search";
import { useState } from "react";
import Container from "./layout/Container";

const { Header } = Layout;

export default function SimpleHeader({ themeChangeHandler, themeMode }) {

    const [current, setCurrent] = useState('')

    const onClick = (e) => {
        setCurrent(e.key)
        window.location.href = e.key
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
            icon: <DollarCircleOutlined />
        }, {
            label: 'Lojas',
            key: 'stores',
            icon: <ShopOutlined />
        },
        {
            label: 'Sobre',
            key: 'about',
            icon: <InfoCircleOutlined />
        },]

    return (
        <Header style={{ height: 'auto', padding: 0, marginBottom: '2rem', background: 'transparent' }}>
            <Container>
                <Row>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 4 }} xl={{ span: 4 }} xxl={{ span: 2 }}>
                        <Flex align="center" justify="space-between">
                            <a href="/duda/" style={{margin: '0 .25rem 0 .25rem'}}>
                                {themeMode === 'light' ? <Image src='./assets/images/logos/duda-light-logo.svg' width='6rem' preview={false} alt="..." /> : <Image src='./assets/images/logos/duda-dark-logo.svg' width='6rem' preview={false} alt="..." />}
                            </a>

                            <Segmented style={{margin: '0 .25rem 0 .25rem'}} 
                            options={[
                                { icon: <SunFilled style={{color: themeMode === 'light' ? 'yellow' : 'lemonchiffon'}}/>, value: 'light' },
                                { label: <MoonFilled style={{color: themeMode === 'light' ? 'midnightblue' : 'gold'}}/>, value: 'dark' }
                            ]} onChange={themeChangeHandler} value={themeMode} />
                        </Flex>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 16, offset: 4 }} xl={{ span: 16, offset: 4 }} xxl={{ span: 20, offset: 2 }}>
                        <Flex vertical align="center" justify="center" style={{ height: '100%' }}>
                            <Search placeholder='Buscar...' enterButton />
                        </Flex>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                        <Flex align="center" justify="center">
                            <Menu theme={themeMode} 
                                style={{ background: 'inherit', border: 'none' }}
                                onClick={onClick}
                                mode='horizontal'
                                selectedKeys={[current]}
                                items={items} />
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </Header>
    )
}