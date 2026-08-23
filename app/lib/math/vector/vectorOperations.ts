export function addVectors(
  a: number[],
  b: number[]
): number[] {
  validateSameDimensions(a, b);

  return a.map((value, index) => value + b[index]);
}

export function subtractVectors(
  a: number[],
  b: number[]
): number[] {
  validateSameDimensions(a, b);

  return a.map((value, index) => value - b[index]);
}

export function multiplyVector(
  vector: number[],
  scalar: number
): number[] {
  return vector.map(value => value * scalar);
}

export function magnitude(
  vector: number[]
): number {
  return Math.sqrt(
    vector.reduce(
      (sum, value) => sum + value ** 2,
      0
    )
  );
}

export function distance(
  a: number[],
  b: number[]
): number {
  return magnitude(
    subtractVectors(a, b)
  );
}

export function normalize(
  vector: number[]
): number[] {
  const length = magnitude(vector);

  if (length === 0) {
    return vector.map(() => 0);
  }

  return vector.map(
    value => value / length
  );
}

export function dotProduct(
  a: number[],
  b: number[]
): number {
  validateSameDimensions(a, b);

  return a.reduce(
    (sum, value, index) =>
      sum + value * b[index],
    0
  );
}

export function cosineSimilarity(
  a: number[],
  b: number[]
): number {
  const denominator =
    magnitude(a) * magnitude(b);

  if (denominator === 0) {
    return 0;
  }

  return dotProduct(a, b) / denominator;
}

/**
 * Min-Max scaling:
 *
 * scaled = (value - min) / (max - min)
 *
 * Converts values into the range 0 → 1.
 */
export function minMaxScale(
  values: number[]
): number[] {
  const min = Math.min(...values);
  const max = Math.max(...values);

  if (max === min) {
    return values.map(() => 0);
  }

  return values.map(
    value => (value - min) / (max - min)
  );
}

function validateSameDimensions(
  a: number[],
  b: number[]
): void {
  if (a.length !== b.length) {
    throw new Error(
      `Vector dimensions do not match: ${a.length} vs ${b.length}`
    );
  }
}