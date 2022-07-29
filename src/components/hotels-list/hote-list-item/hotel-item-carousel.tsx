import { useId } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Box } from '@chakra-ui/react';
import { hotelWithRoomsItemType, imageType } from '../../../types/common';

const HotelItemCarousel = ({ hotelItem }: { hotelItem: hotelWithRoomsItemType }) => {
  return (
    <Box w="200px" h="200px" overflow="hidden">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {hotelItem.images.map((hotelItemImage: imageType) => {
          return (
            <SwiperSlide key={useId()}>
              <img src={hotelItemImage.url} alt={hotelItemImage.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default HotelItemCarousel;
