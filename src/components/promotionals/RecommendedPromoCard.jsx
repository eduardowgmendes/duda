import { Button, Card, Col, Flex, Row, Space, Typography } from "antd";
import Recommended from "./Recommended";
import { ArrowRightOutlined, DollarTwoTone } from "@ant-design/icons";
const { Title, Text, Paragraph } = Typography

export default function RecommendedPromoCard({ recommendation }) {
    
    return (
        <Card bodyStyle={{ background: 'springgreen' }}>
            <Row gutter={[8,64]}>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                    <Space direction='vertical' size='large' align="center" style={{textAlign: 'center', padding: 32, width: '100%'}}>
                        <DollarTwoTone style={{fontSize: '8vh'}}/>
                        <Title level={1} style={{color: recommendation.color.primary, fontFamily: 'Outfit, sans-serif', wordBreak: 'keep-all', fontWeight: 'bold', fontSize: '8vh'}}>{recommendation.title}</Title>
                        <Paragraph style={{color: recommendation.color.secondary, fontSize: '3vh', fontFamily: 'Barlow Condensed, system-ui'}}>{recommendation.description}</Paragraph>
                    </Space>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                    <Recommended items={recommendation.items}/>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                    <Space direction='vertical' size='large' align='center' style={{textAlign: 'center', padding: 32, width: '100%'}}>
                    <Paragraph style={{color: recommendation.color.secondary, fontSize: '3vh', fontFamily: 'Barlow Condensed, system-ui'}}>{recommendation.copy.message}</Paragraph>
                        <Button type='primary' shape='round' size='large' icon={<ArrowRightOutlined />} iconPosition='end'>Conferir</Button>
                    </Space>
                </Col>
            </Row>
        </Card>
    )
}