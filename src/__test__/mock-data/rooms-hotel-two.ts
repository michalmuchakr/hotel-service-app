export default {
  rooms: [
    {
      id: 'SUPE',
      name: 'Superior Double',
      longDescription: 'Superior Double',
      occupancy: {
        maxAdults: 2,
        maxChildren: 0,
        maxOverall: 2
      },
      disabledAccess: false,
      bedConfiguration: 'None',
      images: [],
      facilities: []
    },
    {
      id: 'STND',
      name: 'Standard Double',
      longDescription: 'Standard Double',
      occupancy: {
        maxAdults: 2,
        maxChildren: 0,
        maxOverall: 2
      },
      disabledAccess: false,
      bedConfiguration: 'None',
      images: [],
      facilities: []
    },
    {
      id: 'JUNIOR',
      name: 'King/Twin Junior Suite',
      longDescription: 'Junior Suite',
      occupancy: {
        maxAdults: 2,
        maxChildren: 1,
        maxOverall: 3
      },
      disabledAccess: false,
      bedConfiguration: 'Both',
      images: [],
      facilities: []
    },
    {
      id: 'LOFT',
      name: 'Loft Suite',
      longDescription: 'Loft Suite',
      occupancy: {
        maxAdults: 2,
        maxChildren: 1,
        maxOverall: 3
      },
      disabledAccess: false,
      bedConfiguration: 'None',
      images: [],
      facilities: []
    },
    {
      id: 'TWIN',
      name: 'Standard Twin',
      longDescription: 'Standard Twin',
      occupancy: {
        maxAdults: 2,
        maxChildren: 1,
        maxOverall: 2
      },
      disabledAccess: false,
      bedConfiguration: 'None',
      images: [],
      facilities: []
    },
    {
      id: 'SEAVU',
      name: 'Sea View Suite',
      longDescription: 'Sea View Suite',
      occupancy: {
        maxAdults: 2,
        maxChildren: 2,
        maxOverall: 4
      },
      disabledAccess: false,
      bedConfiguration: 'None',
      images: [],
      facilities: []
    }
  ],
  ratePlans: [
    {
      id: '24_HOUR',
      shortDescription: '24 Hour Rate',
      prePayment: 'Deposit',
      prePaymentValue: 20,
      prePaymentIsPercentage: true
    },
    {
      id: 'BB_SAVER',
      shortDescription: 'Saver - Bed and Breakfast',
      longDescription:
        'I am a detailed description of this beautiful rate which provides me with much more information of what I would be getting if I was to select this beautiful cute rate. Shame I am a fake rate description, one day I would like to be a real one.',
      prePayment: 'Reserve',
      cancellationPolicy: {
        name: 'Cancellation Poll',
        text: 'I am a cancellation policy with loads of information of how we will punish you if you decide you want to cancel the reservation into this beautiful room. Mwahahahaha',
        penalty: 'Fixed',
        applicable: 'Full Stay',
        amount: 200
      }
    },
    {
      id: 'BAR_RO',
      shortDescription: 'Special Promotional Rate',
      longDescription: 'This rate is our special promotional rate and is for accommodation only.',
      prePayment: 'Reserve',
      cancellationPolicy: {
        name: 'Cancellation Poll',
        text: 'I am a cancellation policy with loads of information of how we will punish you if you decide you want to cancel the reservation into this beautiful room. Mwahahahaha',
        penalty: 'Fixed',
        applicable: 'Full Stay',
        amount: 200
      }
    },
    {
      id: 'GROUPS',
      shortDescription: 'Groups RO',
      prePayment: 'Reserve'
    },
    {
      id: 'BAR_BB',
      shortDescription: 'Best Flexible - Bed and Breakfast',
      longDescription: 'Detailed Description Text Field',
      prePayment: 'Pay now',
      cancellationPolicy: {
        name: 'Cancellation Poll',
        text: 'I am a cancellation policy with loads of information of how we will punish you if you decide you want to cancel the reservation into this beautiful room. Mwahahahaha',
        penalty: 'Fixed',
        applicable: 'Full Stay',
        amount: 200
      }
    }
  ]
};
