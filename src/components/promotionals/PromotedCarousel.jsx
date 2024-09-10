import { ArrowRightOutlined, ProductOutlined } from "@ant-design/icons";
import { Button, Card, Carousel, Col, Flex, Grid, Image, Row, Space, Typography } from "antd";
const { Paragraph, Text, Title } = Typography
import { useExtractColor } from "react-extract-colors";

export default function PromotedCarosel({ promos }) {

    return (
        <Carousel autoplay fade draggable infinite dots adaptiveHeight dotPosition='bottom'>
            {promos.map((promo, index) => (
                <Card bodyStyle={{ padding: 0 }} bordered key={index}>
                    <Flex align="center" style={{ background: `linear-gradient(90deg, ${useExtractColor(promo.media.backdrop).dominantColor} 25%, rgba(250,250,250,0) 75%), url('${promo.media.backdrop}')`, 
                        backgroundPosition: 'end, center', 
                        backgroundRepeat: 'no-repeat, no-repeat', 
                        backgroundSize: 'cover, cover'}}>
                        <Row gutter={[16,16]}>
                            <Col xs={{span: 20}} sm={{span: 20}} md={{span: 20}} lg={{span: 16}} xl={{span: 10}} xxl={{span: 10}} offset={2}>
                                <Title style={{ fontWeight: 'bolder', userSelect: 'none',color: promo.color.primary, fontFamily: 'Outfit, sans-serif', fontSize: '5vh', wordBreak: 'keep-all' }}>{promo.title}</Title>
                                <Paragraph style={{ fontSize: '2.75vh', lineHeight: '1.3', userSelect: 'none', color: promo.color.secondary, fontFamily: 'Barlow Condensed, system-ui' }} ellipsis={{ rows: 6, expandable: false, symbol: '...' }}>{promo.description}</Paragraph>
                                <Button size='large' shape='round' iconPosition='end' style={{marginBottom: 48}} icon={<ArrowRightOutlined />}>{promo.callToAction}</Button>
                            </Col>
                        </Row>
                    </Flex>
                </Card>
            ))}
        </Carousel>
    )
}