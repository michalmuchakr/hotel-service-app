import HotelItemRoomItem from './hotel-item-room-item';
import { hotelWithRoomsItemType, roomItemType } from '../../../types/common';

const HotelItemBody = ({ hotelItem }: { hotelItem: hotelWithRoomsItemType }) => {
  return (
    <>
      {hotelItem.rooms.map((roomItem: roomItemType) => {
        return <HotelItemRoomItem key={roomItem.id} roomItem={roomItem} />;
      })}
    </>
  );
};

export default HotelItemBody;
