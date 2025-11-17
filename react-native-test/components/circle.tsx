import React from "react";
import Svg, { Circle, Path, Text as SvgText } from "react-native-svg";
import { StyleSheet, View } from "react-native";

export function SplitCircle() {
  const size = 300;
  const radius = size / 2;
  const center = size / 2;
  const textRadius = radius * 0.7;

  const getCoords = (angle: number, currentRadius?: number) => {
    const r = currentRadius || radius;
    const x = center + r * Math.cos((angle * Math.PI) / 180);
    const y = center + r * Math.sin((angle * Math.PI) / 180);
    return { x, y };
  };

  const describeArc = (startAngle: number, endAngle: number) => {
    const start = getCoords(startAngle);
    const end = getCoords(endAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
    return [
      `M ${center},${center}`,
      `L ${start.x},${start.y}`,
      `A ${radius},${radius} 0 ${largeArcFlag},1 ${end.x},${end.y}`,
      "Z",
    ].join(" ");
  };

  const segments = [
    { start: 0, end: 60, color: "#ffe44aff", label: "Atom" },
    { start: 60, end: 120, color: "#68ff68ff", label: "Map" },
    { start: 120, end: 180, color: "#91adffff", label: "Chemistry" },
    { start: 180, end: 240, color: "#9176abff", label: "Books" },
    { start: 240, end: 300, color: "#ff69b9ff", label: "Education" },
    { start: 300, end: 360, color: "#ff8671ff", label: "Writing" },
  ];

  return (
    <View style={styles.container}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {segments.map((segment, index) => {
          const midAngle = (segment.start + segment.end) / 2;
          const textCoords = getCoords(midAngle, textRadius);
          return (
            <View key={index}>
              <Path d={describeArc(segment.start, segment.end)} fill={segment.color} />
              <SvgText
                x={textCoords.x}
                y={textCoords.y}
                fill="#FFF"
                fontSize="14"
                fontWeight="bold"
                textAnchor="middle"
                alignmentBaseline="middle">
                {segment.label}
              </SvgText>
            </View>
          );
        })}
        <Circle cx={center} cy={center} r={radius / 3} fill="#fff" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
