"use client";

import { useMemo, useState } from "react";

import VectorControls from "./VectorControls";

import VectorCalculation from "./VectorCalculation";

import VectorGraph3D, {
  type Feature3D,
} from "./VectorGraph3D";
import VectorGraph5D from "./VectorGraph5D";
import { createHouseVectors, findMostSimilarHouse } from "@/app/lib/math/vector/houseSimilarity";
import { houses } from "@/app/lib/math/vector/houseData";

const features: Feature3D[] = [
  "area",
  "rooms",
  "bathrooms",
  "age",
  "distanceCenter",
  "price",
];

const featureLabels: Record<
  Feature3D,
  string
> = {
  area: "Area",
  rooms: "Rooms",
  bathrooms: "Bathrooms",
  age: "Age",
  distanceCenter: "Distance from Center",
  price: "Price",
};

export default function VectorPlayground() {
  const [selectedId, setSelectedId] =
    useState(3);

  const [xFeature, setXFeature] =
    useState<Feature3D>("area");

  const [yFeature, setYFeature] =
    useState<Feature3D>("rooms");

  const [zFeature, setZFeature] =
    useState<Feature3D>("price");

  const houseVectors = useMemo(
    () => createHouseVectors(houses),
    []
  );

  const similarHouse = useMemo(
    () =>
      findMostSimilarHouse(
        houseVectors,
        selectedId
      ),
    [
      houseVectors,
      selectedId,
    ]
  );

  const selectedHouse =
    houseVectors.find(
      (house) => house.id === selectedId
    );

  if (!selectedHouse) {
    return null;
  }

  return (
    <div className="space-y-8">

      <div className="space-y-6 grod grid-cols-2 gap-6 md:grid">

            {/* House selection */}
            <div className="space-y-4 gap-6">
              <VectorControls
                selectedId={selectedId}
                onChange={setSelectedId}
                houseIds={houses.map(
                  (house) => house.id
                )}
              />

              {/* 3D Axis Controls */}

              <div className="rounded-lg border p-5">

                <h2 className="mb-4 text-xl font-semibold">
                  3D Vector Axes
                </h2>

                <div className="grid gap-4 md:grid-cols-3">

                  {/* X */}

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      X Axis
                    </label>

                    <select
                      value={xFeature}
                      onChange={(event) =>
                        setXFeature(
                          event.target
                            .value as Feature3D
                        )
                      }
                      className="w-full rounded border px-3 py-2"
                    >
                      {features.map(
                        (feature) => (
                          <option
                            key={feature}
                            value={feature}
                          >
                            {featureLabels[
                              feature
                            ]}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  {/* Y */}

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Y Axis
                    </label>

                    <select
                      value={yFeature}
                      onChange={(event) =>
                        setYFeature(
                          event.target
                            .value as Feature3D
                        )
                      }
                      className="w-full rounded border px-3 py-2"
                    >
                      {features.map(
                        (feature) => (
                          <option
                            key={feature}
                            value={feature}
                          >
                            {featureLabels[
                              feature
                            ]}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  {/* Z */}

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Z Axis
                    </label>

                    <select
                      value={zFeature}
                      onChange={(event) =>
                        setZFeature(
                          event.target
                            .value as Feature3D
                        )
                      }
                      className="w-full rounded border px-3 py-2"
                    >
                      {features.map(
                        (feature) => (
                          <option
                            key={feature}
                            value={feature}
                          >
                            {featureLabels[
                              feature
                            ]}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                </div>
              </div>
            </div>

            {/* Selected house calculation */}

            <VectorCalculation
              house={selectedHouse}
              similarHouse={
                similarHouse ?? undefined
              }
            />
      </div>
      {/* 3D Graph */}

      <section>

        <h2 className="mb-2 text-xl font-semibold">
          3D House Vector Space
        </h2>

        <p className="mb-4 text-sm text-gray-600">
          Rotate, zoom and hover over houses
          to explore their relationships.
        </p>

        <VectorGraph3D
          houses={houseVectors}
          selectedId={selectedId}
          similarId={
            similarHouse?.id
          }
          xFeature={xFeature}
          yFeature={yFeature}
          zFeature={zFeature}
        />

      </section>

      <section className="mt-10">

  <h2 className="mb-2 text-xl font-semibold">
    5D House Vector Space
  </h2>

  <p className="mb-4 text-sm text-gray-600">
    Explore all five house features
    simultaneously using parallel coordinates.
  </p>

  <VectorGraph5D
    houses={houseVectors}
    selectedId={selectedId}
    similarId={
      similarHouse?.id
    }
  />

</section>

    </div>
  );
}