import { Carousel, Col, Flex, Row } from "antd";
import { useExtractColor } from "react-extract-colors";
import Container from "../layout/Container";
import { useEffect, useState } from "react";

export default function Hero({ banners }) {

    const [color, setColor] = useState('gold')

    const beforeChange = (index) => {
        setColor('tomato')
    }

    return (
        <section>
            <Carousel
                autoplay
                fade
                draggable
                infinite
                dots
                beforeChange={(index) => beforeChange(index)}
                dotPosition='bottom'>
                {banners && banners.map((banner, index) => (
                    <Row>
                        <Col span={24} style={{ background: useExtractColor(banner.media.background).dominantColor }}>
                            <Row>
                                <Col xs={{ span: 24, offset: 0 }} md={{ span: 20, offset: 2 }} lg={{ span: 20, offset: 2 }} xl={{ span: 20, offset: 2 }} xxl={{ span: 20, offset: 2 }}>
                                    <img src={banner.media.background} width='100%' alt="..." />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                ))}
            </Carousel>
        </section>
    )
}