import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ChakraProvider } from '@chakra-ui/react';
import hotelsMockData from './mock-data/hotels';
import App from '../app';
import roomsHotelOneMockData from './mock-data/rooms-hotel-one';
import roomHotelTwoMockData from './mock-data/rooms-hotel-two';

const mockAxiosAdapter = new MockAdapter(axios);

beforeAll(() => {
  mockAxiosAdapter
    .onGet(`${process.env.REACT_APP_API_HOST}/hotels?collection-id=OBMNG`)
    .reply(200, hotelsMockData);

  mockAxiosAdapter
    .onGet(`${process.env.REACT_APP_API_HOST}/roomRates/OBMNG/OBMNG1`)
    .reply(200, roomsHotelOneMockData);

  mockAxiosAdapter
    .onGet(`${process.env.REACT_APP_API_HOST}/roomRates/OBMNG/OBMNG2`)
    .reply(200, roomHotelTwoMockData);
});

it('Check if all filters are available and functional', async () => {
  const { getByTestId, getAllByTestId } = render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );

  const filterBoxElements = await waitFor(() => getByTestId('filter-box'));
  const ratingStarsElements = await waitFor(() => getAllByTestId('filter-rating-star-ico'));
  const adultLabel = await waitFor(() => getByTestId('adults-label'));
  const childrenLabel = await waitFor(() => getByTestId('children-label'));
  const adultReduceAmountBtn = await waitFor(() => getByTestId('adults-reduce-amount'));
  const childrenReduceAmountBtn = await waitFor(() => getByTestId('children-reduce-amount'));
  const adultIncreaseAmountBtn = await waitFor(() => getByTestId('adults-increase-amount'));
  const childrenIncreaseAmountBtn = await waitFor(() => getByTestId('children-increase-amount'));
  const adultAmountValue = await waitFor(() => getByTestId('adults-amount-value'));
  const childrenAmountValue = await waitFor(() => getByTestId('children-amount-value'));

  expect(filterBoxElements).toBeInTheDocument();
  expect(adultLabel).toBeInTheDocument();
  expect(childrenLabel).toBeInTheDocument();

  fireEvent.click(adultIncreaseAmountBtn);
  expect(adultAmountValue).toHaveTextContent('1');

  fireEvent.click(adultReduceAmountBtn);
  fireEvent.click(adultReduceAmountBtn);
  expect(adultAmountValue).toHaveTextContent('0');

  fireEvent.click(childrenIncreaseAmountBtn);
  expect(childrenAmountValue).toHaveTextContent('1');

  fireEvent.click(childrenReduceAmountBtn);
  fireEvent.click(childrenReduceAmountBtn);
  expect(childrenAmountValue).toHaveTextContent('0');

  const hotelCard = await waitFor(() => screen.getByText(/obm hotel 1/i));
  expect(hotelCard).toBeInTheDocument();

  fireEvent.click(adultIncreaseAmountBtn);
  fireEvent.click(adultIncreaseAmountBtn);
  fireEvent.click(adultIncreaseAmountBtn);

  expect(adultAmountValue).toHaveTextContent('3');

  const hotelRooms = await waitFor(() => screen.getAllByTestId('hotel-room-item'));
  expect(hotelRooms).toHaveLength(1);

  fireEvent.click(ratingStarsElements[4]);
  const hotelItems = await waitFor(() => screen.getAllByTestId('hotel-item'));
  expect(hotelItems).toHaveLength(1);
});
