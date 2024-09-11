import { Swiper, SwiperSlide } from "swiper/react";
import RecommendedItem from "./RecommendedItem";
import { EffectCards, EffectCoverflow } from "swiper/modules";
import { Card, Col, Empty, Flex, Row } from "antd";

export default function Recommended({ items }) {
    return (
        <Row>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                <Swiper style={{ display: 'flex' }}
                    slidesPerView={'auto'}
                    effect={'cards'}
                    autoplay={true}
                    centeredSlides={true}
                    cardsEffect={{
                        rotate: true,
                        perSlideOffset: 128,
                        perSlideRotate: 2,
                        slideShadows: true,
                    }}
                    modules={[EffectCards]}>
                    {items.map((item) => (
                        <SwiperSlide style={{ width: '100%' }}>
                            <RecommendedItem item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Col>
        </Row>
    )
}