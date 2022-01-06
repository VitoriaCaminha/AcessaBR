import React from 'react'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide} from 'swiper/react'
import Card from '../Card/card1centro'
import Card1 from '../Card/card2praia'
import Card2 from '../Card/card3hotel'
import Card3 from '../Card/card4praia'
import Card4 from '../Card/card5restaurante'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Pagination])

function Slider() {
    return(
        <Swiper slidesPerView={1}
            breakpoints={{
                767: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 4
                }
            }}
        >
            <SwiperSlide>
                <Card/>
            </SwiperSlide>
            <SwiperSlide>
                <Card1/>
            </SwiperSlide>
            <SwiperSlide>
                <Card2/>
            </SwiperSlide>
            <SwiperSlide>
                <Card3/>
            </SwiperSlide>
            <SwiperSlide>
                <Card4/>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider