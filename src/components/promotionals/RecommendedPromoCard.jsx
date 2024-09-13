import { Button, Card, Col, Flex, Row, Space, Typography } from "antd";
import { DollarCircleOutlined, MessageTwoTone, WhatsAppOutlined } from "@ant-design/icons";

import Recommended from "./Recommended";

const { Title, Text, Paragraph } = Typography

export default function RecommendedPromoCard({ recommendation }) {

    return (
        <Card bodyStyle={{background: `url('https://www.toptal.com/designers/subtlepatterns/uploads/square_bg.png')`, backgroundRepeat: 'repeat'}}>
            <Row gutter={[8, 8]}>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                    <Space direction='vertical' size='small' align='center' justify='center' style={{ textAlign: 'center', padding: 32, width: '100%' }}>
                        <DollarCircleOutlined style={{ fontSize: 64, color: recommendation.color.base, margin: '16px 0 32px 0' }} />
                        <Title level={1} style={{ margin: 0, color: recommendation.color.secondary, fontFamily: 'Outfit, sans-serif', wordBreak: 'keep-all' }}>{recommendation.title}</Title>
                        <Title className="display-3" level={1} style={{ margin: '0 0 32px 0', color: recommendation.color.primary, fontFamily: 'Outfit, sans-serif', fontWeight: 'bold', wordBreak: 'keep-all' }}>{recommendation.subtitle}</Title>
                        <Paragraph className="lead" style={{ color: recommendation.color.secondary, fontFamily: 'Barlow Condensed, system-ui' }}>{recommendation.description}</Paragraph>
                    </Space>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }} style={{ height: '75vh', borderRadius: 64 }} >
                    <Flex align="center" justify="center" style={{ height: '100%' }}>
                        <Recommended items={recommendation.items} />
                    </Flex>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                    <Space direction='vertical' size='small' align='center' style={{ textAlign: 'center', padding: 32, width: '100%' }}>
                        <Paragraph className="lead" style={{ color: recommendation.color.secondary, fontFamily: 'Barlow Condensed, system-ui' }}>{recommendation.copy.message}</Paragraph>
                        <Flex align="center">
                            
                            <Space size='large'>
                                <Button type='text' size='large' style={{color: "steelblue" }} shape='round' icon={<MessageTwoTone />} iconPosition='end'>Telegram</Button>
                                <Button type='text' size='large' style={{color: "springgreen" }} shape='round' icon={<WhatsAppOutlined style={{color: "springgreen"}}/>} iconPosition='end'>WhatsApp</Button>
                            </Space>
                        
                        </Flex>
                    </Space>
                </Col>
            </Row>
        </Card>
    )
}