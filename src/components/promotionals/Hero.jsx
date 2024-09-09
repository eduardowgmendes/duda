import { ArrowRightOutlined, BulbTwoTone, CarTwoTone, FrownTwoTone, GiftTwoTone, HddTwoTone, HomeTwoTone, RocketTwoTone, ShopTwoTone, SoundTwoTone, StarTwoTone, ToolTwoTone } from "@ant-design/icons";
import { Button, Card, Carousel, Col, Divider, Flex, Input, Row, Space, Typography } from "antd";
import Container from "../layout/Container";
const { Text, Paragraph, Title } = Typography
import { useExtractColor } from "react-extract-colors";
import CategoryShowcase from "../category/CategoryShowcase";

export default function Hero({ banners }) {

    const categories = [{
        name: 'Ferramentas',
        color: {
            primary: 'white',
            secondary: '',
        },
        media: {
            background: 'https://plus.unsplash.com/premium_photo-1674078860580-688dd9519e81?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon: <ToolTwoTone />
        }
    }, {
        name: 'Eletroportáteis',
        color: {
            primary: 'darkslategray',
            secondary: '',
        },
        media: {
            background: 'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon: <FrownTwoTone />
        }
    }, {
        name: 'Comércio & Indústria',
        color: {
            primary: 'whitesmoke',
            secondary: '',
        },
        media: {
            background: 'https://images.unsplash.com/photo-1542274368-443d694d79aa?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon: <StarTwoTone />
        }
    }, {
        name: 'Brinquedos',
        color: {
            primary: 'cornsilk',
            secondary: '',
        },
        media: {
            background: 'https://plus.unsplash.com/premium_photo-1664373233010-7c4abae40f78?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon: <BulbTwoTone />
        }
    }, {
        name: 'Automotivo',
        color: {
            primary: 'whitesmoke',
            secondary: '',
        },
        media: {
            background: 'src/assets/category/category-banner-automotive.png',
            icon: <CarTwoTone />
        }
    }, {
        name: 'Casa',
        color: {
            primary: 'cornsilk',
            secondary: '',
        },
        media: {
            background: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww',
            icon: <HomeTwoTone />
        }
    }, {
        name: 'Utilidades Domésticas',
        color: {
            primary: 'darkslategray',
            secondary: '',
        },
        media: {
            background: 'https://images.unsplash.com/photo-1567790375865-21c42874446e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon: <GiftTwoTone />
        }
    }, {
        name: 'TV & Áudio',
        color: {
            primary: 'purple',
            secondary: '',
        },
        media: {
            background: 'https://images.unsplash.com/photo-1505740106531-4243f3831c78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon: <SoundTwoTone />
        }
    }, {
        name: 'Mercado',
        color: {
            primary: 'whitesmoke',
            secondary: '',
        },
        media: {
            background: 'https://images.unsplash.com/photo-1567790329613-4196347cf60b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon: <ShopTwoTone />
        }
    }, {
        name: 'Games',
        color: {
            primary: 'whitesmoke',
            secondary: '',
        },
        media: {
            background: 'https://images.unsplash.com/photo-1535043205849-513fe27db33e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon: <RocketTwoTone />
        }
    }, {
        name: 'Informática',
        color: {
            primary: 'whitesmoke',
            secondary: '',
        },
        media: {
            background: 'https://images.unsplash.com/photo-1556559322-b5071efadc88?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon: <HddTwoTone />
        }
    },]

    return (
        <section >
            <Carousel autoplay draggable fade infinite dots adaptiveHeight dotPosition='bottom'>
                {banners && banners.map((banner, index) => (

                    <Card bodyStyle={{ padding: 0 }} bordered key={index} style={{ minHeight: '100vh' }}>
                        <Flex style={{ background: `linear-gradient(90deg, ${useExtractColor(banner.media.background).dominantColor} 25%, rgba(250,250,250, 0) 50%), url('${banner.media.background}')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <Container>
                                <Row gutter={[32, 32]}>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 8 }} xxl={{ span: 8 }}>
                                        <Flex vertical align="start" justify="center" style={{ height: '100%', padding: '64px 0 64px 0' }}>
                                            <Title level={1} style={{ userSelect: 'none', marginTop: 0, color: `${banner.color.primary}`, fontSize: '3.5rem', wordBreak: 'keep-all', fontWeight: 'bold', fontFamily: 'Outfit, sans-serif' }}>{banner.title}</Title>
                                            <Paragraph style={{ userSelect: 'none', color: `${banner.color.secondary}`, fontSize: '1.2rem' }}>{banner.description}</Paragraph>
                                            <Paragraph style={{userSelect: 'none', fontSize: '1rem'}}>{banner.lead}</Paragraph>
                                            <Button type='default' shape='round' size='large' iconPosition='end' style={{margin: '32px 0 32px 0'}} icon={<ArrowRightOutlined href={banner.callToAction.action} />}>{banner.callToAction.message}</Button>
                                        </Flex>
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 16 }} xxl={{ span: 16 }}>
                                        <Flex vertical align='center' justify='center' style={{ padding: '64px 0 64px 0' }}>
                                            <CategoryShowcase categories={categories} />
                                        </Flex>
                                    </Col>
                                </Row>
                            </Container>
                        </Flex>
                    </Card>
                ))}
            </Carousel>
        </section>
    )
}