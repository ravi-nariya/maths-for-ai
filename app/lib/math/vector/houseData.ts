export type House = {
  id: number;
  area: number;
  rooms: number;
  bathrooms: number;
  age: number;
  distanceCenter: number;
  price: number;
};

export const houses: House[] = [
  { id: 1, area: 850, rooms: 2, bathrooms: 1, age: 18, distanceCenter: 7.2, price: 4200000 },
  { id: 2, area: 1250, rooms: 3, bathrooms: 2, age: 8, distanceCenter: 4.5, price: 6800000 },
  { id: 3, area: 2100, rooms: 4, bathrooms: 3, age: 5, distanceCenter: 2.1, price: 12500000 },
  { id: 4, area: 650, rooms: 1, bathrooms: 1, age: 25, distanceCenter: 11.5, price: 3200000 },
  { id: 5, area: 3200, rooms: 5, bathrooms: 4, age: 3, distanceCenter: 1.8, price: 21500000 },

  { id: 6, area: 1100, rooms: 2, bathrooms: 2, age: 12, distanceCenter: 6.8, price: 5500000 },
  { id: 7, area: 1450, rooms: 3, bathrooms: 2, age: 15, distanceCenter: 5.9, price: 7200000 },
  { id: 8, area: 1850, rooms: 4, bathrooms: 3, age: 7, distanceCenter: 3.7, price: 10800000 },
  { id: 9, area: 2400, rooms: 4, bathrooms: 3, age: 2, distanceCenter: 2.8, price: 14500000 },
  { id: 10, area: 900, rooms: 2, bathrooms: 1, age: 22, distanceCenter: 9.8, price: 3900000 },

  { id: 11, area: 1350, rooms: 3, bathrooms: 2, age: 6, distanceCenter: 4.2, price: 7500000 },
  { id: 12, area: 1650, rooms: 3, bathrooms: 2, age: 10, distanceCenter: 5.1, price: 8200000 },
  { id: 13, area: 2750, rooms: 5, bathrooms: 4, age: 4, distanceCenter: 2.5, price: 17200000 },
  { id: 14, area: 720, rooms: 2, bathrooms: 1, age: 30, distanceCenter: 12.4, price: 2900000 },
  { id: 15, area: 1950, rooms: 4, bathrooms: 3, age: 9, distanceCenter: 4.0, price: 11200000 },

  { id: 16, area: 1050, rooms: 2, bathrooms: 1, age: 14, distanceCenter: 8.2, price: 4700000 },
  { id: 17, area: 1550, rooms: 3, bathrooms: 2, age: 5, distanceCenter: 3.9, price: 8500000 },
  { id: 18, area: 2250, rooms: 4, bathrooms: 3, age: 11, distanceCenter: 6.2, price: 11800000 },
  { id: 19, area: 2900, rooms: 5, bathrooms: 4, age: 1, distanceCenter: 1.5, price: 19800000 },
  { id: 20, area: 780, rooms: 2, bathrooms: 1, age: 20, distanceCenter: 10.2, price: 3500000 },

  { id: 21, area: 1180, rooms: 3, bathrooms: 2, age: 9, distanceCenter: 5.4, price: 6300000 },
  { id: 22, area: 1720, rooms: 3, bathrooms: 2, age: 16, distanceCenter: 7.1, price: 7900000 },
  { id: 23, area: 2050, rooms: 4, bathrooms: 3, age: 6, distanceCenter: 3.3, price: 12100000 },
  { id: 24, area: 3400, rooms: 5, bathrooms: 4, age: 2, distanceCenter: 1.2, price: 23000000 },
  { id: 25, area: 980, rooms: 2, bathrooms: 1, age: 27, distanceCenter: 13.0, price: 3400000 },

  { id: 26, area: 1300, rooms: 3, bathrooms: 2, age: 12, distanceCenter: 6.4, price: 6700000 },
  { id: 27, area: 1500, rooms: 3, bathrooms: 2, age: 4, distanceCenter: 3.6, price: 8200000 },
  { id: 28, area: 2150, rooms: 4, bathrooms: 3, age: 8, distanceCenter: 4.8, price: 11900000 },
  { id: 29, area: 2650, rooms: 5, bathrooms: 4, age: 5, distanceCenter: 2.2, price: 16500000 },
  { id: 30, area: 680, rooms: 1, bathrooms: 1, age: 32, distanceCenter: 14.1, price: 2800000 },

  { id: 31, area: 1150, rooms: 2, bathrooms: 2, age: 7, distanceCenter: 4.9, price: 6100000 },
  { id: 32, area: 1420, rooms: 3, bathrooms: 2, age: 18, distanceCenter: 8.3, price: 6900000 },
  { id: 33, area: 1980, rooms: 4, bathrooms: 3, age: 3, distanceCenter: 2.7, price: 11800000 },
  { id: 34, area: 2500, rooms: 4, bathrooms: 3, age: 13, distanceCenter: 5.7, price: 13200000 },
  { id: 35, area: 3100, rooms: 5, bathrooms: 4, age: 6, distanceCenter: 3.1, price: 18500000 },

  { id: 36, area: 820, rooms: 2, bathrooms: 1, age: 24, distanceCenter: 11.2, price: 3600000 },
  { id: 37, area: 1280, rooms: 3, bathrooms: 2, age: 10, distanceCenter: 5.8, price: 6500000 },
  { id: 38, area: 1780, rooms: 3, bathrooms: 2, age: 5, distanceCenter: 3.4, price: 9300000 },
  { id: 39, area: 2350, rooms: 4, bathrooms: 3, age: 4, distanceCenter: 2.4, price: 13900000 },
  { id: 40, area: 3600, rooms: 6, bathrooms: 4, age: 2, distanceCenter: 1.0, price: 24500000 },

  { id: 41, area: 950, rooms: 2, bathrooms: 1, age: 19, distanceCenter: 9.1, price: 4100000 },
  { id: 42, area: 1380, rooms: 3, bathrooms: 2, age: 11, distanceCenter: 6.1, price: 7000000 },
  { id: 43, area: 1880, rooms: 4, bathrooms: 3, age: 7, distanceCenter: 3.8, price: 10500000 },
  { id: 44, area: 2700, rooms: 5, bathrooms: 4, age: 3, distanceCenter: 1.9, price: 17500000 },
  { id: 45, area: 740, rooms: 1, bathrooms: 1, age: 29, distanceCenter: 12.8, price: 3000000 },

  { id: 46, area: 1080, rooms: 2, bathrooms: 2, age: 6, distanceCenter: 4.3, price: 5700000 },
  { id: 47, area: 1580, rooms: 3, bathrooms: 2, age: 9, distanceCenter: 5.0, price: 8100000 },
  { id: 48, area: 2200, rooms: 4, bathrooms: 3, age: 14, distanceCenter: 6.9, price: 11500000 },
  { id: 49, area: 2850, rooms: 5, bathrooms: 4, age: 4, distanceCenter: 2.0, price: 18000000 },
  { id: 50, area: 890, rooms: 2, bathrooms: 1, age: 26, distanceCenter: 10.7, price: 3800000 },

  { id: 51, area: 1220, rooms: 3, bathrooms: 2, age: 8, distanceCenter: 4.7, price: 6400000 },
  { id: 52, area: 1680, rooms: 3, bathrooms: 2, age: 20, distanceCenter: 8.9, price: 7600000 },
  { id: 53, area: 2070, rooms: 4, bathrooms: 3, age: 5, distanceCenter: 2.9, price: 12300000 },
  { id: 54, area: 2450, rooms: 4, bathrooms: 3, age: 9, distanceCenter: 4.6, price: 13500000 },
  { id: 55, area: 3250, rooms: 5, bathrooms: 4, age: 2, distanceCenter: 1.4, price: 22000000 },

  { id: 56, area: 700, rooms: 1, bathrooms: 1, age: 35, distanceCenter: 15.2, price: 2700000 },
  { id: 57, area: 1160, rooms: 2, bathrooms: 2, age: 13, distanceCenter: 7.0, price: 5900000 },
  { id: 58, area: 1480, rooms: 3, bathrooms: 2, age: 6, distanceCenter: 3.5, price: 7900000 },
  { id: 59, area: 1900, rooms: 4, bathrooms: 3, age: 10, distanceCenter: 5.3, price: 10700000 },
  { id: 60, area: 3050, rooms: 5, bathrooms: 4, age: 1, distanceCenter: 1.1, price: 20500000 },

  { id: 61, area: 1020, rooms: 2, bathrooms: 1, age: 17, distanceCenter: 8.6, price: 4400000 },
  { id: 62, area: 1360, rooms: 3, bathrooms: 2, age: 3, distanceCenter: 2.8, price: 7600000 },
  { id: 63, area: 1820, rooms: 4, bathrooms: 3, age: 12, distanceCenter: 6.5, price: 10100000 },
  { id: 64, area: 2550, rooms: 5, bathrooms: 4, age: 7, distanceCenter: 3.0, price: 15800000 },
  { id: 65, area: 3350, rooms: 6, bathrooms: 5, age: 2, distanceCenter: 0.8, price: 23500000 },

  { id: 66, area: 760, rooms: 2, bathrooms: 1, age: 23, distanceCenter: 11.8, price: 3300000 },
  { id: 67, area: 1240, rooms: 3, bathrooms: 2, age: 14, distanceCenter: 6.7, price: 6200000 },
  { id: 68, area: 1740, rooms: 3, bathrooms: 2, age: 8, distanceCenter: 4.1, price: 9000000 },
  { id: 69, area: 2300, rooms: 4, bathrooms: 3, age: 3, distanceCenter: 2.3, price: 13700000 },
  { id: 70, area: 2950, rooms: 5, bathrooms: 4, age: 5, distanceCenter: 2.6, price: 19000000 },

  { id: 71, area: 870, rooms: 2, bathrooms: 1, age: 28, distanceCenter: 12.1, price: 3700000 },
  { id: 72, area: 1320, rooms: 3, bathrooms: 2, age: 7, distanceCenter: 4.4, price: 7100000 },
  { id: 73, area: 1960, rooms: 4, bathrooms: 3, age: 6, distanceCenter: 3.2, price: 11600000 },
  { id: 74, area: 2750, rooms: 5, bathrooms: 4, age: 10, distanceCenter: 5.5, price: 16800000 },
  { id: 75, area: 3450, rooms: 6, bathrooms: 5, age: 1, distanceCenter: 0.7, price: 25000000 },

  { id: 76, area: 930, rooms: 2, bathrooms: 1, age: 21, distanceCenter: 9.5, price: 4000000 },
  { id: 77, area: 1520, rooms: 3, bathrooms: 2, age: 5, distanceCenter: 3.7, price: 8300000 },
  { id: 78, area: 2040, rooms: 4, bathrooms: 3, age: 8, distanceCenter: 4.9, price: 12000000 },
  { id: 79, area: 2600, rooms: 5, bathrooms: 4, age: 4, distanceCenter: 2.1, price: 16200000 },
  { id: 80, area: 3150, rooms: 5, bathrooms: 4, age: 3, distanceCenter: 1.6, price: 21000000 },

  { id: 81, area: 810, rooms: 2, bathrooms: 1, age: 31, distanceCenter: 13.5, price: 3100000 },
  { id: 82, area: 1190, rooms: 3, bathrooms: 2, age: 9, distanceCenter: 5.2, price: 6350000 },
  { id: 83, area: 1600, rooms: 3, bathrooms: 2, age: 16, distanceCenter: 7.8, price: 7700000 },
  { id: 84, area: 2150, rooms: 4, bathrooms: 3, age: 4, distanceCenter: 2.5, price: 12800000 },
  { id: 85, area: 2850, rooms: 5, bathrooms: 4, age: 6, distanceCenter: 3.4, price: 17700000 },

  { id: 86, area: 1000, rooms: 2, bathrooms: 2, age: 11, distanceCenter: 6.0, price: 5200000 },
  { id: 87, area: 1400, rooms: 3, bathrooms: 2, age: 13, distanceCenter: 6.8, price: 6800000 },
  { id: 88, area: 1870, rooms: 4, bathrooms: 3, age: 5, distanceCenter: 3.6, price: 10900000 },
  { id: 89, area: 2500, rooms: 5, bathrooms: 4, age: 2, distanceCenter: 1.7, price: 15500000 },
  { id: 90, area: 3550, rooms: 6, bathrooms: 5, age: 2, distanceCenter: 0.9, price: 24200000 },

  { id: 91, area: 680, rooms: 1, bathrooms: 1, age: 34, distanceCenter: 14.8, price: 2600000 },
  { id: 92, area: 1270, rooms: 3, bathrooms: 2, age: 10, distanceCenter: 5.6, price: 6600000 },
  { id: 93, area: 1760, rooms: 3, bathrooms: 2, age: 4, distanceCenter: 3.1, price: 9200000 },
  { id: 94, area: 2250, rooms: 4, bathrooms: 3, age: 7, distanceCenter: 4.3, price: 11700000 },
  { id: 95, area: 3000, rooms: 5, bathrooms: 4, age: 3, distanceCenter: 1.3, price: 20000000 },

  { id: 96, area: 920, rooms: 2, bathrooms: 1, age: 16, distanceCenter: 8.0, price: 4050000 },
  { id: 97, area: 1460, rooms: 3, bathrooms: 2, age: 6, distanceCenter: 3.8, price: 8050000 },
  { id: 98, area: 2080, rooms: 4, bathrooms: 3, age: 9, distanceCenter: 5.0, price: 12200000 },
  { id: 99, area: 2720, rooms: 5, bathrooms: 4, age: 4, distanceCenter: 2.0, price: 17000000 },
  { id: 100, area: 3300, rooms: 6, bathrooms: 5, age: 1, distanceCenter: 0.6, price: 23800000 },
];