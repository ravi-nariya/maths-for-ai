import { evaluate } from "mathjs";

export function verifyLinearEquation(x: number, weight: number, bias: number): number {
    return evaluate("weight * x + bias", { x, weight, bias });
}