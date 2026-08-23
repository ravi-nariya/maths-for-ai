"use client";

import { useState } from "react";

import ScalarControls from "./ScalarControls";
import ScalarCalculation from "./ScalarCalculation";
import ScalarGraph from "./ScalarGraph";
import { linearEquation } from "@/app/lib/math/scalar/linearEquation";
import { verifyLinearEquation } from "@/app/lib/math/scalar/verifyScalar";

export default function ScalarPlayground() {

  const [x, setX] = useState(5);

  const [w, setW] = useState(3);

  const [b, setB] = useState(10);

  const y =
    linearEquation(x, w, b);

  const verifiedY =
    verifyLinearEquation(
      x,
      w,
      b
    );

  return (
    <div className="space-y-10">

      <header>
        <h1 className="text-4xl font-bold">
          Scalar Playground
        </h1>

        <p className="mt-2 text-gray-600">
          Explore the linear equation
          y = wx + b
        </p>
      </header>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <section className="rounded-xl border p-6">
        <h2 className="text-xl font-semibold mb-6">
          Parameters
        </h2>

        <ScalarControls
          x={x}
          w={w}
          b={b}
          onXChange={setX}
          onWChange={setW}
          onBChange={setB}
        />

            <section className="mt-8">

        <ScalarCalculation
          x={x}
          w={w}
          b={b}
          y={y}
          verifiedY={verifiedY}
        />

      </section>

      </section>

      <section className="rounded-xl border p-6">

        <h2 className="text-xl font-semibold mb-6">
          Visualization
        </h2>

        <ScalarGraph
          w={w}
          b={b}
        />

      </section>
      </div> 

    </div>
  );
}