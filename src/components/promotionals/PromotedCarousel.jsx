import { ArrowRightOutlined, ProductOutlined } from "@ant-design/icons";
import { Button, Card, Carousel, Col, Flex, Grid, Image, Row, Space, Typography } from "antd";
const { Paragraph, Text, Title } = Typography
import { useExtractColor } from "react-extract-colors";

export default function PromotedCarosel({ promos }) {

    return (
        <Carousel autoplay fade draggable infinite dots adaptiveHeight dotPosition='bottom'>
            {promos.map((promo, index) => (
                <Card bodyStyle={{ padding: 0 }} bordered key={index} style={{ height: '100%' }}>
                    <Flex style={{ padding: '128px 32px 128px 32px', background: `linear-gradient(90deg, ${useExtractColor(promo.media.backdrop).dominantColor} 50%, rgba(250,250,250,0) 75%), url('${promo.media.backdrop}')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <Row>
                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 20}} lg={{span: 16}} xl={{span: 12}} xxl={{span: 12}}>
                                <Title style={{ fontWeight: 'bolder', userSelect: 'none',color: promo.color.primary, fontFamily: 'Outfit, sans-serif', fontSize: '3rem', wordBreak: 'keep-all' }}>{promo.title}</Title>
                                <Paragraph style={{ fontSize: '1.25rem', userSelect: 'none', color: promo.color.secondary }} ellipsis={{ rows: 6, expandable: false, symbol: '...' }}>{promo.description}</Paragraph>
                                <Button size='large' shape='round' iconPosition='end' icon={<ArrowRightOutlined />}>{promo.callToAction}</Button>
                            </Col>
                        </Row>
                    </Flex>
                </Card>
            ))}
        </Carousel>
    )
}