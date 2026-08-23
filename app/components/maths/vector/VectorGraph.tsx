"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { HouseVector } from "@/app/lib/math/vector/houseSimilarity";
export type FeatureKey =
  | "area"
  | "rooms"
  | "bathrooms"
  | "age"
  | "distanceCenter";

type Props = {
  houses: HouseVector[];
  selectedId: number;
  similarId?: number;

  xFeature: FeatureKey;
  yFeature: FeatureKey;
};

const featureLabels: Record<
  FeatureKey,
  string
> = {
  area: "Area (sq ft)",
  rooms: "Rooms",
  bathrooms: "Bathrooms",
  age: "Age (years)",
  distanceCenter:
    "Distance from Center (km)",
};

export default function VectorGraph({
  houses,
  selectedId,
  similarId,
  xFeature,
  yFeature,
}: Props) {
  const svgRef =
    useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) {
      return;
    }

    const svg = d3.select(svgRef.current);

    svg.selectAll("*").remove();

    const width = 1400;
    const height = 520;

    const margin = {
      top: 40,
      right: 40,
      bottom: 70,
      left: 80,
    };

    const getValue = (
      house: HouseVector,
      feature: FeatureKey
    ): number => {
      return house[feature];
    };

    const xValues = houses.map(house =>
      getValue(house, xFeature)
    );

    const yValues = houses.map(house =>
      getValue(house, yFeature)
    );

    const xMin = d3.min(xValues) ?? 0;
    const xMax = d3.max(xValues) ?? 1;

    const yMin = d3.min(yValues) ?? 0;
    const yMax = d3.max(yValues) ?? 1;

    const xScale = d3
      .scaleLinear()
      .domain([xMin, xMax])
      .nice()
      .range([
        margin.left,
        width - margin.right,
      ]);

    const yScale = d3
      .scaleLinear()
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
      .call(d3.axisBottom(xScale));

    // Y axis
    svg
      .append("g")
      .attr(
        "transform",
        `translate(${margin.left}, 0)`
      )
      .call(d3.axisLeft(yScale));

    // X label
    svg
      .append("text")
      .attr(
        "x",
        width / 2
      )
      .attr(
        "y",
        height - 20
      )
      .attr(
        "text-anchor",
        "middle"
      )
      .text(featureLabels[xFeature]);

    // Y label
    svg
      .append("text")
      .attr(
        "transform",
        "rotate(-90)"
      )
      .attr(
        "x",
        -(height / 2)
      )
      .attr("y", 20)
      .attr(
        "text-anchor",
        "middle"
      )
      .text(featureLabels[yFeature]);

    const selected = houses.find(
      house => house.id === selectedId
    );

    const similar = houses.find(
      house => house.id === similarId
    );

    // Distance line
    if (selected && similar) {
      svg
        .append("line")
        .attr(
          "x1",
          xScale(
            getValue(selected, xFeature)
          )
        )
        .attr(
          "y1",
          yScale(
            getValue(selected, yFeature)
          )
        )
        .attr(
          "x2",
          xScale(
            getValue(similar, xFeature)
          )
        )
        .attr(
          "y2",
          yScale(
            getValue(similar, yFeature)
          )
        )
        .attr(
          "stroke-width",
          2
        )
        .attr(
          "stroke-dasharray",
          "5,5"
        );
    }

    // House points
    svg
      .selectAll(".house-point")
      .data(houses)
      .enter()
      .append("circle")
      .attr(
        "class",
        "house-point"
      )
      .attr(
        "cx",
        house =>
          xScale(
            getValue(
              house,
              xFeature
            )
          )
      )
      .attr(
        "cy",
        house =>
          yScale(
            getValue(
              house,
              yFeature
            )
          )
      )
      .attr("r", house =>
        house.id === selectedId ||
        house.id === similarId
          ? 9
          : 5
      )
      .attr(
        "fill",
        "currentColor"
      )
      .style(
        "cursor",
        "pointer"
      )
      .append("title")
      .text(
        house =>
          `House ${house.id}
Area: ${house.area} sq ft
Rooms: ${house.rooms}
Bathrooms: ${house.bathrooms}
Age: ${house.age} years
Distance: ${house.distanceCenter} km
Price: ₹${house.price.toLocaleString("en-IN")}`
      );

    // House labels
    svg
      .selectAll(".house-label")
      .data(houses)
      .enter()
      .append("text")
      .attr(
        "class",
        "house-label"
      )
      .attr(
        "x",
        house =>
          xScale(
            getValue(
              house,
              xFeature
            )
          ) + 8
      )
      .attr(
        "y",
        house =>
          yScale(
            getValue(
              house,
              yFeature
            )
          ) - 8
      )
      .text(
        house => `H${house.id}`
      )
      .style(
        "font-size",
        "10px"
      );
  }, [
    houses,
    selectedId,
    similarId,
    xFeature,
    yFeature,
  ]);

  return (
    <div className="overflow-x-auto">
      <svg
        ref={svgRef}
        width="1400"
        height="520"
        viewBox="0 0 1400 520"
        className="max-w-full"
      />
    </div>
  );
}