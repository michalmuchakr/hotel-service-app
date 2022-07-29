import { Container } from '@chakra-ui/react';
import HotelsFilters from './hotels-filters';
import HotelsList from './hotels-list';
import { useManageHotelList } from '../../hooks/use-manage-hotel-list';
import ErrorMessageAlert from '../error-message-alert';

const HotelsListWithFilters = () => {
  const {
    filteredHotelListData,
    isDatabaseConnectionErrorOccur,
    isFilteringPending,
    minRatingFilterValue,
    setMinRatingFilterValue,
    setMinAdultsFilterValue,
    setMinChildrenFilterValue
  } = useManageHotelList();

  return (
    <Container maxW="container.xl">
      {isDatabaseConnectionErrorOccur && <ErrorMessageAlert />}
      <HotelsFilters
        isFilteringPending={isFilteringPending}
        minRatingFilterValue={minRatingFilterValue}
        setMinRatingFilterValue={setMinRatingFilterValue}
        setMinAdultsFilterValue={setMinAdultsFilterValue}
        setMinChildrenFilterValue={setMinChildrenFilterValue}
      />
      <HotelsList filteredHotelListData={filteredHotelListData} />
    </Container>
  );
};

export default HotelsListWithFilters;
