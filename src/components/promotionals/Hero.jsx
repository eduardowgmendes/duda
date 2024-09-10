import { ArrowRightOutlined, BulbTwoTone, CarTwoTone, FrownTwoTone, GiftTwoTone, HddTwoTone, HomeTwoTone, RocketTwoTone, ShopTwoTone, SoundTwoTone, StarTwoTone, ToolTwoTone } from "@ant-design/icons";
import { Button, Card, Carousel, Col, Divider, Flex, Input, Row, Space, Typography } from "antd";
import Container from "../layout/Container";
const { Text, Paragraph, Title } = Typography
import { useExtractColor } from "react-extract-colors";
import CategoryShowcase from "../category/CategoryShowcase";

export default function Hero({ banners }) {



    return (
        <section >
            <Carousel autoplay draggable fade infinite dots adaptiveHeight dotPosition='bottom'>
                {banners && banners.map((banner, index) => (
                    <Card bodyStyle={{ padding: 0 }} bordered key={index}  >
                        <Flex style={{ background: `linear-gradient(90deg, ${useExtractColor(banner.media.background).dominantColor} 25%, rgba(250,250,250, 0) 50%), url('${banner.media.background}')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <Row gutter={[32, 32]}>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 16 }} xxl={{ span: 16 }}>
                                    <Flex vertical align="start" justify="center" style={{ height: '100%', padding: '64px 128px 64px 128px' }}>
                                        <Title level={1} style={{ userSelect: 'none', marginTop: 0, color: `${banner.color.primary}`, fontSize: '3.5rem', wordBreak: 'keep-all', fontWeight: 'bold', fontFamily: 'Outfit, sans-serif' }}>{banner.title}</Title>
                                        <Paragraph style={{ userSelect: 'none', color: `${banner.color.secondary}`, fontSize: '1.2rem' }}>{banner.description}</Paragraph>
                                        <Paragraph style={{ userSelect: 'none', fontSize: '1rem' }}>{banner.lead}</Paragraph>
                                        <Button type='default' shape='round' size='large' iconPosition='end' style={{ margin: '32px 0 32px 0' }} icon={<ArrowRightOutlined href={banner.callToAction.action} />}>{banner.callToAction.message}</Button>
                                    </Flex>
                                </Col>
                            </Row>
                        </Flex>
                    </Card>
                ))}
            </Carousel>
        </section>
    )
}