import { Dispatch, SetStateAction } from 'react';
import { Spinner } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/react';
import HotelItemRating from './hote-list-item/hotel-item-rating';
import CounterFilter from './counter-filter';

const HotelsFilters = ({
  isFilteringPending,
  minRatingFilterValue,
  setMinRatingFilterValue,
  setMinAdultsFilterValue,
  setMinChildrenFilterValue
}: {
  isFilteringPending: boolean;
  minRatingFilterValue: number;
  setMinRatingFilterValue: Dispatch<SetStateAction<number>>;
  setMinAdultsFilterValue: Dispatch<SetStateAction<number>>;
  setMinChildrenFilterValue: Dispatch<SetStateAction<number>>;
}) => (
  <Box
    backgroundColor="white"
    minWidth={{ base: '200px', md: '560px' }}
    width="60%"
    padding={4}
    color="#27282B"
    borderWidth="1px"
    className="sth"
    marginLeft="auto"
    marginRight="auto"
    marginTop="-29px"
    position="relative"
    data-testid="filter-box"
    role="group">
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent={{ base: 'center', md: 'space-between' }}
      alignItems="center">
      <HotelItemRating
        hotelRating={`${minRatingFilterValue}`}
        setMinRatingFilterValue={setMinRatingFilterValue}
        editable
      />

      <CounterFilter
        label="Adults:"
        counterFilterCallback={setMinAdultsFilterValue}
        labelTestKey="adults"
      />

      <CounterFilter
        label="Children:"
        counterFilterCallback={setMinChildrenFilterValue}
        labelTestKey="children"
      />

      {isFilteringPending && <Spinner position="absolute" right="-28px" top="40px" size="sm" />}
    </Flex>
  </Box>
);

export default HotelsFilters;
