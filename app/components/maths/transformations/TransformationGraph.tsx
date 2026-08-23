"use client";

import { Vector2D } from "@/app/lib/math/transformations/transformations";


interface TransformationGraphProps {
  originalPoints: Vector2D[];
  transformedPoints: Vector2D[];
  originalVector: Vector2D;
  transformedVector: Vector2D;
}

const WIDTH = 600;
const HEIGHT = 500;

const SCALE = 50;

const ORIGIN_X = WIDTH / 2;
const ORIGIN_Y = HEIGHT / 2;

function toScreen(
  point: Vector2D
): [number, number] {
  const [x, y] = point;

  return [
    ORIGIN_X + x * SCALE,
    ORIGIN_Y - y * SCALE,
  ];
}

function pointsToString(
  points: Vector2D[]
): string {
  return points
    .map((point) => {
      const [x, y] = toScreen(point);

      return `${x},${y}`;
    })
    .join(" ");
}

export default function TransformationGraph({
  originalPoints,
  transformedPoints,
  originalVector,
  transformedVector,
}: TransformationGraphProps) {

  const originalVectorStart = toScreen([
    0,
    0,
  ]);

  const originalVectorEnd =
    toScreen(originalVector);

  const transformedVectorStart =
    toScreen([0, 0]);

  const transformedVectorEnd =
    toScreen(transformedVector);

  return (
    <div className="rounded-xl border p-4">

      <h2 className="mb-3 text-lg font-semibold">
        Transformation Visualization
      </h2>

      <div className="overflow-auto">

        <svg
          width={WIDTH}
          height={HEIGHT}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="mx-auto rounded-lg bg-gray-50 dark:bg-gray-950"
        >

          {/* Grid */}
          {Array.from(
            { length: 21 },
            (_, index) => {
              const offset =
                (index - 10) * SCALE;

              return (
                <g key={index}>

                  {/* Vertical */}
                  <line
                    x1={ORIGIN_X + offset}
                    y1={0}
                    x2={ORIGIN_X + offset}
                    y2={HEIGHT}
                    stroke="currentColor"
                    opacity={0.08}
                  />

                  {/* Horizontal */}
                  <line
                    x1={0}
                    y1={ORIGIN_Y + offset}
                    x2={WIDTH}
                    y2={ORIGIN_Y + offset}
                    stroke="currentColor"
                    opacity={0.08}
                  />

                </g>
              );
            }
          )}

          {/* X-axis */}
          <line
            x1={0}
            y1={ORIGIN_Y}
            x2={WIDTH}
            y2={ORIGIN_Y}
            stroke="currentColor"
            opacity={0.4}
          />

          {/* Y-axis */}
          <line
            x1={ORIGIN_X}
            y1={0}
            x2={ORIGIN_X}
            y2={HEIGHT}
            stroke="currentColor"
            opacity={0.4}
          />

          {/* Original shape */}
          <polygon
            points={pointsToString(
              originalPoints
            )}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 5"
            opacity={0.5}
          />

          {/* Transformed shape */}
          <polygon
            points={pointsToString(
              transformedPoints
            )}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />

          {/* Original vector */}
          <line
            x1={originalVectorStart[0]}
            y1={originalVectorStart[1]}
            x2={originalVectorEnd[0]}
            y2={originalVectorEnd[1]}
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5 5"
            opacity={0.5}
          />

          {/* Transformed vector */}
          <line
            x1={transformedVectorStart[0]}
            y1={transformedVectorStart[1]}
            x2={transformedVectorEnd[0]}
            y2={transformedVectorEnd[1]}
            stroke="currentColor"
            strokeWidth="4"
          />

          {/* Original endpoint */}
          <circle
            cx={originalVectorEnd[0]}
            cy={originalVectorEnd[1]}
            r="5"
            fill="currentColor"
            opacity={0.5}
          />

          {/* Transformed endpoint */}
          <circle
            cx={transformedVectorEnd[0]}
            cy={transformedVectorEnd[1]}
            r="6"
            fill="currentColor"
          />

          {/* Origin */}
          <circle
            cx={ORIGIN_X}
            cy={ORIGIN_Y}
            r="4"
            fill="currentColor"
          />

          {/* Labels */}
          <text
            x={WIDTH - 25}
            y={ORIGIN_Y - 10}
            fontSize="14"
            fill="currentColor"
          >
            X
          </text>

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

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">

        <div>
          <p className="font-semibold">
            Original
          </p>

          <p className="font-mono">
            [{originalVector[0]}, {originalVector[1]}]
          </p>
        </div>

        <div>
          <p className="font-semibold">
            Transformed
          </p>

          <p className="font-mono">
            [
            {transformedVector[0].toFixed(3)},
            {" "}
            {transformedVector[1].toFixed(3)}
            ]
          </p>
        </div>

      </div>

      <div className="mt-4 text-sm text-gray-500">
        Dashed shape = original · Solid shape =
        transformed
      </div>
    </div>
  );
}