import { Text } from '@chakra-ui/react';
import { roomItemType } from '../../../types/common';

const HotelItemRoomItemContent = ({ roomItem }: { roomItem: roomItemType }) => {
  return (
    <Text paddingLeft="20px" textAlign="justify">
      {roomItem.longDescription}
    </Text>
  );
};

export default HotelItemRoomItemContent;
