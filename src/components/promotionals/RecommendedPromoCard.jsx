import { Button, Card, Col, Flex, Row, Space, Typography } from "antd";
import Recommended from "./Recommended";
import { ArrowRightOutlined, DollarCircleOutlined, DollarTwoTone } from "@ant-design/icons";
const { Title, Text, Paragraph } = Typography

export default function RecommendedPromoCard({ recommendation }) {

    return (
        <Card bodyStyle={{  backgroundColor: recommendation.color.base}}>
            <Row gutter={[8, 8]}>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                    <Space direction='vertical' size='small' align='center' justify='center' style={{ textAlign: 'center', padding: 32, width: '100%' }}>
                        <DollarCircleOutlined style={{ fontSize: 64, color: 'teal',  margin: '16px 0 64px 0' }} />
                        <Title level={4} style={{ margin: 0, color: recommendation.color.secondary, fontFamily: 'Outfit, sans-serif', wordBreak: 'keep-all' }}>{recommendation.title}</Title>
                        <Title className="display-3" level={1} style={{ color: recommendation.color.primary, fontFamily: 'Outfit, sans-serif', fontWeight: 'bold', wordBreak: 'keep-all' }}>{recommendation.subtitle}</Title>
                        <Paragraph className="lead" style={{ color: recommendation.color.secondary, fontFamily: 'Barlow Condensed, system-ui' }}>{recommendation.description}</Paragraph>
                    </Space>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                    <Recommended items={recommendation.items} />
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                    <Space direction='vertical' size='small' align='center' style={{ textAlign: 'center', padding: 32, width: '100%' }}>
                        <Paragraph className="lead" style={{ color: recommendation.color.secondary, fontFamily: 'Barlow Condensed, system-ui' }}>{recommendation.copy.message}</Paragraph>
                        <Button type='primary' shape='round' size='large' icon={<ArrowRightOutlined />} iconPosition='end'>Conferir</Button>
                    </Space>
                </Col>
            </Row>
        </Card>
    )
}