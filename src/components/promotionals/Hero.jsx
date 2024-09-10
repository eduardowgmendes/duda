import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Card, Carousel, Col, Flex, Row, Space, Typography } from "antd";
const { Paragraph, Title } = Typography
import { useExtractColor } from "react-extract-colors";
import Container from "../layout/Container";

export default function Hero({ banners }) {

    return (
        <section >
            <Carousel autoplay draggable fade infinite dots adaptiveHeight dotPosition='bottom'>
                {banners && banners.map((banner, index) => (
                    <Row>
                        <div style={{background: `linear-gradient(0deg, ${useExtractColor(banner.media.background).dominantColor} 25%, rgba(250,250,250, 0) 75%), url('${banner.media.background}')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <Col span={24} style={{height: '100vh'}}>
                                    <Flex vertical align="center" justify="end" style={{ textAlign:'center', height: '100%', width: '100%'}}>
                                        <Container>
                                            <Space direction="vertical" style={{paddingBottom: 128}}>
                                                <Title level={1} style={{userSelect: 'none', marginTop: 0, color: `${banner.color.primary}`, fontSize: '3.5rem', wordBreak: 'keep-all', fontWeight: 'bold', fontFamily: 'Outfit, sans-serif' }}>{banner.title}</Title>
                                                <Paragraph style={{ userSelect: 'none', color: `${banner.color.secondary}`, fontSize: '1.2rem' }}>{banner.description}</Paragraph>
                                                {banner.lead ? <Paragraph style={{ userSelect: 'none', fontSize: '1rem' }}>{banner.lead}</Paragraph> : null}
                                                <Button type='default' shape='round' size='large' iconPosition='end' icon={<ArrowRightOutlined href={banner.callToAction.action} />}>{banner.callToAction.message}</Button>
                                            </Space>
                                        </Container>
                                    </Flex>
                            </Col>
                        </div>
                    </Row>
                ))}
            </Carousel>
        </section>
    )
}