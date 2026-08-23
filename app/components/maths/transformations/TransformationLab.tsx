"use client";

import { useMemo, useState } from "react";

import TransformationControls from "./TransformationControls";
import TransformationGraph from "./TransformationGraph";
import TransformationMatrix from "./TransformationMatrix";
import { getTransformationMatrix, multiplyMatrixVector, TransformationType, Vector2D } from "@/app/lib/math/transformations/transformations";


const ORIGINAL_VECTOR: Vector2D = [
  3,
  2,
];

const ORIGINAL_SHAPE: Vector2D[] = [
  [0, 0],
  [2, 0],
  [2, 2],
  [0, 2],
];

export default function TransformationLab() {

  const [type, setType] =
    useState<TransformationType>(
      "rotation"
    );

  const [angle, setAngle] =
    useState(45);

  const [scaleX, setScaleX] =
    useState(2);

  const [scaleY, setScaleY] =
    useState(1);

  const [shear, setShear] =
    useState(1);

  const options = {
    angle,
    scaleX,
    scaleY,
    shear,
  };

  const matrix = useMemo(
    () =>
      getTransformationMatrix(
        type,
        options
      ),
    [
      type,
      angle,
      scaleX,
      scaleY,
      shear,
    ]
  );

  const transformedVector =
    useMemo(
      () =>
        multiplyMatrixVector(
          matrix,
          ORIGINAL_VECTOR
        ),
      [matrix]
    );

  const transformedShape =
    useMemo(
      () =>
        ORIGINAL_SHAPE.map(
          (point) =>
            multiplyMatrixVector(
              matrix,
              point
            )
        ),
      [matrix]
    );

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Linear Transformation Lab
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Select a transformation and see
          how it changes a vector and shape.
        </p>
      </div>
    <div className="grid grid-cols-2 gap-6">
      {/* Controls */}
        <TransformationControls
          type={type}
          angle={angle}
          scaleX={scaleX}
          scaleY={scaleY}
          shear={shear}
          onTypeChange={setType}
          onAngleChange={setAngle}
          onScaleXChange={setScaleX}
          onScaleYChange={setScaleY}
          onShearChange={setShear}
        />
        <div>
            {/* Matrix */}
          <TransformationMatrix
            matrix={matrix}
          />

          {/* Calculation */}
          <div className="rounded-xl border p-5 mt-8">

            <h2 className="mb-4 text-lg font-semibold">
              Vector Calculation
            </h2>

            <div className="grid gap-4 md:grid-cols-3">

              <div>
                <p className="text-sm text-gray-500">
                  Input Vector
                </p>

                <p className="mt-1 font-mono text-lg">
                  [{ORIGINAL_VECTOR.join(", ")}]
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Transformation
                </p>

                <p className="mt-1 font-semibold">
                  {getTransformationName(type)}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Output Vector
                </p>

                <p className="mt-1 font-mono text-lg">
                  [
                  {transformedVector[0].toFixed(3)},
                  {" "}
                  {transformedVector[1].toFixed(3)}
                  ]
                </p>
              </div>

            </div>
          </div>
      </div>
    </div>
      {/* Main visualization */}
      <TransformationGraph
        originalPoints={ORIGINAL_SHAPE}
        transformedPoints={transformedShape}
        originalVector={ORIGINAL_VECTOR}
        transformedVector={
          transformedVector
        }
      />

    </div>
  );
}

function getTransformationName(
  type: TransformationType
): string {

  switch (type) {
    case "identity":
      return "Identity";

    case "scaling":
      return "Scaling";

    case "rotation":
      return "Rotation";

    case "reflectionX":
      return "Reflection X";

    case "reflectionY":
      return "Reflection Y";

    case "shearX":
      return "Shearing X";

    case "shearY":
      return "Shearing Y";

    case "projectionX":
      return "Projection X";

    default:
      return "Unknown";
  }
}