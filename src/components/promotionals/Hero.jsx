import { ArrowRightOutlined, BankTwoTone, RestTwoTone } from "@ant-design/icons";
import { Button, Card, Carousel, Col, Flex, Layout, Row, Space, Typography } from "antd";
const { Paragraph, Title } = Typography
import { useExtractColor } from "react-extract-colors";
import Container from "../layout/Container";

export default function Hero({ banners }) {

    return (
        <section >
            <Carousel autoplay draggable infinite dots adaptiveHeight dotPosition='bottom'>
                {banners && banners.map((banner, index) => (
                    <Card bordered bodyStyle={{background: `linear-gradient(0deg, ${useExtractColor(banner.media.background).dominantColor} 32%, rgba(250,250,250, 0) 100%), url('${banner.media.background}')`,  
                    backgroundPosition: 'bottom, bottom', 
                    backgroundRepeat: 'no-repeat, no-repeat', 
                    backgroundSize: 'cover, cover'}}>
                            <Container>
                                <Flex vertical align="center" justify='end' style={{minHeight: '90vh', textAlign: 'center', padding: 64}}>
                                    <Title level={1} style={{ userSelect: 'none', color: `${banner.color.primary}`, fontSize: '4rem', wordBreak: 'keep-all', fontWeight: 'bold', fontFamily: 'Outfit, sans-serif' }}>{banner.title}</Title>
                                    <Paragraph style={{ userSelect: 'none', color: `${banner.color.secondary}`, fontSize: '1.5rem' }}>{banner.description}</Paragraph>
                                    {banner.lead ? <Paragraph style={{ userSelect: 'none', fontSize: '1rem' }}>{banner.lead}</Paragraph> : null}
                                    <Button type='primary' shape='round' size='large' iconPosition='end' icon={<ArrowRightOutlined href={banner.callToAction.action} />}>{banner.callToAction.message}</Button>
                                </Flex>
                            </Container>
                    </Card>
                ))}
            </Carousel>
        </section>
    )
}