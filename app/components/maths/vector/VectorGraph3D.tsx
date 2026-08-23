"use client";

import { HouseVector } from "@/app/lib/math/vector/houseSimilarity";
import dynamic from "next/dynamic";

const Plot = dynamic(
  () => import("react-plotly.js"),
  {
    ssr: false,
  }
);

export type Feature3D =
  | "area"
  | "rooms"
  | "bathrooms"
  | "age"
  | "distanceCenter"
  | "price";

type Props = {
  houses: HouseVector[];
  selectedId: number;
  similarId?: number;

  xFeature: Feature3D;
  yFeature: Feature3D;
  zFeature: Feature3D;
};

const featureLabels: Record<
  Feature3D,
  string
> = {
  area: "Area (sq ft)",
  rooms: "Rooms",
  bathrooms: "Bathrooms",
  age: "Age (years)",
  distanceCenter: "Distance from Center (km)",
  price: "Price (₹)",
};

function getValue(
  house: HouseVector,
  feature: Feature3D
): number {
  return house[feature];
}

export default function VectorGraph3D({
  houses,
  selectedId,
  similarId,
  xFeature,
  yFeature,
  zFeature,
}: Props) {
  const x = houses.map((house) =>
    getValue(house, xFeature)
  );

  const y = houses.map((house) =>
    getValue(house, yFeature)
  );

  const z = houses.map((house) =>
    getValue(house, zFeature)
  );

  const selected = houses.find(
    (house) => house.id === selectedId
  );

  const similar = houses.find(
    (house) => house.id === similarId
  );

  const selectedTrace = selected
    ? {
        x: [
          getValue(selected, xFeature),
        ],
        y: [
          getValue(selected, yFeature),
        ],
        z: [
          getValue(selected, zFeature),
        ],
        type: "scatter3d" as const,
        mode: "markers+text" as const,

        text: [`House ${selected.id}`],

        textposition: "top center" as const,

        marker: {
          size: 10,
        },

        name: "Selected House",

        hovertemplate:
          `<b>House ${selected.id}</b><br>` +
          `Area: ${selected.area} sq ft<br>` +
          `Rooms: ${selected.rooms}<br>` +
          `Bathrooms: ${selected.bathrooms}<br>` +
          `Age: ${selected.age} years<br>` +
          `Distance: ${selected.distanceCenter} km<br>` +
          `Price: ₹${selected.price.toLocaleString(
            "en-IN"
          )}` +
          `<extra></extra>`,
      }
    : null;

  const similarTrace = similar
    ? {
        x: [
          getValue(similar, xFeature),
        ],
        y: [
          getValue(similar, yFeature),
        ],
        z: [
          getValue(similar, zFeature),
        ],
        type: "scatter3d" as const,
        mode: "markers+text" as const,

        text: [`House ${similar.id}`],

        textposition: "top center" as const,

        marker: {
          size: 9,
        },

        name: "Most Similar House",

        hovertemplate:
          `<b>House ${similar.id}</b><br>` +
          `Area: ${similar.area} sq ft<br>` +
          `Rooms: ${similar.rooms}<br>` +
          `Bathrooms: ${similar.bathrooms}<br>` +
          `Age: ${similar.age} years<br>` +
          `Distance: ${similar.distanceCenter} km<br>` +
          `Price: ₹${similar.price.toLocaleString(
            "en-IN"
          )}` +
          `<extra></extra>`,
      }
    : null;

  const distanceTrace =
    selected && similar
      ? {
          x: [
            getValue(selected, xFeature),
            getValue(similar, xFeature),
          ],

          y: [
            getValue(selected, yFeature),
            getValue(similar, yFeature),
          ],

          z: [
            getValue(selected, zFeature),
            getValue(similar, zFeature),
          ],

          type: "scatter3d" as const,
          mode: "lines" as const,

          line: {
            width: 5,
            dash: "dash" as const,
          },

          name: "Distance",
        }
      : null;

  const traces = [
    {
      x,
      y,
      z,

      type: "scatter3d" as const,

      mode: "markers" as const,

      marker: {
        size: 5,
      },

      name: "Houses",

      text: houses.map(
        (house) =>
          `House ${house.id}`
      ),

      hovertemplate:
        `<b>%{text}</b><br>` +
        `Area: %{customdata[0]} sq ft<br>` +
        `Rooms: %{customdata[1]}<br>` +
        `Bathrooms: %{customdata[2]}<br>` +
        `Age: %{customdata[3]} years<br>` +
        `Distance: %{customdata[4]} km<br>` +
        `Price: ₹%{customdata[5]:,.0f}` +
        `<extra></extra>`,

      customdata: houses.map(
        (house) => [
          house.area,
          house.rooms,
          house.bathrooms,
          house.age,
          house.distanceCenter,
          house.price,
        ]
      ),
    },

    ...(selectedTrace
      ? [selectedTrace]
      : []),

    ...(similarTrace
      ? [similarTrace]
      : []),

    ...(distanceTrace
      ? [distanceTrace]
      : []),
  ];

  return (
    <div className="w-full overflow-hidden rounded-lg border bg-white">
      <Plot
        data={traces}
        layout={{
          autosize: true,

          height: 650,

          title: {
            text: "3D House Vector Visualization",
          },

          scene: {
            xaxis: {
              title: {
                text: featureLabels[
                  xFeature
                ],
              },
            },

            yaxis: {
              title: {
                text: featureLabels[
                  yFeature
                ],
              },
            },

            zaxis: {
              title: {
                text: featureLabels[
                  zFeature
                ],
              },
            },

            camera: {
              eye: {
                x: 1.5,
                y: 1.5,
                z: 1.2,
              },
            },
          },

          margin: {
            l: 0,
            r: 0,
            t: 50,
            b: 0,
          },

          showlegend: true,
        }}
        config={{
          responsive: true,

          displaylogo: false,
        }}
        style={{
          width: "100%",
        }}
      />
    </div>
  );
}