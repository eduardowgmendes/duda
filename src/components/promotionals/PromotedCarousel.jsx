import { ArrowRightOutlined, CaretLeftOutlined, CaretRightOutlined, FlagOutlined, PauseCircleOutlined, PlayCircleOutlined, PlaySquareOutlined, ProductOutlined } from "@ant-design/icons";
import { Button, Card, Carousel, Col, Divider, Empty, Flex, Grid, Image, List, Progress, Row, Space, Typography } from "antd";
const { Paragraph, Text, Title } = Typography
import { useExtractColor } from "react-extract-colors";
import Container from "../layout/Container";
import DisplayItem from "../showcase/item/DisplayItem";
import ListItem from "../showcase/item/ListItem";
import { useRef, useState } from "react";

const { useBreakpoint } = Grid

export default function PromotedCarosel({ title, description, promos }) {

    const screens = useBreakpoint()

    const carouselRef = useRef()

    const [current, setCurrent] = useState(1)
    const [total, setTotal] = useState(promos.length)

    const [autoplay, setAutoplay] = useState(true)

    const next = () => {
        carouselRef.current.next()
    }

    const previous = () => {
        carouselRef.current.prev()
    }

    const goTo = (index) => {
        carouselRef.current.next(index)
    }

    const getCurrent = (current, next) => {
        setCurrent(++current)
    }

    const toggleAutoplay = () => {
        autoplay ? setAutoplay(false) : setAutoplay(true)
    }

    return (
        <Row >
            <Col span={24}>

                <Container>
                    <Flex align='center' justify='space-between'>
                        <Text type='secondary'>{`Recomendados ${current} de ${total}`}</Text>
                        <Space align='center'>
                            <Card bodyStyle={{ padding: 4 }} bordered style={{ borderRadius: 64 }}>
                                <Space size={4} align='center'>
                                    <Button type='default' shape='round' icon={autoplay ? <PauseCircleOutlined /> : <PlaySquareOutlined />} iconPosition='center' onClick={toggleAutoplay} />
                                    <Button type='default' shape='round' icon={<CaretLeftOutlined />} iconPosition='center' onClick={previous} />
                                    <Button type='default' shape='round' icon={<CaretRightOutlined />} iconPosition='center' onClick={next} />
                                </Space>
                            </Card>
                        </Space>
                    </Flex>

                    <Carousel
                        fade
                        autoplay={autoplay}
                        draggable
                        dots
                        adaptiveHeight
                        pauseOnHover
                        pauseOnFocus
                        beforeChange={(current, next) => getCurrent(current, next)}
                        dotPosition='bottom' ref={carouselRef}
                        style={{ position: 'relative', cursor: 'grab' }}>
                        {promos.map((promo, index) => (
                            <Card
                                bordered
                                style={{ overflow: 'hidden', userSelect: 'none' }}
                                bodyStyle={{
                                    padding: 0, background: `linear-gradient(${screens.xs ? '0deg' : '90deg'}, ${useExtractColor(promo.media.backdrop).dominantColor} ${screens.xs ? '75%' : '50%'}, rgba(250,250,250,0) ${screens.xs ? '100%' : '100%'}), url('${promo.media.backdrop}')`,
                                    backgroundPosition: 'center, center',
                                    backgroundRepeat: 'no-repeat, no-repeat',
                                    backgroundSize: 'cover, cover'
                                }} key={index}>

                                <Row gutter={[8, 8]}>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                                        <Flex vertical align={screens.xs ? 'center' : 'start'} justify='end' style={{
                                            textAlign: `${screens.xs ? 'center' : 'start'}`,
                                            padding: screens.xs ? '4em 2em 1em 2em' : '2em',
                                            userSelect: 'none',
                                            minHeight: screens.xs ? '32em' : '28em'
                                        }}>
                                            <div style={{ width: 64, height: 64, borderRadius: 8, overflow: 'hidden' }}>
                                                <img src={promo.images.featureImage} width='100%' />
                                            </div>
                                            <Title level={2} ellipsis={{ rows: 4, expandable: false, symbol: '...' }} style={{ fontWeight: 'bold', userSelect: 'none', color: promo.color.primary, fontFamily: 'Outfit, sans-serif', wordBreak: 'keep-all', maxWidth: screens.xs ? '100%' : '75%' }}>{promo.title}</Title>
                                            <Paragraph style={{ userSelect: 'none', color: promo.color.secondary, maxWidth: screens.xs ? '100%' : '75%' }} ellipsis={{ rows: 6, expandable: false, symbol: '...' }}>{promo.description}</Paragraph>
                                            <Button type="default" shape='round' iconPosition='end' href={promo.href} style={{ margin: '2em 0 2em 0' }} icon={<ArrowRightOutlined />}>{promo.callToAction}</Button>
                                        </Flex>
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                                        <Flex vertical align='center' justify='center' style={{ height: '100%', padding: screens.xs ? '1em' : '1em 2em 1em 2em', userSelect: 'none' }}>
                                            {promo.offers && <List
                                                grid={{
                                                    gutter: 8,
                                                    xs: 3,
                                                    sm: 3,
                                                    md: 4,
                                                    lg: 5,
                                                    xl: 6,
                                                    xxl: 12,
                                                }}
                                                dataSource={promo.offers}
                                                renderItem={(offer) => (
                                                    <List.Item>
                                                        <DisplayItem item={offer} />
                                                    </List.Item>
                                                )} />}
                                        </Flex>
                                    </Col>
                                </Row>
                            </Card>
                        ))}
                    </Carousel>
                </Container>

            </Col>

        </Row>
    )
}