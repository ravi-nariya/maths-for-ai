"use client";

import {
  useMemo,
  useState,
} from "react";

import MetricControls from "./MetricControls";
import MetricGraph from "./MetricGraph";
import MetricMatrix from "./MetricMatrix";

import {
  createWeightedMetric,
  euclideanDistance,
  metricDistance,
  metricContributions,
  generateMetricEllipse,
  type Vector2D,
} from "@/app/lib/math/metrics/metricTransformation";

const POINT_A: Vector2D = [
  2,
  1,
];

const POINT_B: Vector2D = [
  5,
  3,
];

export default function MetricTransformationLab() {

  const [weightX, setWeightX] =
    useState(1);

  const [weightY, setWeightY] =
    useState(1);

  /*
   * Create metric matrix
   */
  const metric =
    useMemo(
      () =>
        createWeightedMetric(
          weightX,
          weightY
        ),
      [weightX, weightY]
    );

  /*
   * Euclidean distance
   */
  const euclidean =
    useMemo(
      () =>
        euclideanDistance(
          POINT_A,
          POINT_B
        ),
      []
    );

  /*
   * Metric distance
   */
  const weightedDistance =
    useMemo(
      () =>
        metricDistance(
          POINT_A,
          POINT_B,
          metric
        ),
      [metric]
    );

  /*
   * Contributions
   */
  const contributions =
    useMemo(
      () =>
        metricContributions(
          POINT_A,
          POINT_B,
          weightX,
          weightY
        ),
      [
        weightX,
        weightY,
      ]
    );

  /*
   * Equal metric distance ellipse
   */
  const ellipsePoints =
    useMemo(
      () =>
        generateMetricEllipse(
          POINT_A,
          euclidean,
          weightX,
          weightY
        ),
      [
        weightX,
        weightY,
        euclidean,
      ]
    );

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>

        <h1 className="text-3xl font-bold">
          Metric Transformation Lab
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Explore how changing the metric
          changes the measured distance between
          two points.
        </p>

      </div>

      {/* Concept */}
      <div className="rounded-xl border p-5">

        <h2 className="text-lg font-semibold">
          Core Idea
        </h2>

        <p className="mt-2">
          The points stay where they are.
          We change the mathematical rule used
          to measure the distance between them.
        </p>

      </div>

      {/* Controls */}
      <MetricControls
        weightX={weightX}
        weightY={weightY}
        onWeightXChange={setWeightX}
        onWeightYChange={setWeightY}
      />

      {/* Graph */}
      <MetricGraph
        pointA={POINT_A}
        pointB={POINT_B}
        ellipsePoints={ellipsePoints}
      />

   
    <div className="space-y-6 grid grid-cols-2 gap-6">
        {/* Distance comparison */}
        <div className="grid gap-4">
            {/* Matrix */}
                <MetricMatrix
                    matrix={metric}
                />
            <div className="rounded-xl border p-5">

            <p className="text-sm text-gray-500">
                Euclidean Distance
            </p>

            <p className="mt-2 text-3xl font-bold">
                {euclidean.toFixed(3)}
            </p>

            <p className="mt-2 text-sm text-gray-500">
                Uses equal importance for X and Y.
            </p>

            </div>

            <div className="rounded-xl border p-5">

            <p className="text-sm text-gray-500">
                Metric Distance
            </p>

            <p className="mt-2 text-3xl font-bold">
                {weightedDistance.toFixed(3)}
            </p>

            <p className="mt-2 text-sm text-gray-500">
                Uses the selected X/Y weights.
            </p>

            </div>

        </div>

        {/* Calculation */}
        <div className="rounded-xl border p-5">

            <h2 className="mb-5 text-lg font-semibold">
            Calculation
            </h2>

            <div className="space-y-5">

            <div>
                <p className="text-sm text-gray-500">
                Point A
                </p>

                <p className="font-mono">
                [{POINT_A.join(", ")}]
                </p>
            </div>

            <div>
                <p className="text-sm text-gray-500">
                Point B
                </p>

                <p className="font-mono">
                [{POINT_B.join(", ")}]
                </p>
            </div>

            <div>
                <p className="text-sm text-gray-500">
                Difference
                </p>

                <p className="font-mono">
                [
                {(
                    POINT_A[0] -
                    POINT_B[0]
                ).toFixed(2)}
                ,{" "}
                {(
                    POINT_A[1] -
                    POINT_B[1]
                ).toFixed(2)}
                ]
                </p>
            </div>

            <div>
                <p className="text-sm text-gray-500">
                X contribution
                </p>

                <p className="font-mono">
                {weightX.toFixed(1)}
                ×
                (
                {(
                    POINT_A[0] -
                    POINT_B[0]
                ).toFixed(2)}
                )²
                =
                {contributions.x.toFixed(3)}
                </p>
            </div>

            <div>
                <p className="text-sm text-gray-500">
                Y contribution
                </p>

                <p className="font-mono">
                {weightY.toFixed(1)}
                ×
                (
                {(
                    POINT_A[1] -
                    POINT_B[1]
                ).toFixed(2)}
                )²
                =
                {contributions.y.toFixed(3)}
                </p>
            </div>

            <div className="border-t pt-4">

                <p className="text-sm text-gray-500">
                Metric distance
                </p>

                <p className="font-mono text-lg">
                √(
                {contributions.x.toFixed(3)}
                +
                {contributions.y.toFixed(3)}
                )
                </p>

                <p className="mt-2 text-2xl font-bold">
                = {weightedDistance.toFixed(3)}
                </p>

            </div>

            </div>

        </div>
    </div>

      {/* Interpretation */}
      <div className="rounded-xl border p-5">

        <h2 className="text-lg font-semibold">
          What changed?
        </h2>

        <div className="mt-4 space-y-3 text-sm">

          <p>
            <strong>Points:</strong> A and B
            did not move.
          </p>

          <p>
            <strong>Coordinates:</strong> They
            stayed exactly the same.
          </p>

          <p>
            <strong>Metric:</strong> The importance
            of X and Y changed.
          </p>

          <p>
            <strong>Distance:</strong>{" "}
            {weightedDistance.toFixed(3)}
            {" "}
            instead of
            {" "}
            {euclidean.toFixed(3)}.
          </p>

        </div>

      </div>

    </div>
  );
}