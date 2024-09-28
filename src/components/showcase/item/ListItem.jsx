import { Card, Col, Flex, Row, Space, Typography } from "antd";
const { Paragraph, Title, Text } = Typography

export default function ListItem({ item }) {
    return (
        <Card bordered bodyStyle={{ padding: 0 }} style={{width: '100%'}}>

            <Row gutter={[8, 8]}>

                <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 4 }} xxl={{ span: 4 }}>
                    <Flex align='center' justify='center' style={{ overflow: 'hidden', height: '100%' }}>
                        <div style={{backgroundImage: `url('${item.picture.src}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', height: '100%', aspectRatio: '1/1'}} />
                    </Flex>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 16 }} lg={{ span: 16 }} xl={{ span: 12 }} xxl={{ span: 8 }}>

                    <Flex vertical align='start' justify='space-between' style={{ height: '100%', padding: 16 }}>

                        <Space direction='vertical' size='small'>
                            
                            <Title
                                level={5}
                                ellipsis={{ rows: 3, expandable: false, symbol: '...' }}
                                style={{ margin: 0, fontFamily: 'Outfit, sans-serif' }}>{item.title}</Title>
                            
                            <Paragraph delete italic type='secondary' style={{ margin: 0, fontFamily: 'Outfit, sans-serif' }}>{item.price.currency.concat(' ').concat(item.price.was)}</Paragraph>
                            
                            <Flex align='start'>
                                <Text type='secondary' style={{ paddingInlineEnd: 4, wordBreak: 'keep-all' }}>{item.price.currency}</Text>
                                <Text ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ fontSize: '1.75em', fontWeight: 'bold', lineHeight: 1, fontFamily: 'Outfit', color: '#1c80da' }}>{item.price.current}</Text>
                            </Flex>
                        
                        </Space>

                        <Flex align="center" justify="start" style={{ width: '100%', padding: '1em 0 0 0' }}>
                            <small style={{ fontFamily: 'Outfit, sans-serif' }}><span style={{ color: "gray" }}>Vendido por: </span>{item.merchant.seller}</small>
                        </Flex>

                    </Flex>

                </Col>

            </Row>
        </Card>
    )
}