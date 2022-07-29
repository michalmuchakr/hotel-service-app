type facility = {
  code: string;
};

type occupancy = {
  maxAdults: number;
  maxChildren: number;
  maxOverall: number;
};

export type imageType = {
  url: string;
  alt: string;
};

type positionType = {
  latitude?: number;
  longitude?: number;
  timezone: string;
};

export type roomsRatesPlanOfHotelsType = {
  rooms: roomItemType[];
  ratePlans: ratePlan[];
};

export type cancellationPolicy = {
  name: string;
  text: string;
  penalty: string;
  applicable: string;
  hour?: string;
  amount?: number;
  days?: number;
};

export type ratePlan = {
  id: string;
  shortDescription: string;
  longDescription?: string;
  prePayment: string;
  cancellationPolicy?: cancellationPolicy;
  prePaymentValue?: number;
  prePaymentIsPercentage?: boolean;
};

export type roomItemType = {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: occupancy;
  disabledAccess: boolean;
  bedConfiguration: string;
  images: imageType[];
  facilities: facility[];
};

export interface hotelItemType {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  postcode: string;
  town: string;
  country: string;
  countryCode: string;
  starRating: string;
  facilities: {
    code: string;
  }[];
  telephone: string;
  email: string;
  images: {
    url: string;
    alt: string;
  }[];
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  position: positionType;
}

export interface hotelWithRoomsItemType extends hotelItemType {
  rooms: roomItemType[];
}
