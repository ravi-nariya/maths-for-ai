export type Vector2D = [number, number];

export type Matrix2D = [
  [number, number],
  [number, number]
];

export type TransformationType =
  | "identity"
  | "scaling"
  | "rotation"
  | "reflectionX"
  | "reflectionY"
  | "shearX"
  | "shearY"
  | "projectionX";

export interface TransformationOptions {
  scaleX: number;
  scaleY: number;
  angle: number;
  shear: number;
}

/**
 * Multiply a 2 × 2 matrix by a 2D vector.
 *
 *        ┌ a b ┐   ┌ x ┐
 * Mv  =  │     │ × │   │
 *        └ c d ┘   └ y ┘
 */
export function multiplyMatrixVector(
  matrix: Matrix2D,
  vector: Vector2D
): Vector2D {
  const x =
    matrix[0][0] * vector[0] +
    matrix[0][1] * vector[1];

  const y =
    matrix[1][0] * vector[0] +
    matrix[1][1] * vector[1];

  return [x, y];
}

/**
 * Identity
 *
 * [1 0]
 * [0 1]
 */
export function identityMatrix(): Matrix2D {
  return [
    [1, 0],
    [0, 1],
  ];
}

/**
 * Scaling
 *
 * [sx  0]
 * [ 0 sy]
 */
export function scalingMatrix(
  scaleX: number,
  scaleY: number
): Matrix2D {
  return [
    [scaleX, 0],
    [0, scaleY],
  ];
}

/**
 * Rotation
 *
 * [ cosθ  -sinθ]
 * [ sinθ   cosθ]
 */
export function rotationMatrix(
  angleDegrees: number
): Matrix2D {
  const angle =
    (angleDegrees * Math.PI) / 180;

  const cos = Math.cos(angle);
  const sin = Math.sin(angle);

  return [
    [cos, -sin],
    [sin, cos],
  ];
}

/**
 * Reflection across X-axis
 *
 * [1  0]
 * [0 -1]
 */
export function reflectionXMatrix(): Matrix2D {
  return [
    [1, 0],
    [0, -1],
  ];
}

/**
 * Reflection across Y-axis
 *
 * [-1 0]
 * [ 0 1]
 */
export function reflectionYMatrix(): Matrix2D {
  return [
    [-1, 0],
    [0, 1],
  ];
}

/**
 * Horizontal shearing
 *
 * [1 k]
 * [0 1]
 */
export function shearXMatrix(
  factor: number
): Matrix2D {
  return [
    [1, factor],
    [0, 1],
  ];
}

/**
 * Vertical shearing
 *
 * [1 0]
 * [k 1]
 */
export function shearYMatrix(
  factor: number
): Matrix2D {
  return [
    [1, 0],
    [factor, 1],
  ];
}

/**
 * Projection onto X-axis
 *
 * [1 0]
 * [0 0]
 */
export function projectionXMatrix(): Matrix2D {
  return [
    [1, 0],
    [0, 0],
  ];
}

/**
 * Return the appropriate transformation matrix.
 */
export function getTransformationMatrix(
  type: TransformationType,
  options: TransformationOptions
): Matrix2D {
  switch (type) {
    case "scaling":
      return scalingMatrix(
        options.scaleX,
        options.scaleY
      );

    case "rotation":
      return rotationMatrix(
        options.angle
      );

    case "reflectionX":
      return reflectionXMatrix();

    case "reflectionY":
      return reflectionYMatrix();

    case "shearX":
      return shearXMatrix(
        options.shear
      );

    case "shearY":
      return shearYMatrix(
        options.shear
      );

    case "projectionX":
      return projectionXMatrix();

    case "identity":
    default:
      return identityMatrix();
  }
}

/**
 * Apply a transformation to a single vector.
 */
export function transformVector(
  vector: Vector2D,
  type: TransformationType,
  options: TransformationOptions
): Vector2D {
  const matrix =
    getTransformationMatrix(
      type,
      options
    );

  return multiplyMatrixVector(
    matrix,
    vector
  );
}

/**
 * Apply a transformation to multiple points.
 */
export function transformPoints(
  points: Vector2D[],
  type: TransformationType,
  options: TransformationOptions
): Vector2D[] {
  return points.map((point) =>
    transformVector(
      point,
      type,
      options
    )
  );
}

/**
 * Format a matrix for display.
 */
export function formatMatrix(
  matrix: Matrix2D,
  decimals = 3
): string[][] {
  return matrix.map((row) =>
    row.map((value) =>
      value.toFixed(decimals)
    )
  );
}