import { ArrowRightOutlined, BankTwoTone, RestTwoTone } from "@ant-design/icons";
import { Button, Card, Carousel, Col, Flex, Layout, Row, Space, Typography } from "antd";
const { Paragraph, Title } = Typography
import { useExtractColor } from "react-extract-colors";
import Container from "../layout/Container";

export default function Hero({ banners }) {

    return (
        <section >
            <Carousel autoplay fade draggable infinite dots adaptiveHeight dotPosition='bottom'>
                {banners && banners.map((banner, index) => (
                    <Card key={index} bordered bodyStyle={{
                        padding: 0, background: `linear-gradient(90deg, ${useExtractColor(banner.media.background).dominantColor} 32%, rgba(250,250,250, 0) 100%), url('${banner.media.background}')`,
                        backgroundPosition: 'bottom, bottom',
                        backgroundRepeat: 'no-repeat, no-repeat',
                        backgroundSize: 'cover, cover'
                    }}>
                        <Container>
                            <Row>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                    <Flex vertical align="start" justify='center' style={{ textAlign: 'start', minHeight: '75vh' }}>
                                        <Title level={1} className="display-4" style={{ fontFamily: 'Outfit, sans-serif', userSelect: 'none', color: `${banner.color.primary}` }}>{banner.title}</Title>
                                        <Paragraph className="lead" style={{ fontFamily: 'Barlow Condensed, sans-serif', userSelect: 'none', color: `${banner.color.secondary}` }}>{banner.description}</Paragraph>
                                        {banner.lead ? <Paragraph className="sublead" style={{ userSelect: 'none' }}>{banner.lead}</Paragraph> : null}
                                        <Button style={{ margin: '64px 0 64px 0' }} type='primary' shape='round' size='large' iconPosition='end' icon={<ArrowRightOutlined href={banner.callToAction.action} />}>{banner.callToAction.message}</Button>
                                    </Flex>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                ))}
            </Carousel>
        </section>
    )
}