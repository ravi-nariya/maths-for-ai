"use client";

type Props = {
  selectedId: number;
  onChange: (id: number) => void;
  houseIds: number[];
};

export default function VectorControls({
  selectedId,
  onChange,
  houseIds,
}: Props) {
  return (
    <div className="rounded-lg border p-4">
      <label
        htmlFor="house-select"
        className="font-medium"
      >
        Select House
      </label>

      <select
        id="house-select"
        value={selectedId}
        onChange={event =>
          onChange(
            Number(event.target.value)
          )
        }
        className="ml-4 rounded-md border px-3 py-2"
      >
        {houseIds.map(id => (
          <option
            key={id}
            value={id}
          >
            House {id}
          </option>
        ))}
      </select>
    </div>
  );
}