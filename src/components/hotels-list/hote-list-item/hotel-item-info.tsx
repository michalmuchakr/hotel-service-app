import { Box, Text } from '@chakra-ui/react';
import { hotelWithRoomsItemType } from '../../../types/common';

const HotelItemInfo = ({ hotelItem }: { hotelItem: hotelWithRoomsItemType }) => {
  return (
    <Box flex="1" paddingLeft="20px">
      <Text fontSize="2xl" fontWeight="semibold">
        {hotelItem.name}
      </Text>
      <Text fontSize="md">{hotelItem.address1}</Text>
      <Text fontSize="md">{hotelItem.address2}</Text>
    </Box>
  );
};

export default HotelItemInfo;
