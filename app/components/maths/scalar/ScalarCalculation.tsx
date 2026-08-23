interface ScalarCalculationProps {
  x: number;
  w: number;
  b: number;
  y: number;
  verifiedY: number;
}

export default function ScalarCalculation({
  x,
  w,
  b,
  y,
  verifiedY,
}: ScalarCalculationProps) {
  return (
    <div className="space-y-4">

      <div>
        <p className="text-sm text-gray-500">
          Formula
        </p>

        <p className="text-2xl font-semibold">
          y = wx + b
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-500">
          Substitution
        </p>

        <p className="text-xl">
          y = ({w}) × ({x}) + ({b})
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-500">
          Computation
        </p>

        <p className="text-xl">
          y = {w * x} + {b}
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-500">
          Result
        </p>

        <p className="text-3xl font-bold">
          y = {y}
        </p>
      </div>
{/* 
      <div className="text-sm">
        math.js verification:{" "}
        <strong>{verifiedY}</strong>

        {y === verifiedY && (
          <span className="ml-2">
            ✓ Match
          </span>
        )}
      </div> */}

    </div>
  );
}