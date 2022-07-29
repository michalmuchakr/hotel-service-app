import { Box } from '@chakra-ui/react';
import { hotelWithRoomsItemType } from '../../types/common';
import HotelsListItem from './hotels-list-item';

const HotelsList = ({
  filteredHotelListData
}: {
  filteredHotelListData: hotelWithRoomsItemType[];
}) => {
  return (
    <Box marginTop="30px">
      {filteredHotelListData.map((hotelItem: hotelWithRoomsItemType) => {
        return <HotelsListItem hotelItem={hotelItem} key={hotelItem.id} />;
      })}
    </Box>
  );
};

export default HotelsList;
