export type Vector2D = [number, number];

export type MetricMatrix2D = [
  [number, number],
  [number, number]
];

/**
 * Create a weighted metric matrix.
 *
 * M = [ wx   0 ]
 *     [  0  wy ]
 *
 * wx = importance/weight of X
 * wy = importance/weight of Y
 */
export function createWeightedMetric(
  weightX: number,
  weightY: number
): MetricMatrix2D {
  return [
    [weightX, 0],
    [0, weightY],
  ];
}

/**
 * Subtract two vectors.
 *
 * A - B
 */
export function subtractVectors(
  a: Vector2D,
  b: Vector2D
): Vector2D {
  return [
    a[0] - b[0],
    a[1] - b[1],
  ];
}

/**
 * Dot product of two vectors.
 */
export function dotProduct(
  a: Vector2D,
  b: Vector2D
): number {
  return (
    a[0] * b[0] +
    a[1] * b[1]
  );
}

/**
 * Multiply a 2 × 2 matrix by a vector.
 */
export function multiplyMatrixVector(
  matrix: MetricMatrix2D,
  vector: Vector2D
): Vector2D {
  return [
    matrix[0][0] * vector[0] +
      matrix[0][1] * vector[1],

    matrix[1][0] * vector[0] +
      matrix[1][1] * vector[1],
  ];
}

/**
 * Calculate ordinary Euclidean distance.
 *
 * d = √((x1-x2)² + (y1-y2)²)
 */
export function euclideanDistance(
  a: Vector2D,
  b: Vector2D
): number {
  const difference =
    subtractVectors(a, b);

  return Math.sqrt(
    dotProduct(
      difference,
      difference
    )
  );
}

/**
 * Calculate weighted metric distance.
 *
 * dM(x,y) = √((x-y)^T M (x-y))
 */
export function metricDistance(
  a: Vector2D,
  b: Vector2D,
  metric: MetricMatrix2D
): number {
  const difference =
    subtractVectors(a, b);

  const weightedDifference =
    multiplyMatrixVector(
      metric,
      difference
    );

  const squaredDistance =
    dotProduct(
      difference,
      weightedDifference
    );

  return Math.sqrt(
    Math.max(0, squaredDistance)
  );
}

/**
 * Calculate the difference vector.
 */
export function differenceVector(
  a: Vector2D,
  b: Vector2D
): Vector2D {
  return subtractVectors(a, b);
}

/**
 * Return the metric contribution
 * from each dimension.
 */
export function metricContributions(
  a: Vector2D,
  b: Vector2D,
  weightX: number,
  weightY: number
) {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];

  return {
    x: weightX * dx * dx,
    y: weightY * dy * dy,
  };
}

/**
 * Calculate an equal-distance boundary.
 *
 * For a diagonal metric:
 *
 * wx*x² + wy*y² = distance²
 *
 * This creates an ellipse.
 */
export function generateMetricEllipse(
  center: Vector2D,
  distance: number,
  weightX: number,
  weightY: number,
  segments = 100
): Vector2D[] {
  const points: Vector2D[] = [];

  const radiusX =
    distance / Math.sqrt(weightX);

  const radiusY =
    distance / Math.sqrt(weightY);

  for (
    let i = 0;
    i <= segments;
    i++
  ) {
    const theta =
      (2 * Math.PI * i) /
      segments;

    points.push([
      center[0] +
        radiusX * Math.cos(theta),

      center[1] +
        radiusY * Math.sin(theta),
    ]);
  }

  return points;
}