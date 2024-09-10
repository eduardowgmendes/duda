import { ArrowRightOutlined, BankTwoTone, RestTwoTone } from "@ant-design/icons";
import { Button, Card, Carousel, Col, Flex, Layout, Row, Space, Typography } from "antd";
const { Paragraph, Title } = Typography
import { useExtractColor } from "react-extract-colors";
import Container from "../layout/Container";

export default function Hero({ banners }) {

    return (
        <section >
            <Carousel autoplay fade draggable infinite dots adaptiveHeight dotPosition='bottom'>
                {banners && banners.map((banner, index) => (
                    <Card bordered bodyStyle={{padding: 0, background: `linear-gradient(90deg, ${useExtractColor(banner.media.background).dominantColor} 32%, rgba(250,250,250, 0) 100%), url('${banner.media.background}')`,  
                    backgroundPosition: 'bottom, bottom', 
                    backgroundRepeat: 'no-repeat, no-repeat', 
                    backgroundSize: 'cover, cover'}}>
                            <Container>
                                <Row>
                                    <Col xs={{span: 24}} sm={{span: 12}} md={{span: 12}} lg={{span: 8}} xl={{span: 8}} xxl={{span: 8}}>    
                                        <Flex vertical align="start" justify='center' style={{textAlign: 'start', minHeight: '75vh'}}>
                                            <Title level={1} style={{ userSelect: 'none', color: `${banner.color.primary}`, fontSize: '6vh', wordBreak: 'keep-all', fontWeight: 'bold', fontFamily: 'Outfit, sans-serif' }}>{banner.title}</Title>
                                            <Paragraph style={{ userSelect: 'none', color: `${banner.color.secondary}`, fontSize: '2vh' }}>{banner.description}</Paragraph>
                                            {banner.lead ? <Paragraph style={{ userSelect: 'none', fontSize: '1vh' }}>{banner.lead}</Paragraph> : null}
                                            <Button style={{margin: '0 0 64px 0'}} type='primary' shape='round' size='large' iconPosition='end' icon={<ArrowRightOutlined href={banner.callToAction.action} />}>{banner.callToAction.message}</Button>
                                        </Flex>
                                    </Col>
                                </Row>
                            </Container>
                    </Card>
                ))}
            </Carousel>
        </section>
    )
}