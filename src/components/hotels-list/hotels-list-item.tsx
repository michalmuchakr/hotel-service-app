import { Box } from '@chakra-ui/react';
import { hotelWithRoomsItemType } from '../../types/common';
import HotelItemHeader from './hote-list-item/hotel-item-header';
import HotelItemBody from './hote-list-item/hotel-item-body';

const HotelsListItem = ({ hotelItem }: { hotelItem: hotelWithRoomsItemType }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      padding="12px 24px"
      marginBottom="10px"
      data-testid="hotel-item">
      <HotelItemHeader hotelItem={hotelItem} />
      <HotelItemBody hotelItem={hotelItem} />
    </Box>
  );
};

export default HotelsListItem;
