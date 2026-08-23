import { Matrix2D } from "@/app/lib/math/transformations/transformations";

interface TransformationMatrixProps {
  matrix: Matrix2D;
}

export default function TransformationMatrix({
  matrix,
}: TransformationMatrixProps) {
  return (
    <div className="rounded-xl border p-5">

      <h2 className="mb-4 text-lg font-semibold">
        Transformation Matrix
      </h2>

      <div className="flex items-center justify-center">

        <div className="text-3xl">
          [
        </div>

        <div className="mx-3 space-y-2">
          {matrix.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-2 gap-8 font-mono text-lg"
            >
              {row.map(
                (value, columnIndex) => (
                  <span
                    key={columnIndex}
                    className="text-center"
                  >
                    {formatNumber(value)}
                  </span>
                )
              )}
            </div>
          ))}
        </div>

        <div className="text-3xl">
          ]
        </div>

      </div>
    </div>
  );
}

function formatNumber(
  value: number
): string {
  if (Math.abs(value) < 0.0005) {
    return "0";
  }

  return value.toFixed(3);
}