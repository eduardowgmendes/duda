import { ShopFilled, ThunderboltTwoTone } from "@ant-design/icons";
import { Card, Col, Divider, Flex, Image, Row, Space, Typography } from "antd";
import { useExtractColor } from "react-extract-colors";
const { Title, Paragraph, Text } = Typography

export default function SwiperBasicCard({ item }) {

    const colors = useExtractColor(item.media.mainPicture)

    return (
        <Card
            size='large'
            style={{
                border: 'none', minWidth: '24em', backgroundImage: `url('https://t4.ftcdn.net/jpg/04/63/61/83/360_F_463618303_NlFS8G3pkg3x7ykLHO0nUm0enBNIcruy.jpg')`, backgroundSize: 'cover' }}
            title={<Text type='secondary' ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ maxWidth: '90%', color: 'black' }}>Recomendado</Text>}
            extra={<div><img src="./assets/images/top-ribbon.png" width={32} /></div>}
            bodyStyle={{ padding: 0 }}>

            <Flex vertical wrap >

                <div style={{
                    background: `url('${item.media.mainPicture}')`,
                    backgroundColor: 'white',
                    backgroundPosition: 'center',
                    aspectRatio: '1/1',
                    backgroundSize: 'contain',
                    margin: '.25em 1rem .25em 1rem',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '24em',
                    overflow: 'hidden',
                    borderRadius: '1rem'
                }}>

                </div>

                <Row gutter={[8, 8]} style={{ padding: 16 }}>

                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>

                        <Row gutter={[0, 0]} style={{ minHeight: '100%' }}>

                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }} style={{color: 'black'}}>
                                <Flex align='start' justify="start" style={{ height: 'auto' }}>
                                    <Paragraph style={{ fontSize: '1.16rem', fontWeight: 'bold', margin: 0, textAlign: 'start', fontFamily: 'Outfit, sans-serif', color: 'inherit' }} ellipsis={{ rows: 2, expandable: false, symbol: '...' }}>{item.title}</Paragraph>
                                </Flex>
                            </Col>

                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }} style={{color: 'dimgray'}}>
                                <Flex vertical align='start' justify='end' style={{ height: 'auto', margin: '1em 0 0 0' }}>
                                    <Space direction='vertical' align='start' size='small'>
                                        <Paragraph delete italic type='secondary' style={{ margin: 0, fontFamily: 'Outfit, sans-serif', color: 'inherit' }}>{item.price.currency.concat(' ').concat(item.price.was)}</Paragraph>
                                        <Flex align='start'>
                                            <Text type='secondary' style={{ paddingInlineEnd: 4, wordBreak: 'keep-all', color: 'inherit' }}>{item.price.currency}</Text>
                                            <Text ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ fontSize: '1.5rem', lineHeight: 1, fontWeight: 'bold', fontFamily: 'Outfit, sans-serif', color: 'royalblue' }}>{item.price.current}</Text>
                                        </Flex>
                                    </Space>
                                </Flex>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={24}><Divider style={{ margin: '2em 0 0.16em 0' }} /></Col>

                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }} style={{color: 'dimgray'}}>
                        <Flex vertical align='start' justify='center' style={{ height: '100%' }}>
                            <Paragraph type='secondary' style={{ margin: 0, fontFamily: 'Outfit, sans-serif', color: 'inherit' }}><ShopFilled style={{ marginInlineEnd: 8, color: 'royalblue' }} /><span style={{ fontWeight: 'bold' }}>{item.merchant.seller}</span></Paragraph>
                        </Flex>
                    </Col>

                </Row>
            </Flex>

        </Card>
    )
}