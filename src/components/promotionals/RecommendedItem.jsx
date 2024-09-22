import { ThunderboltTwoTone } from "@ant-design/icons";
import { Card, Col, Divider, Flex, Image, Row, Space, Typography } from "antd";
import { useExtractColor } from "react-extract-colors";
const { Title, Paragraph, Text } = Typography

export default function RecommendedItem({ item }) {

    return (
        <Card
            size='large'
            bordered
            style={{ minWidth: '26em', minHeight: '40em', overflow: 'hidden' }}
            title={<Text type='secondary' ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ maxWidth: '90%' }}>Recomendado</Text>}
            extra={<img src="./assets/images/top-ribbon.png" width={42} />}
            bodyStyle={{ padding: 0 }}>

            <Flex vertical wrap>

                <div style={{
                    background: `url('${item.media.mainPicture}')`, 
                    backgroundPosition: 'center', 
                    backgroundSize: 'contain', 
                    backgroundRepeat: 'no-repeat',
                    minHeight: '20em'}}>

                </div>

                <Row gutter={[8, 8]} style={{ padding: '0px 32px 0 32px', minHeight: 256}}>

                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>

                        <Row gutter={[0, 0]} style={{ minHeight: '100%' }}>

                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                                <Flex align='start' justify="start" style={{ height: 100 }}>
                                    <Title level={4} style={{ margin: '16px 0 16px 0', textAlign: 'start', fontFamily: 'Outfit, sans-serif', color: 'darkslategray' }} ellipsis={{ rows: 3, expandable: false, symbol: '...' }}>{item.title}</Title>
                                </Flex>
                            </Col>

                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                                <Flex vertical align='start' justify='end' style={{ height: 75 }}>
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

                    <Divider style={{margin: 2}}/>

                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                        <Flex vertical align='start' justify='center'>
                            <Paragraph type='secondary' style={{margin: 0, fontFamily: 'Outfit, sans-serif' }}>Vendido por: <span style={{fontWeight: 'bold'}}>{item.merchant.seller}</span></Paragraph>
                        </Flex>
                    </Col>

                </Row>
            </Flex>

        </Card>
    )
}