"use client";

import { Vector2D } from "@/app/lib/math/transformations/transformations";

interface MetricGraphProps {
  pointA: Vector2D;
  pointB: Vector2D;
  ellipsePoints: Vector2D[];
}

const WIDTH = 700;
const HEIGHT = 550;

const SCALE = 55;

const ORIGIN_X = WIDTH / 2;
const ORIGIN_Y = HEIGHT / 2;

function toScreen(
  point: Vector2D
): [number, number] {
  return [
    ORIGIN_X + point[0] * SCALE,
    ORIGIN_Y - point[1] * SCALE,
  ];
}

function pointsToString(
  points: Vector2D[]
): string {
  return points
    .map((point) => {
      const [x, y] =
        toScreen(point);

      return `${x},${y}`;
    })
    .join(" ");
}

export default function MetricGraph({
  pointA,
  pointB,
  ellipsePoints,
}: MetricGraphProps) {

  const [ax, ay] =
    toScreen(pointA);

  const [bx, by] =
    toScreen(pointB);

  const [ox, oy] =
    toScreen([0, 0]);

  const euclideanDistance =
    Math.sqrt(
      Math.pow(
        pointA[0] - pointB[0],
        2
      ) +
        Math.pow(
          pointA[1] - pointB[1],
          2
        )
    );

  const euclideanCirclePoints =
    Array.from(
      { length: 101 },
      (_, index) => {
        const theta =
          (2 * Math.PI * index) /
          100;

        return [
          pointA[0] +
            euclideanDistance *
              Math.cos(theta),

          pointA[1] +
            euclideanDistance *
              Math.sin(theta),
        ] as Vector2D;
      }
    );

  return (
    <div className="rounded-xl border p-4">

      <h2 className="mb-4 text-lg font-semibold">
        Metric Visualization
      </h2>

      <div className="overflow-auto">

        <svg
          width={WIDTH}
          height={HEIGHT}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="mx-auto rounded-xl bg-gray-50 dark:bg-gray-950"
        >

          {/* Grid */}
          {Array.from(
            { length: 21 },
            (_, index) => {
              const offset =
                (index - 10) * SCALE;

              return (
                <g key={index}>

                  <line
                    x1={
                      ORIGIN_X + offset
                    }
                    y1={0}
                    x2={
                      ORIGIN_X + offset
                    }
                    y2={HEIGHT}
                    stroke="currentColor"
                    opacity={0.08}
                  />

                  <line
                    x1={0}
                    y1={
                      ORIGIN_Y + offset
                    }
                    x2={WIDTH}
                    y2={
                      ORIGIN_Y + offset
                    }
                    stroke="currentColor"
                    opacity={0.08}
                  />

                </g>
              );
            }
          )}

          {/* X axis */}
          <line
            x1={0}
            y1={ORIGIN_Y}
            x2={WIDTH}
            y2={ORIGIN_Y}
            stroke="currentColor"
            opacity={0.5}
          />

          {/* Y axis */}
          <line
            x1={ORIGIN_X}
            y1={0}
            x2={ORIGIN_X}
            y2={HEIGHT}
            stroke="currentColor"
            opacity={0.5}
          />

          {/* Euclidean circle */}
          <polygon
            points={pointsToString(
              euclideanCirclePoints
            )}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 6"
            opacity={0.3}
          />

          {/* Metric ellipse */}
          <polygon
            points={pointsToString(
              ellipsePoints
            )}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            opacity={0.8}
          />

          {/* Distance line */}
          <line
            x1={ax}
            y1={ay}
            x2={bx}
            y2={by}
            stroke="currentColor"
            strokeWidth="3"
          />

          {/* Point A */}
          <circle
            cx={ax}
            cy={ay}
            r="8"
            fill="currentColor"
          />

          {/* Point B */}
          <circle
            cx={bx}
            cy={by}
            r="8"
            fill="currentColor"
          />

          {/* Origin */}
          <circle
            cx={ox}
            cy={oy}
            r="4"
            fill="currentColor"
            opacity={0.5}
          />

          {/* A label */}
          <text
            x={ax + 12}
            y={ay - 12}
            fontSize="16"
            fontWeight="600"
            fill="currentColor"
          >
            A
          </text>

          {/* B label */}
          <text
            x={bx + 12}
            y={by - 12}
            fontSize="16"
            fontWeight="600"
            fill="currentColor"
          >
            B
          </text>

          {/* X */}
          <text
            x={WIDTH - 30}
            y={ORIGIN_Y - 10}
            fontSize="14"
            fill="currentColor"
          >
            X
          </text>

          {/* Y */}
          <text
            x={ORIGIN_X + 10}
            y={20}
            fontSize="14"
            fill="currentColor"
          >
            Y
          </text>

        </svg>

      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 text-sm">

        <div>
          <p className="text-gray-500">
            Point A
          </p>

          <p className="font-mono">
            [{pointA.join(", ")}]
          </p>
        </div>

        <div>
          <p className="text-gray-500">
            Point B
          </p>

          <p className="font-mono">
            [{pointB.join(", ")}]
          </p>
        </div>

        <div>
          <p className="text-gray-500">
            Difference
          </p>

          <p className="font-mono">
            [
            {(
              pointB[0] - pointA[0]
            ).toFixed(1)}
            ,{" "}
            {(
              pointB[1] - pointA[1]
            ).toFixed(1)}
            ]
          </p>
        </div>

      </div>

      <div className="mt-4 text-sm text-gray-500">
        Dashed boundary = Euclidean distance ·
        Solid boundary = weighted metric
      </div>

    </div>
  );
}