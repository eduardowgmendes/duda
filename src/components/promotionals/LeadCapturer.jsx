import { Button, Card, Col, Flex, Row, Space, Typography } from "antd";
import { DollarCircleOutlined, MessageTwoTone, WhatsAppOutlined } from "@ant-design/icons";

import SwiperCarousel from "../layout/SwiperCarousel";

const { Title, Text, Paragraph } = Typography

export default function LeadCapturer({ recommendation }) {

    return (
        <Card bordered hoverable style={{ borderRadius: 64, overflow: 'hidden' }} bodyStyle={{ background: `url('./assets/images/backgrounds/square.png')`, padding: 0, userSelect: 'none', backgroundRepeat: 'repeat', overflow: 'hidden' }}>
            <Row gutter={[8, 8]}>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                    <Space direction='vertical' size='small' align='center' justify='center' style={{ textAlign: 'center', padding: 32, width: '100%' }}>
                        <DollarCircleOutlined style={{ fontSize: 64, color: recommendation.color.base, margin: '16px 0 32px 0' }} />
                        <Title level={3} style={{ margin: 0, color: recommendation.color.secondary, fontFamily: 'Outfit, sans-serif', wordBreak: 'keep-all' }}>{recommendation.title}</Title>
                        <Title className="display-4" level={1} style={{ margin: 0, color: recommendation.color.primary, fontFamily: 'Outfit, sans-serif', fontWeight: 'bold', wordBreak: 'keep-all' }}>{recommendation.subtitle}</Title>
                        <Paragraph style={{ color: recommendation.color.secondary }}>{recommendation.description}</Paragraph>
                    </Space>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                <Flex align='center' justify='center'>
                    <Flex align="center" justify="center" style={{ height: '56vh' }}>
                        <SwiperCarousel items={recommendation.items} />
                    </Flex>
                </Flex>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }} >
                    <Space direction='vertical' size='small' align='center' style={{ textAlign: 'center', padding: 32, width: '100%' }}>
                        <Paragraph style={{ color: recommendation.color.secondary }}>{recommendation.copy.message}</Paragraph>
                        
                        <Space align='start' justify='center'>

                            <Row align='center' justify='center' gutter={[16, 16]}>

                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                    <Card hoverable bordered style={{ padding: 10, background: 'lightcyan', borderRadius: 64 }} bodyStyle={{ padding: 0 }}>
                                        <Flex align='center' justify='center' style={{padding: '0 4em 0 4em'}}>
                                            <img src="./assets/images/logos/telegram.svg" width={32} alt="" style={{ marginInlineEnd: 10 }} />
                                            <Flex vertical>
                                                <Paragraph style={{ margin: 0, color: "inherit" }}>Participe no</Paragraph>
                                                <Title level={5} style={{ wordBreak: 'keep-all', margin: 0, color: "inherit" }} fontFamily='Outfit, sans-serif'>Telegram</Title>
                                            </Flex>
                                        </Flex>
                                    </Card>
                                </Col>

                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>

                                    <Card hoverable bordered style={{ padding: 10, background: 'teal', borderRadius: 64 }} bodyStyle={{ padding: 0 }}>
                                        <Flex align='center' justify='center' style={{padding: '0 4em 0 4em'}}>
                                            <img src="./assets/images/logos/whatsApp.svg" width={32} alt="" style={{ marginInlineEnd: 10 }} />
                                            <Flex vertical style={{ color: 'whitesmoke' }}>
                                                <Paragraph style={{ margin: 0, color: "inherit" }}>Participe no</Paragraph>
                                                <Title level={5} style={{ wordBreak: 'keep-all', margin: 0, color: "inherit" }} fontFamily='Outfit, sans-serif'>WhatsApp</Title>
                                            </Flex>
                                        </Flex>
                                    </Card>
                                </Col>
                            </Row>

                        </Space>
                    </Space>
                </Col>
            </Row>
        </Card>
    )
}