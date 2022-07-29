import { Box, Text } from '@chakra-ui/react';
import { roomItemType } from '../../../types/common';

const HotelItemRoomItemInfo = ({ roomItem }: { roomItem: roomItemType }) => {
  return (
    <Box
      minWidth={200}
      textAlign={{ base: 'center', md: 'left' }}
      paddingBottom={{ base: '20px', md: '0' }}>
      <Text fontWeight="semibold">{roomItem.name}</Text>
      <Text>Adults: {roomItem.occupancy.maxAdults}</Text>
      <Text>Children: {roomItem.occupancy.maxChildren}</Text>
    </Box>
  );
};

export default HotelItemRoomItemInfo;
