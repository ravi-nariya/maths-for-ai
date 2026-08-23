import {
  distance,
  minMaxScale,
} from "./vectorOperations";

import type { House } from "./houseData";

export type HouseVector = House & {
  vector: number[];
  scaledVector: number[];
};

export function houseToVector(
  house: House
): number[] {
  return [
    house.area,
    house.rooms,
    house.bathrooms,
    house.age,
    house.distanceCenter,
  ];
}

export function createHouseVectors(
  houses: House[]
): HouseVector[] {
  const areas = houses.map(
    house => house.area
  );

  const rooms = houses.map(
    house => house.rooms
  );

  const bathrooms = houses.map(
    house => house.bathrooms
  );

  const ages = houses.map(
    house => house.age
  );

  const distances = houses.map(
    house => house.distanceCenter
  );

  // Scale each feature independently.
  const scaledAreas =
    minMaxScale(areas);

  const scaledRooms =
    minMaxScale(rooms);

  const scaledBathrooms =
    minMaxScale(bathrooms);

  const scaledAges =
    minMaxScale(ages);

  const scaledDistances =
    minMaxScale(distances);

  return houses.map((house, index) => ({
    ...house,

    vector: houseToVector(house),

    scaledVector: [
      scaledAreas[index],
      scaledRooms[index],
      scaledBathrooms[index],
      scaledAges[index],
      scaledDistances[index],
    ],
  }));
}

export function findMostSimilarHouse(
  houses: HouseVector[],
  selectedId: number
) {
  const selected = houses.find(
    house => house.id === selectedId
  );

  if (!selected) {
    return null;
  }

  return houses
    .filter(
      house => house.id !== selectedId
    )
    .map(house => ({
      ...house,

      distance: distance(
        selected.scaledVector,
        house.scaledVector
      ),
    }))
    .sort(
      (a, b) => a.distance - b.distance
    )[0];
}