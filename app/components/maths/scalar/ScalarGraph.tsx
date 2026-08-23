"use client";

import {
  useEffect,
  useRef,
} from "react";

import * as d3 from "d3";
import { generateScalarPoints } from "@/app/lib/math/scalar/scalarPoints";

interface ScalarGraphProps {
  w: number;
  b: number;
}

export default function ScalarGraph({
  w,
  b,
}: ScalarGraphProps) {
  const svgRef =
    useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) {
      return;
    }

    const width = 700;
    const height = 450;

    const margin = {
      top: 30,
      right: 30,
      bottom: 50,
      left: 60,
    };

    const svg =
      d3.select(svgRef.current);

      const container = d3.select(
  svgRef.current.parentElement
);

const tooltip = container
  .append("div")
  .style("position", "absolute")
  .style("opacity", 0)
  .style("pointer-events", "none")
  .style("background", "white")
  .style("border", "1px solid #ccc")
  .style("border-radius", "6px")
  .style("padding", "8px 12px")
  .style("font-size", "14px")
  .style("box-shadow", "0 2px 8px rgba(0,0,0,0.15)");

    svg.selectAll("*").remove();

    const data =
      generateScalarPoints(w, b);

    const xScale =
      d3.scaleLinear()
        .domain([0, 10])
        .range([
          margin.left,
          width - margin.right,
        ]);

    const yValues =
      data.map((point) => point.y);

    const yMin = d3.min(yValues) ?? 0
    const yMax = d3.max(yValues) ?? 10;

    const yScale =
      d3.scaleLinear()
        .domain([yMin, yMax])
        .nice()
        .range([
          height - margin.bottom,
          margin.top,
        ]);

    // X axis
    svg
      .append("g")
      .attr(
        "transform",
        `translate(0, ${
          height - margin.bottom
        })`
      )
      .call(
        d3.axisBottom(xScale)
      );

    // Y axis
    svg
      .append("g")
      .attr(
        "transform",
        `translate(${margin.left}, 0)`
      )
      .call(
        d3.axisLeft(yScale)
      );

    // Line
    const line =
      d3.line<{
        x: number;
        y: number;
      }>()
      .x((point) =>
        xScale(point.x)
      )
      .y((point) =>
        yScale(point.y)
      );

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr(
        "stroke",
        "currentColor"
      )
      .attr(
        "stroke-width",
        3
      )
      .attr("d", line);

      svg
  .selectAll(".data-point")
  .data(data)
  .enter()
  .append("circle")
  .attr("class", "data-point")
  .attr("cx", (point) => xScale(point.x))
  .attr("cy", (point) => yScale(point.y))
  .attr("r", 5)
  .attr("fill", "white")
  .attr("stroke", "currentColor")
  .attr("stroke-width", 2)
  .style("cursor", "pointer")
  .on("mouseenter", function (event, point) {
    d3.select(this)
      .transition()
      .duration(150)
      .attr("r", 7);

    tooltip
      .style("opacity", 1)
      .html(`
        <div>
          <strong>Point</strong>
        </div>
        <div>x = ${point.x}</div>
        <div>y = ${point.y}</div>
      `)
      .style("left", `${event.offsetX + 15}px`)
      .style("top", `${event.offsetY - 15}px`);
  })
  .on("mouseleave", function () {
    d3.select(this)
      .transition()
      .duration(150)
      .attr("r", 5);

    tooltip
      .style("opacity", 0);
  });

  }, [w, b]);

  return (
    <div className="relative w-full overflow-hidden">
      <svg
        ref={svgRef}
        viewBox="0 0 700 450"
        className="w-full"
      />
    </div>
  );
}