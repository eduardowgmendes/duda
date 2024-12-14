import { Button, Card, Col, Divider, Flex, Image, Row, Space, Typography } from "antd"
import { useExtractColor } from "react-extract-colors"
const { Title, Paragraph, Text, Link } = Typography
export default function UnitLink({ link }) {
    
    const colors = useExtractColor(link.media.cover)

    return (
        <Card bordered hoverable border
        bodyStyle={{padding: '0em 0em 2em 0em'}}
            style={{ border: `1px solid ${colors.dominantColor}`, color: `${link.color.textColor}`, width: '100%', minHeight: '32em', borderRadius: '4rem', overflow: 'hidden' }}>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <div style={{ height: 256, background:`url('${link.media.cover}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} />
                    <Divider style={{margin: 0}} />
                </Col>
                <Col span={24} style={{padding:'0em 2em 0em 2em'}}>
                    <Space direction='vertical' align='center' size='large' style={{ textAlign: 'center', userSelect: 'none' }}>
                        <Title className="display-4" level={1} ellipsis={{ rows: 3, expandable: false, symbol: '...' }} style={{ color: `${colors.dominantColor}`, wordBreak: 'keep-all', fontWeight: 'bold', fontFamily: 'Outfit, sans-serif' }}>{link.title}</Title>
                        <Paragraph ellipsis={{ rows: 4, expandable: false, symbol: '...' }}>{link.description}</Paragraph>
                        <Button size='large' shape='round' type='default' href={link.action.href} style={{ marginBottom: 24, color: `${colors.dominantColor}` }}>{link.action.callToAction}</Button>
                    </Space>
                </Col>
            </Row>
        </Card>
    )
}