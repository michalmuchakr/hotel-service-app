import { useEffect, useState, useTransition } from 'react';
import {
  combineHotelWithRoomsAvailable,
  fetchRoomsRatesPlanOfHotelsForHotels,
  filterHotelsByRating,
  filterRoomsInHotels,
  getHotelList
} from '../utils/common';
import { hotelItemType, hotelWithRoomsItemType, roomsRatesPlanOfHotelsType } from '../types/common';

export const useManageHotelList = () => {
  const [isFilteringPending, startFilteringTransition] = useTransition();
  const [hotelListData, setHotelListData] = useState<hotelWithRoomsItemType[]>(() => []);
  const [filteredHotelListData, setFilteredHotelListData] = useState<hotelWithRoomsItemType[]>(
    () => []
  );
  const [isDatabaseConnectionErrorOccur, setDatabaseConnectionErrorOccur] =
    useState<boolean>(false);
  const [minRatingFilterValue, setMinRatingFilterValue] = useState<number>(1);
  const [minAdultsFilterValue, setMinAdultsFilterValue] = useState<number>(0);
  const [minChildrenFilterValue, setMinChildrenFilterValue] = useState<number>(0);

  useEffect(() => {
    startFilteringTransition(() => {
      const filteredByRatingHotelsData: hotelWithRoomsItemType[] = filterHotelsByRating(
        minRatingFilterValue,
        hotelListData
      );
      const filteredHotelsRooms: hotelWithRoomsItemType[] = filterRoomsInHotels(
        filteredByRatingHotelsData,
        minAdultsFilterValue,
        minChildrenFilterValue
      );
      setFilteredHotelListData(filteredHotelsRooms);
    });
  }, [minRatingFilterValue, minAdultsFilterValue, minChildrenFilterValue]);

  useEffect(() => {
    (async () => {
      const hotelListData: hotelItemType[] = await getHotelList(setDatabaseConnectionErrorOccur);
      const roomsRatesPlanOfHotels: roomsRatesPlanOfHotelsType[] =
        await fetchRoomsRatesPlanOfHotelsForHotels(hotelListData, setDatabaseConnectionErrorOccur);
      const hotelListDataWithRooms: hotelWithRoomsItemType[] = combineHotelWithRoomsAvailable(
        hotelListData,
        roomsRatesPlanOfHotels
      );
      setHotelListData(hotelListDataWithRooms);
      setFilteredHotelListData(hotelListDataWithRooms);
    })();
  }, []);

  return {
    isFilteringPending,
    isDatabaseConnectionErrorOccur,
    filteredHotelListData,
    minRatingFilterValue,
    setMinRatingFilterValue,
    setMinAdultsFilterValue,
    setMinChildrenFilterValue
  };
};
