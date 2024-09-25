import { Swiper, SwiperSlide } from "swiper/react";
import RecommendedItem from "./RecommendedItem";
import { Autoplay, EffectCards } from "swiper/modules";
import { Col, Row } from "antd";

export default function Recommended({ items }) {
    
    const renderEffects = (progress) => {
        console.log('changed: ', progress)
    }

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
                    onProgress={(swiper, progress) => renderEffects}
                    loop={true}
                    cardsEffect={{
                        rotate: true,
                        perSlideOffset: 110,
                        perSlideRotate: 2,
                        slideShadows: false,
                    }}
                    modules={[Autoplay, EffectCards]}>
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