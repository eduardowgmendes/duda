import { Avatar, Button, Card, Col, Divider, Flex, Image, Input, Layout, Menu, Row, Space, Typography } from "antd";
import Container from "./layout/Container";
import { ApiTwoTone, ArrowRightOutlined, FacebookOutlined, InstagramOutlined, MessageOutlined, MessageTwoTone, SendOutlined, TikTokFilled, TwitterOutlined, WhatsAppOutlined } from "@ant-design/icons";
const { Footer } = Layout
const { Paragraph, Text, Title, Link } = Typography
export default function SimpleFooter() {

    const departments = [{
        name: 'Moda & Beleza',
        href: '/'
    }, {
        name: 'Eletro & Casa',
        href: '/'
    }, {
        name: 'Mercado',
        href: '/'
    }, {
        name: 'Perfumaria',
        href: '/'
    }, {
        name: 'Suplementos',
        href: '/'
    }, {
        name: 'Infantil',
        href: '/'
    },]

    return (
        <Footer style={{ background: 'whitesmoke' }}>

            <Container>
                <Row gutter={[32, 8]} >

                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }} >
                        <a href="/">
                            <Flex style={{ padding: '0 0 32px 0' }}>
                                <Image src='src/assets/logos/duda-light-logo.svg' preview={false} alt='...' />
                            </Flex>
                        </a>
                        <Space direction='vertical'>
                            <Paragraph type='secondary'>Oferecemos uma grande variedade de produtos, cuidadosamente selecionados, para garantir que você encontre o que precisa ao melhor preço. Nosso compromisso é trazer itens de alta qualidade, com descontos imperdíveis, em um só lugar.</Paragraph>
                            <Paragraph type='secondary'>Estamos sempre inovando para proporcionar a melhor experiência de compra possível, com uma plataforma fácil de navegar e atualizações constantes no catálogo de produtos.</Paragraph>
                            <Paragraph type='secondary'>Seja qual for a sua necessidade, nossa loja está pronta para entregar valor, conveniência e ótimas ofertas.</Paragraph>
                        </Space>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }} >
                        <Row align='baseline'>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                <Title level={4} style={{ marginBottom: 32 }}>Departamentos</Title>
                                <Space direction='vertical' size='large'>
                                    {departments.map((department, index) => (
                                        <Link key={index} href={department.href}>{department.name}</Link>
                                    ))}
                                </Space>
                            </Col>

                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                <Title level={4} style={{ marginBottom: 32 }}>Explore</Title>
                                <Space direction='vertical' size='large'>
                                    <Link href="/daily-offers">Ofertas do Dia</Link>
                                    <Link href="/stores">Lojas</Link>
                                    <Link href="/about">Sobre Nós</Link>
                                </Space>
                            </Col>

                        </Row>
                    </Col>

                </Row>
                <Row>
                    <Col span={24}>

                        <Divider />

                        <Flex align='start' justify='space-between'>
                            Duda © {new Date().getFullYear()}

                            <Space size='large'>
                                <Button type='link' icon={<FacebookOutlined />} href="https://facebook.com" target='_blank'/>
                                <Button type='link' icon={<InstagramOutlined />} href="https://instagram.com" target='_blank'/>
                                <Button type='link' icon={<TwitterOutlined />} href="https://twitter.com" target='_blank'/>
                                <Button type='link' icon={<TikTokFilled />} href="https://www.tiktok.com" target='_blank'/>
                                
                                
                                
                            </Space>
                        </Flex>

                    </Col>
                </Row>
            </Container>

        </Footer>
    )
}