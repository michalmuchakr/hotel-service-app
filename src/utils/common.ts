import axios from 'axios';
import {
  hotelItemType,
  hotelWithRoomsItemType,
  roomItemType,
  roomsRatesPlanOfHotelsType
} from '../types/common';
import { Dispatch, SetStateAction } from 'react';

export const getHotelList = async (
  setDatabaseConnectionErrorOccur: Dispatch<SetStateAction<boolean>>
): Promise<hotelItemType[]> => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_HOST}/hotels?collection-id=OBMNG`
    );
    return response.data;
  } catch (error) {
    setDatabaseConnectionErrorOccur(true);
    throw error;
  }
};

const getRoomListByHotelId = async (
  hotelId: string,
  setDatabaseConnectionErrorOccur: Dispatch<SetStateAction<boolean>>
): Promise<roomsRatesPlanOfHotelsType> => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_HOST}/roomRates/OBMNG/${hotelId}`
    );
    return response.data;
  } catch (error) {
    setDatabaseConnectionErrorOccur(true);
    throw error;
  }
};

export const fetchRoomsRatesPlanOfHotelsForHotels = async (
  hotelListData: hotelItemType[],
  setDatabaseConnectionErrorOccur: Dispatch<SetStateAction<boolean>>
): Promise<roomsRatesPlanOfHotelsType[]> => {
  if (!hotelListData) {
    return [];
  }

  const roomForHotelsPromises = hotelListData.map(async (hotelItem: hotelItemType) => {
    return await getRoomListByHotelId(hotelItem.id, setDatabaseConnectionErrorOccur);
  });
  return await Promise.all(roomForHotelsPromises);
};

export const combineHotelWithRoomsAvailable = (
  hotelListData: hotelItemType[],
  roomsRatesPlanOfHotels: roomsRatesPlanOfHotelsType[]
): hotelWithRoomsItemType[] => {
  if (!hotelListData) {
    return [];
  }

  return hotelListData.map((hotelItem: hotelItemType, hotelIndex: number) => ({
    ...hotelItem,
    ...roomsRatesPlanOfHotels[hotelIndex]
  }));
};

export const filterHotelsByRating = (
  minRatingFilterValue: number,
  hotelListData: hotelWithRoomsItemType[]
): hotelWithRoomsItemType[] => {
  return hotelListData.filter((hotelItem: hotelWithRoomsItemType) => {
    return parseInt(hotelItem.starRating, 10) >= minRatingFilterValue;
  });
};

const getFilteredRooms = (
  hotelRooms: roomItemType[],
  minAdultsFilterValue: number,
  minChildrenFilterValue: number
): roomItemType[] => {
  return hotelRooms.filter((hotelRoomItem: roomItemType) => {
    return (
      hotelRoomItem.occupancy.maxAdults >= minAdultsFilterValue &&
      hotelRoomItem.occupancy.maxChildren >= minChildrenFilterValue
    );
  });
};

export const filterRoomsInHotels = (
  hotelListData: hotelWithRoomsItemType[],
  minAdultsFilterValue: number,
  minChildrenFilterValue: number
): hotelWithRoomsItemType[] => {
  return hotelListData.map((hotelItem: hotelWithRoomsItemType) => ({
    ...hotelItem,
    rooms: getFilteredRooms(hotelItem.rooms, minAdultsFilterValue, minChildrenFilterValue)
  }));
};
