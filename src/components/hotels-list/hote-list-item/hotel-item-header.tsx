import HotelItemCarousel from './hotel-item-carousel';
import HotelItemInfo from './hotel-item-info';
import HotelItemRating from './hotel-item-rating';
import { Flex } from '@chakra-ui/react';
import { hotelWithRoomsItemType } from '../../../types/common';

const HotelItemHeader = ({ hotelItem }: { hotelItem: hotelWithRoomsItemType }) => {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent={{ base: 'center', md: 'space-between' }}
      alignItems={{ base: 'center', md: 'flex-start' }}>
      <HotelItemCarousel hotelItem={hotelItem} />
      <HotelItemInfo hotelItem={hotelItem} />
      <HotelItemRating hotelRating={hotelItem.starRating} />
    </Flex>
  );
};

export default HotelItemHeader;
