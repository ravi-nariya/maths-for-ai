import { MetricMatrix2D } from "@/app/lib/math/metrics/metricTransformation";

interface MetricMatrixProps {
  matrix: MetricMatrix2D;
}

export default function MetricMatrix({
  matrix,
}: MetricMatrixProps) {
  return (
    <div className="rounded-xl border p-5">

      <h2 className="mb-4 text-lg font-semibold">
        Metric Matrix
      </h2>

      <div className="flex items-center justify-center">

        <span className="text-3xl">
          [
        </span>

        <div className="mx-5 space-y-3">

          {matrix.map(
            (row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-2 gap-10 font-mono text-xl"
              >
                {row.map(
                  (value, columnIndex) => (
                    <span
                      key={columnIndex}
                      className="text-center"
                    >
                      {formatValue(value)}
                    </span>
                  )
                )}
              </div>
            )
          )}

        </div>

        <span className="text-3xl">
          ]
        </span>

      </div>

      <div className="mt-5 text-center text-sm text-gray-500">
        M defines how the distance is measured.
      </div>

    </div>
  );
}

function formatValue(
  value: number
): string {
  if (
    Math.abs(value) < 0.0001
  ) {
    return "0";
  }

  return value.toFixed(2);
}