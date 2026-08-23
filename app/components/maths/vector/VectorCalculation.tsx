import { HouseVector } from "@/app/lib/math/vector/houseSimilarity";

type Props = {
  house: HouseVector;

  similarHouse?: HouseVector & {
    distance: number;
  };
};

export default function VectorCalculation({
  house,
  similarHouse,
}: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">
          House → Vector
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Each house is represented by five
          features.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="p-2">Feature</th>
              <th className="p-2">Value</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-2">
                Area
              </td>
              <td className="p-2">
                {house.area.toLocaleString()} sq ft
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-2">
                Rooms
              </td>
              <td className="p-2">
                {house.rooms}
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-2">
                Bathrooms
              </td>
              <td className="p-2">
                {house.bathrooms}
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-2">
                Age
              </td>
              <td className="p-2">
                {house.age} years
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-2">
                Distance from Center
              </td>
              <td className="p-2">
                {house.distanceCenter} km
              </td>
            </tr>

            <tr>
              <td className="p-2 font-medium">
                Price
              </td>
              <td className="p-2 font-medium">
                ₹{house.price.toLocaleString("en-IN")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6">
        <div className="rounded-lg bg-gray-50 p-4">
          <h3 className="font-semibold">
            Original Vector
          </h3>

          <code className="mt-2 block">
            [
            {house.vector.join(", ")}
            ]
          </code>
        </div>

        <div className="rounded-lg bg-gray-50 p-4">
          <h3 className="font-semibold">
            Scaled Vector
          </h3>

          <code className="mt-2 block">
            [
            {house.scaledVector
              .map(value =>
                value.toFixed(3)
              )
              .join(", ")}
            ]
          </code>
        </div>

        {similarHouse && (
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">
              Most Similar House
            </h3>

            <p className="mt-2">
              House {similarHouse.id}
            </p>

            <p className="mt-1 text-sm text-gray-600">
              Vector distance:{" "}
              {similarHouse.distance.toFixed(4)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}