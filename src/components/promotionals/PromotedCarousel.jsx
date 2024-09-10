import { ArrowRightOutlined, ProductOutlined } from "@ant-design/icons";
import { Button, Card, Carousel, Col, Flex, Grid, Image, Row, Space, Typography } from "antd";
const { Paragraph, Text, Title } = Typography
import { useExtractColor } from "react-extract-colors";
import Container from "../layout/Container";

export default function PromotedCarosel({ promos }) {

    return (
        <Carousel autoplay fade draggable infinite dots adaptiveHeight dotPosition='bottom'>
            {promos.map((promo, index) => (
                <Card bodyStyle={{
                    padding: 0, background: `linear-gradient(90deg, ${useExtractColor(promo.media.backdrop).dominantColor} 25%, rgba(250,250,250,0) 75%), url('${promo.media.backdrop}')`,
                    backgroundPosition: 'bottom, center',
                    backgroundRepeat: 'no-repeat, no-repeat',
                    backgroundSize: 'cover, cover'
                }} bordered key={index}>
                    <Container>
                        <Row>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>
                                <Flex vertical align="start" justify="center" style={{textAlign: 'start', minHeight: '75vh'}}>
                                    <Title level={2} style={{ fontWeight: 'bolder', userSelect: 'none', color: promo.color.primary, fontFamily: 'Outfit, sans-serif', fontSize: '6vh', wordBreak: 'keep-all' }}>{promo.title}</Title>
                                    <Paragraph style={{ fontSize: '2vh', lineHeight: '1.3', userSelect: 'none', color: promo.color.secondary }} ellipsis={{ rows: 6, expandable: false, symbol: '...' }}>{promo.description}</Paragraph>
                                    <Button size='large' type="primary" shape='round' iconPosition='end' icon={<ArrowRightOutlined />}>{promo.callToAction}</Button>
                                </Flex>
                            </Col>
                        </Row>
                    </Container>

                </Card>
            ))}
        </Carousel>
    )
}