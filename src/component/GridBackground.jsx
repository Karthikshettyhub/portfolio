import React from "react";

export default function GridBackground({
  cellSize = 40,
  stroke = "rgba(255,255,255,0.1)",
}) {
  const cols = Math.ceil(window.innerWidth / cellSize);
  const rows = Math.ceil(window.innerHeight / cellSize);

  const lines = [];

  // Vertical lines
  for (let i = 0; i <= cols; i++) {
    lines.push(
      <line
        key={`v-${i}`}
        x1={i * cellSize}
        y1={0}
        x2={i * cellSize}
        y2={rows * cellSize}
        stroke={stroke}
        strokeWidth="1"
      />
    );
  }

  // Horizontal lines
  for (let j = 0; j <= rows; j++) {
    lines.push(
      <line
        key={`h-${j}`}
        x1={0}
        y1={j * cellSize}
        x2={cols * cellSize}
        y2={j * cellSize}
        stroke={stroke}
        strokeWidth="1"
      />
    );
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      width="100%"
      height="100%"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      {lines}
    </svg>
  );
}
