
import { DollarCircleOutlined, FireFilled, InfoCircleOutlined, MenuOutlined, ShopOutlined } from "@ant-design/icons";
import { Col, Flex, Image, Layout, Menu, Row } from "antd"
import Search from "antd/es/input/Search";
import { useState } from "react";
import Container from "./layout/Container";

const { Header } = Layout;

export default function SimpleHeader() {

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
        <Header style={{height: 'auto', zIndex: 9999}}>
            <Container>
                <Row>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 4 }} xl={{ span: 4 }} xxl={{ span: 2 }}>
                        <Flex align="center" justify="center">
                            <a href="/">
                                <Image src='../src/assets/logos/duda-dark-logo.svg' width='6rem' preview={false} alt="..."/>
                            </a>
                        </Flex>
                    </Col>
                    <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 10}} xl={{span: 10}} xxl={{span: 12}}>
                        <Flex vertical align="center" justify="center" style={{ height: '100%' }}>
                            <Search placeholder='Buscar...' enterButton style={{ margin: '0 20px 0 20px' }} />
                        </Flex>
                    </Col>
                    <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 10}} xl={{span: 10}} xxl={{span: 10}}>
                        <Menu onClick={onClick} expandIcon={<FireFilled />} theme='dark' mode='horizontal' selectedKeys={[current]} items={items} />
                    </Col>
                </Row>
            </Container>
        </Header>
    )
}