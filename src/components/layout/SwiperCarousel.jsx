import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import { Col, Grid, Row } from "antd";
import SwiperBasicCard from "../promotionals/SwiperBasicCard";
const { useBreakpoint } = Grid

// This component will be modified to a less enphatic component where the user can use this by the way he wants. I mean, setup the way he wants.

export default function SwiperCarousel({ items }) {
    
    return (
        <Row>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                <Swiper style={{ display: 'flex' }}
                    slidesPerView={'auto'}
                    effect={'cards'}
                    direction={'horizontal'}
                    centeredSlides={true}
                    grabCursor={true}
                    autoplay={{disableOnInteraction: false}}
                    loop={true}
                    cardsEffect={{
                        rotate: true,
                        perSlideOffset: 100,
                        perSlideRotate: 2,
                        slideShadows: false,
                    }}
                    modules={[Autoplay, EffectCards]}>
                    {items.map((item) => (
                        <SwiperSlide style={{ width: '100%'}}>
                            <SwiperBasicCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Col>
        </Row>
    )
}