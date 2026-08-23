import { ScalarPoint } from "@/types/math";
import {
  linearEquation,
} from "./linearEquation";


export function generateScalarPoints(
  w: number,
  b: number,
  minX: number = 0,
  maxX: number = 10,
  step: number = 1
): ScalarPoint[] {
  const points: ScalarPoint[] = [];

  for (
    let x = minX;
    x <= maxX;
    x += step
  ) {
    points.push({
      x,
      y: linearEquation(x, w, b),
    });
  }

  return points;
}