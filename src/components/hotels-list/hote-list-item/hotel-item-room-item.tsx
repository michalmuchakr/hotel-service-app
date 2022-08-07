import { Flex } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { roomItemType } from '../../../types/common';
import HotelItemRoomItemInfo from './hotel-item-room-item-info';
import HotelItemRoomItemContent from './hotel-item-room-item-content';

const HotelItemRoomItem = ({ roomItem }: { roomItem: roomItemType }) => {
  return (
    <>
      <Divider margin="15px 0" />
      <Flex
        data-testid="hotel-room-item"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'space-between' }}
        alignItems={{ base: 'center', md: 'flex-start' }}>
        <HotelItemRoomItemInfo roomItem={roomItem} />
        <HotelItemRoomItemContent roomItem={roomItem} />
      </Flex>
    </>
  );
};

export default HotelItemRoomItem;
