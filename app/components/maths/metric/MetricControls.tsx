"use client";

interface MetricControlsProps {
  weightX: number;
  weightY: number;

  onWeightXChange: (
    value: number
  ) => void;

  onWeightYChange: (
    value: number
  ) => void;
}

export default function MetricControls({
  weightX,
  weightY,
  onWeightXChange,
  onWeightYChange,
}: MetricControlsProps) {
  return (
    <div className="space-y-6 rounded-xl border p-5">

      <div>
        <h2 className="text-lg font-semibold">
          Metric Controls
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Change how strongly each dimension
          contributes to distance.
        </p>
      </div>

      {/* X weight */}
      <div>
        <div className="mb-2 flex justify-between">
          <label className="text-sm font-medium">
            X Weight
          </label>

          <span className="font-mono text-sm">
            {weightX.toFixed(1)}
          </span>
        </div>

        <input
          type="range"
          min="0.1"
          max="10"
          step="0.1"
          value={weightX}
          onChange={(event) =>
            onWeightXChange(
              Number(event.target.value)
            )
          }
          className="w-full"
        />
      </div>

      {/* Y weight */}
      <div>
        <div className="mb-2 flex justify-between">
          <label className="text-sm font-medium">
            Y Weight
          </label>

          <span className="font-mono text-sm">
            {weightY.toFixed(1)}
          </span>
        </div>

        <input
          type="range"
          min="0.1"
          max="10"
          step="0.1"
          value={weightY}
          onChange={(event) =>
            onWeightYChange(
              Number(event.target.value)
            )
          }
          className="w-full"
        />
      </div>

      {/* Presets */}
      <div>
        <p className="mb-2 text-sm font-medium">
          Presets
        </p>

        <div className="flex flex-wrap gap-2">

          <button
            type="button"
            onClick={() => {
              onWeightXChange(1);
              onWeightYChange(1);
            }}
            className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Euclidean
          </button>

          <button
            type="button"
            onClick={() => {
              onWeightXChange(3);
              onWeightYChange(1);
            }}
            className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            X × 3
          </button>

          <button
            type="button"
            onClick={() => {
              onWeightXChange(1);
              onWeightYChange(3);
            }}
            className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Y × 3
          </button>

          <button
            type="button"
            onClick={() => {
              onWeightXChange(5);
              onWeightYChange(1);
            }}
            className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            X × 5
          </button>

        </div>
      </div>

      {/* Explanation */}
      <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">

        <p className="font-semibold">
          What does weight mean?
        </p>

        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          A larger weight means that movement
          along that dimension contributes more
          to the measured distance.
        </p>

      </div>
    </div>
  );
}