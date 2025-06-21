'use client';
import React from 'react';

type ParabolaOrientation = 'upward' | 'downward' | 'topEdge' | 'bottomEdge' | 'wave';

interface ParabolicDivProps {
  width: number;
  height: number;
  color?: string;
  orientation?: ParabolaOrientation;
  className?: string;
  children?: React.ReactNode;
}

const ParabolicDiv: React.FC<ParabolicDivProps> = ({
  width,
  height,
  color = 'bg-[var(--purple)]', // Default color if not provided
  orientation = 'downward', // Default orientation
  className = '',
  children,
}) => {
  let pathData = '';
  const curveDepthRatio = 0.3; // Defines how 'deep' the curve is for edge cases, relative to height

  // SVG Path coordinate system: (0,0) is top-left.
  // M = moveto (X Y)
  // Q = quadratic Bézier curve to (X Y) via control point (CPX CPY)
  // T = shorthand/smooth quadratic Bézier curveto (X Y)
  // L = lineto (X Y)
  // Z = closepath

  switch (orientation) {
    case 'downward': // Mound shape: curved top, flat bottom. Vertex at y=0 (top-center of div).
      pathData = `M 0 ${height} Q ${width / 2} 0 ${width} ${height} Z`;
      break;
    case 'upward': // Bowl shape: flat top, curved bottom. Vertex at y=height (bottom-center of div).
      pathData = `M 0 0 Q ${width / 2} ${height} ${width} 0 Z`;
      break;
    case 'topEdge': // Rectangle with top edge sagging downwards.
      const topCurveY = height * curveDepthRatio;
      pathData = `M 0 0 Q ${width / 2} ${topCurveY} ${width} 0 L ${width} ${height} L 0 ${height} Z`;
      break;
    case 'bottomEdge': // Rectangle with bottom edge curving upwards (smiling).
      const bottomCurveY = height * (1 - curveDepthRatio);
      pathData = `M 0 0 L ${width} 0 L ${width} ${height} Q ${width / 2} ${bottomCurveY} 0 ${height} Z`;
      break;
    case 'wave': // Top edge is a wave: low, up, down, up, down. Bottom is flat.
      const yPeak = height * 0.35; // Y-coordinate for wave peaks (25% from top)
      const yValley = height * 0.75; // Y-coordinate for wave valleys (75% from top)

      const p0 = { x: 0, y: yValley };
      const p1 = { x: width * 0.25, y: yPeak };
      const p2 = { x: width * 0.5, y: yValley };
      const p3 = { x: width * 0.75, y: yPeak };
      const p4 = { x: width, y: yValley };

      // Control point for the first curve (P0 to P1)
      // To make P1 a horizontal tangent (peak), CP1_y should be P1_y.
      // CP1_x is midway P0.x and P1.x for a symmetric rise.
      const cp1 = { x: (p0.x + p1.x) / 2, y: p1.y };

      pathData = `M ${p0.x} ${p0.y}`; // Start at first valley point
      pathData += ` Q ${cp1.x} ${cp1.y} ${p1.x} ${p1.y}`; // Curve to first peak
      pathData += ` T ${p2.x} ${p2.y}`; // Smooth curve to second valley
      pathData += ` T ${p3.x} ${p3.y}`; // Smooth curve to second peak
      pathData += ` T ${p4.x} ${p4.y}`; // Smooth curve to final valley point on edge
      pathData += ` L ${width} ${height} L 0 ${height} Z`; // Line to bottom-right, bottom-left, and close
      break;
    default: // Fallback to a simple rectangle if orientation is unknown
      pathData = `M 0 0 L ${width} 0 L ${width} ${height} L 0 ${height} Z`;
      break;
  }

  const clipPathValue = `path('${pathData}')`;

  return (
    <div
      className={`${className} ${color} [clip-path:var(--custom-clip-path)] relative overflow-hidden flex items-center justify-center text-center transition-all duration-300 ease-in-out group z-30 -mb-1`}
      style={{
        '--custom-clip-path': clipPathValue,
        width: `${width}px`,
        height: `${height}px`,
      } as React.CSSProperties}
      aria-label={`Parabolic div with ${orientation} orientation, ${width} pixels wide and ${height} pixels high`}
    >
      <div className="p-3 break-words text-xs sm:text-sm text-white/90 opacity-80 group-hover:opacity-100 transition-opacity">
        {children ? children : ''}
      </div>
    </div>
  );
};

export default ParabolicDiv;
