import { Button, Card, Col, Flex, Row, Space, Typography } from "antd"
const { Title, Paragraph, Text, Link } = Typography
export default function UnitLink({ link }) {
    return (
        <Card bordered hoverable
        bodyStyle={{padding: '0 4em 0 4em'}}
            style={{ backgroundColor: `${link.color.background}`, color: `${link.color.textColor}`, width: '100%', minHeight: '50vh', borderRadius: 64 }}>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Flex vertical align='center' justify='center' style={{minHeight: '50vh'}}>
                        <Space direction='vertical' align='center' size='small' style={{ textAlign: 'center', width: '100%', userSelect: 'none' }}>
                            {link.icon}
                            <Title level={2} ellipsis={{ rows: 3, expandable: false, symbol: '...' }} style={{ color: `${link.color.primary}`, wordBreak: 'keep-all', fontWeight: 'bold', fontFamily: 'Outfit, sans-serif' }}>{link.title}</Title>
                            <Paragraph ellipsis={{ rows: 4, expandable: false, symbol: '...' }} style={{color: 'inherit'}}>{link.description}</Paragraph>
                            <Button size='large' shape='round' type='default' href={link.action.href} style={{ marginBottom: 24 }}>{link.action.callToAction}</Button>
                        </Space>
                    </Flex>
                </Col>
            </Row>
        </Card>
    )
}