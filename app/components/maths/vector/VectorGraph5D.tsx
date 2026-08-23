"use client";

import { HouseVector } from "@/app/lib/math/vector/houseSimilarity";
import dynamic from "next/dynamic";

const Plot = dynamic(
  () => import("react-plotly.js"),
  {
    ssr: false,
  }
);

type Props = {
  houses: HouseVector[];
  selectedId: number;
  similarId?: number;
};

export default function VectorGraph5D({
  houses,
  selectedId,
  similarId,
}: Props) {
  /**
   * Each dimension is one feature.
   *
   * Dimension 1 → Area
   * Dimension 2 → Rooms
   * Dimension 3 → Bathrooms
   * Dimension 4 → Age
   * Dimension 5 → Distance from city center
   */

  const dimensions = [
    {
      label: "Area (sq ft)",
      values: houses.map(
        (house) => house.area
      ),
    },

    {
      label: "Rooms",
      values: houses.map(
        (house) => house.rooms
      ),
    },

    {
      label: "Bathrooms",
      values: houses.map(
        (house) => house.bathrooms
      ),
    },

    {
      label: "Age (years)",
      values: houses.map(
        (house) => house.age
      ),
    },

    {
      label: "Distance from Center (km)",
      values: houses.map(
        (house) =>
          house.distanceCenter
      ),
    },
  ];

  /**
   * Each house gets a color value.
   *
   * We use the house ID here only to
   * make different houses visually
   * distinguishable.
   */
  const colorValues = houses.map(
    (house) => house.id
  );

  /**
   * Selected and similar houses
   * are highlighted using line width.
   */
  const lineWidths = houses.map(
    (house) => {
      if (house.id === selectedId) {
        return 6;
      }

      if (house.id === similarId) {
        return 5;
      }

      return 1;
    }
  );

  const lineDashes = houses.map(
    (house) => {
      if (house.id === selectedId) {
        return "solid";
      }

      if (house.id === similarId) {
        return "dash";
      }

      return "solid";
    }
  );

  return (
    <div className="w-full overflow-hidden rounded-lg border bg-white">
      <Plot
        data={[
          {
            type: "parcoords",

            dimensions,

            line: {
              color: colorValues,

              width: lineWidths,

              dash: lineDashes as unknown,

              showscale: true,

              colorbar: {
                title: {
                  text: "House ID",
                },
              },
            },

            text: houses.map(
              (house) =>
                `House ${house.id}<br>` +
                `Price: ₹${house.price.toLocaleString(
                  "en-IN"
                )}`
            ),

            hovertemplate:
              "%{text}<extra></extra>",
          },
        ]}
        layout={{
          autosize: true,

          height: 650,

          title: {
            text:
              "5D House Vector Visualization",
          },

          margin: {
            l: 80,
            r: 80,
            t: 80,
            b: 40,
          },

          hovermode: "closest",

          paper_bgcolor: "white",

          plot_bgcolor: "white",
        }}
        config={{
          responsive: true,

          displaylogo: false,

          modeBarButtonsToRemove: [
            "lasso2d",
            "select2d",
          ],
        }}
        style={{
          width: "100%",
        }}
      />

      {/* Legend */}

      <div className="flex flex-wrap gap-6 border-t p-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-semibold">
            Selected:
          </span>

          <span>
            House {selectedId}
          </span>
        </div>

        {similarId && (
          <div className="flex items-center gap-2">
            <span className="font-semibold">
              Most Similar:
            </span>

            <span>
              House {similarId}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}