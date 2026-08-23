"use client";

interface ScalarControlsProps {
  x: number;
  w: number;
  b: number;

  onXChange: (value: number) => void;
  onWChange: (value: number) => void;
  onBChange: (value: number) => void;
}

export default function ScalarControls({
  x,
  w,
  b,
  onXChange,
  onWChange,
  onBChange,
}: ScalarControlsProps) {
  return (
    <div className="space-y-6">

      {/* X */}
      <div>
        <label className="block mb-2">
          Input (x):{" "}
          <strong>{x}</strong>
        </label>

        <input
          type="range"
          min="0"
          max="10"
          step="1"
          value={x}
          onChange={(event) =>
            onXChange(
              Number(event.target.value)
            )
          }
          className="w-full"
        />
      </div>

      {/* W */}
      <div>
        <label className="block mb-2">
          Weight (w):{" "}
          <strong>{w}</strong>
        </label>

        <input
          type="range"
          min="0"
          max="10"
          step="1"
          value={w}
          onChange={(event) =>
            onWChange(
              Number(event.target.value)
            )
          }
          className="w-full"
        />
      </div>

      {/* B */}
      <div>
        <label className="block mb-2">
          Bias (b):{" "}
          <strong>{b}</strong>
        </label>

        <input
          type="range"
          min="0"
          max="20"
          step="1"
          value={b}
          onChange={(event) =>
            onBChange(
              Number(event.target.value)
            )
          }
          className="w-full"
        />
      </div>

    </div>
  );
}