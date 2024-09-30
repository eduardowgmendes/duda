import { ArrowRightOutlined, FlagOutlined, ProductOutlined } from "@ant-design/icons";
import { Button, Card, Carousel, Col, Empty, Flex, Grid, Image, List, Row, Space, Typography } from "antd";
const { Paragraph, Text, Title } = Typography
import { useExtractColor } from "react-extract-colors";
import Container from "../layout/Container";
import DisplayItem from "../showcase/item/DisplayItem";

const { useBreakpoint } = Grid

export default function PromotedCarosel({ promos }) {

    const screens = useBreakpoint()

    return (
        <Carousel autoplay fade draggable infinite dots adaptiveHeight dotPosition='bottom'>
            {promos.map((promo, index) => (
                <Container>
                    <Card
                        bordered
                        style={{ overflow: 'hidden', borderRadius: 64,  userSelect: 'none' }}
                        bodyStyle={{
                            padding: 0, background: `linear-gradient(${screens.xs ? '0deg' : '90deg'}, ${useExtractColor(promo.media.backdrop).dominantColor} ${screens.xs ? '90%' : '25%'}, rgba(250,250,250,0) ${screens.xs ? '100%' : '75%'}), url('${promo.media.backdrop}')`,
                            backgroundPosition: 'bottom, center',
                            backgroundRepeat: 'no-repeat, no-repeat',
                            backgroundSize: screens.xs ? 'cover, contain' : 'cover, cover'
                        }} key={index}>

                        <Row gutter={[8, 8]}>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 16 }} xl={{ span: 8 }} xxl={{ span: 8 }}>
                                <Flex vertical align={screens.xs ? 'center' : 'start'} justify="center" style={{ textAlign: `${screens.xs ? 'center' : 'start'}`, padding: screens.xs ? '8em 3em 1em 3em' : '4em 4em 1em 4em' }}>
                                    <div style={{width: 64, height: 64, borderRadius: 8, overflow: 'hidden'}}>
                                        <img src={promo.images.featureImage} width='100%' />
                                    </div>
                                    <Title className="display-4" level={2} ellipsis={{ rows: 4, expandable: false, symbol: '...' }} style={{ fontWeight: 'bold', userSelect: 'none', color: promo.color.primary, fontFamily: 'Outfit, sans-serif', wordBreak: 'keep-all' }}>{promo.title}</Title>
                                    <Paragraph style={{ userSelect: 'none', color: promo.color.secondary }} ellipsis={{ rows: 6, expandable: false, symbol: '...' }}>{promo.description}</Paragraph>
                                    <Button type="default" shape='round' size='large' iconPosition='end' href={promo.href} style={{ margin:  '2em 0 1em 0' }} icon={<ArrowRightOutlined />}>{promo.callToAction}</Button>
                                </Flex>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 16 }} xxl={{ span: 16 }}>
                                <Flex vertical align='center' justify='center' style={{ height: '100%', padding: screens.xs ? '0em 1.25em 4em 1.25em' : '4em 1.25em 4em 1.25em' }}>
                                    {promo.offers && <List 
                                        grid={{
                                            gutter: 8,
                                            xs: 2,
                                            sm: 2,
                                            md: 4,
                                            lg: 4,
                                            xl: 4,
                                            xxl: 4,
                                        }}
                                        dataSource={promo.offers} 
                                        renderItem={(offer) => ( 
                                        <List.Item>
                                            <DisplayItem item={offer}/>
                                        </List.Item>
                                        )} />}
                                </Flex>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            ))}
        </Carousel>
    )
}