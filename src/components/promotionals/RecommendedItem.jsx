import { ThunderboltTwoTone } from "@ant-design/icons";
import { Card, Col, Divider, Flex, Image, Row, Space, Typography } from "antd";
const { Title, Paragraph, Text } = Typography

export default function RecommendedItem({ item }) {

    return (
        <Card
            size='large'
            bordered
            style={{ minWidth: '320px', height: 'auto', boxShadow: '0px 12px 2px -8px rgba(0, 0, 0, 0.25)' }}
            title={<Text type='secondary' ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ maxWidth: '90%' }}>Recomendado</Text>}
            extra={<img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/06720e49514cbd94b755.png" width={42} />}
            bodyStyle={{ padding: 0 }}>

            <Flex vertical wrap>

                <div style={{
                    background: `url('${item.media.mainPicture}')`, 
                    backgroundPosition: 'center', 
                    backgroundSize: 'contain', 
                    backgroundRepeat: 'no-repeat',
                    minHeight: 256}}>

                </div>

                <Row gutter={[8, 16]} style={{ padding: '0px 32px 16px 32px' }}>

                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>

                        <Row gutter={[8, 8]} style={{ minHeight: 128 }}>

                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                                <Flex align='end' justify="start" style={{ height: '100%' }}>
                                    <Title level={4} style={{ textAlign: 'start', fontFamily: 'Outfit, sans-serif', color: 'darkslategray' }} ellipsis={{ rows: 3, expandable: false, symbol: '...' }}>{item.title}</Title>
                                </Flex>
                            </Col>

                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                                <Flex vertical align='start' justify='end' style={{ height: '100%' }}>
                                    <Space direction='vertical' align='start' size='small'>
                                        <Paragraph delete italic type='secondary' style={{ margin: 0, fontFamily: 'Outfit' }}>{item.price.currency.concat(' ').concat(item.price.was)}</Paragraph>
                                        <Flex align='start'>
                                            <Text type='secondary' style={{ paddingInlineEnd: 4, wordBreak: 'keep-all' }}>{item.price.currency}</Text>
                                            <Text ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ fontSize: '24px', lineHeight: 1, fontWeight: 'bold', fontFamily: 'Outfit, sans-serif', color: 'steelblue' }}>{item.price.current}</Text>
                                        </Flex>
                                    </Space>
                                </Flex>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                        <Space direction="vertical" align="center" size='small'>
                            <Paragraph type='secondary' style={{ fontFamily: 'Outfit, sans-serif' }}>Vendido por: {item.merchant.seller}</Paragraph>
                        </Space>
                    </Col>

                </Row>
            </Flex>

        </Card>
    )
}