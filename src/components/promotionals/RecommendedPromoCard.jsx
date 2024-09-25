import { Button, Card, Col, Flex, Row, Space, Typography } from "antd";
import { DollarCircleOutlined, MessageTwoTone, WhatsAppOutlined } from "@ant-design/icons";

import Recommended from "./Recommended";

const { Title, Text, Paragraph } = Typography

export default function RecommendedPromoCard({ recommendation }) {

    return (
        <Card style={{ borderRadius: 64 }} bodyStyle={{ background: `url('https://www.toptal.com/designers/subtlepatterns/uploads/square_bg.png')`, userSelect: 'none', backgroundRepeat: 'repeat' }}>
            <Row gutter={[8, 8]}>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                    <Space direction='vertical' size='small' align='center' justify='center' style={{ textAlign: 'center', padding: 32, width: '100%' }}>
                        <DollarCircleOutlined style={{ fontSize: 64, color: recommendation.color.base, margin: '16px 0 32px 0' }} />
                        <Title level={3} style={{ margin: 0, color: recommendation.color.secondary, fontFamily: 'Outfit, sans-serif', wordBreak: 'keep-all' }}>{recommendation.title}</Title>
                        <Title className="display-4" level={1} style={{ margin: '0 0 32px 0', color: recommendation.color.primary, fontFamily: 'Outfit, sans-serif', fontWeight: 'bold', wordBreak: 'keep-all' }}>{recommendation.subtitle}</Title>
                        <Paragraph style={{ color: recommendation.color.secondary }}>{recommendation.description}</Paragraph>
                    </Space>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }} style={{ minHeight: '75vh', borderRadius: 64 }} >
                    <Flex align="center" justify="center" style={{ height: '100%' }}>
                        <Recommended items={recommendation.items} />
                    </Flex>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }} >
                    <Space direction='vertical' size='small' align='center' style={{ textAlign: 'center', padding: 32, width: '100%' }}>
                        <Paragraph style={{ color: recommendation.color.secondary }}>{recommendation.copy.message}</Paragraph>
                        
                        <Space align='start' justify='center'>

                            <Row align='center' justify='center' gutter={[10, 10]}>

                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                    <Card hoverable bordered style={{ padding: 10, background: 'lightcyan' }} bodyStyle={{ padding: 0 }}>
                                        <Flex align='center' justify='center'>
                                            <img src="./assets/images/logos/telegram.svg" width={32} alt="" style={{ marginInlineEnd: 10 }} />
                                            <Flex vertical>
                                                <Paragraph style={{ margin: 0, color: "inherit" }}>Participe no</Paragraph>
                                                <Title level={5} style={{ wordBreak: 'keep-all', margin: 0, color: "inherit" }} fontFamily='Outfit, sans-serif'>Telegram</Title>
                                            </Flex>
                                        </Flex>
                                    </Card>
                                </Col>

                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>

                                    <Card hoverable bordered style={{ padding: 10, background: 'teal' }} bodyStyle={{ padding: 0 }}>
                                        <Flex align='center' justify='center'>
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