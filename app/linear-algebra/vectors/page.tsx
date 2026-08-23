import VectorPlayground from "@/app/components/maths/vector/VectorPlayground";

export default function VectorPage() {
  return (
    <main className="mx-auto p-8">
      <h1 className="text-3xl font-bold">
        Vector Playground
      </h1>

      <p className="mt-2 text-gray-600">
        Explore how real-world houses can be
        represented as mathematical vectors.
      </p>

      <div className="mt-8">
        <VectorPlayground />
      </div>
    </main>
  );
}