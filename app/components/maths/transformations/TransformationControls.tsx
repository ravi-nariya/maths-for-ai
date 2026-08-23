"use client";

import { TransformationType } from "@/app/lib/math/transformations/transformations";


interface TransformationControlsProps {
  type: TransformationType;
  angle: number;
  scaleX: number;
  scaleY: number;
  shear: number;

  onTypeChange: (
    type: TransformationType
  ) => void;

  onAngleChange: (
    value: number
  ) => void;

  onScaleXChange: (
    value: number
  ) => void;

  onScaleYChange: (
    value: number
  ) => void;

  onShearChange: (
    value: number
  ) => void;
}

export default function TransformationControls({
  type,
  angle,
  scaleX,
  scaleY,
  shear,
  onTypeChange,
  onAngleChange,
  onScaleXChange,
  onScaleYChange,
  onShearChange,
}: TransformationControlsProps) {
  return (
    <div className="space-y-6 rounded-xl border p-5">

      {/* Transformation selector */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Transformation
        </label>

        <select
          value={type}
          onChange={(event) =>
            onTypeChange(
              event.target.value as TransformationType
            )
          }
          className="w-full rounded-lg border px-3 py-2"
        >
          <option value="identity">
            Identity
          </option>

          <option value="scaling">
            Scaling
          </option>

          <option value="rotation">
            Rotation
          </option>

          <option value="reflectionX">
            Reflection X
          </option>

          <option value="reflectionY">
            Reflection Y
          </option>

          <option value="shearX">
            Shearing X
          </option>

          <option value="shearY">
            Shearing Y
          </option>

          <option value="projectionX">
            Projection X
          </option>
        </select>
      </div>

      {/* Rotation */}
      {type === "rotation" && (
        <div>
          <div className="mb-2 flex justify-between">
            <label className="text-sm font-medium">
              Rotation angle
            </label>

            <span className="text-sm">
              {angle}°
            </span>
          </div>

          <input
            type="range"
            min="-180"
            max="180"
            step="1"
            value={angle}
            onChange={(event) =>
              onAngleChange(
                Number(event.target.value)
              )
            }
            className="w-full"
          />
        </div>
      )}

      {/* Scaling */}
      {type === "scaling" && (
        <>
          <div>
            <div className="mb-2 flex justify-between">
              <label className="text-sm font-medium">
                Scale X
              </label>

              <span className="text-sm">
                {scaleX.toFixed(1)}
              </span>
            </div>

            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={scaleX}
              onChange={(event) =>
                onScaleXChange(
                  Number(event.target.value)
                )
              }
              className="w-full"
            />
          </div>

          <div>
            <div className="mb-2 flex justify-between">
              <label className="text-sm font-medium">
                Scale Y
              </label>

              <span className="text-sm">
                {scaleY.toFixed(1)}
              </span>
            </div>

            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={scaleY}
              onChange={(event) =>
                onScaleYChange(
                  Number(event.target.value)
                )
              }
              className="w-full"
            />
          </div>
        </>
      )}

      {/* Shearing */}
      {(type === "shearX" ||
        type === "shearY") && (
        <div>
          <div className="mb-2 flex justify-between">
            <label className="text-sm font-medium">
              Shear factor
            </label>

            <span className="text-sm">
              {shear.toFixed(1)}
            </span>
          </div>

          <input
            type="range"
            min="-3"
            max="3"
            step="0.1"
            value={shear}
            onChange={(event) =>
              onShearChange(
                Number(event.target.value)
              )
            }
            className="w-full"
          />
        </div>
      )}

      {/* Explanation */}
      <div className="rounded-lg bg-gray-50 p-4 text-sm dark:bg-gray-900">
        <p className="font-semibold">
          What does this do?
        </p>

        <p className="mt-1 text-gray-600 dark:text-gray-400">
          {getDescription(type)}
        </p>
      </div>
    </div>
  );
}

function getDescription(
  type: TransformationType
): string {
  switch (type) {
    case "identity":
      return "Leaves the vector unchanged.";

    case "scaling":
      return "Makes the object larger or smaller.";

    case "rotation":
      return "Rotates the vector around the origin.";

    case "reflectionX":
      return "Flips the vector across the X-axis.";

    case "reflectionY":
      return "Flips the vector across the Y-axis.";

    case "shearX":
      return "Slants the object horizontally.";

    case "shearY":
      return "Slants the object vertically.";

    case "projectionX":
      return "Projects the vector onto the X-axis.";

    default:
      return "";
  }
}