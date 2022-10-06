import React from "react";
import propTypes from "prop-types";
import { RadarChart, PolarAngleAxis, Radar, PolarGrid, ResponsiveContainer } from "recharts";
import "./PerformanceChart.css";

/**
 * PerformanceChart is a React component in charge of displaying the 6 user performances in a radar Chart:
 * speed, intensity, strength, endurance, energy & cardio
 *
 *  @prop {Array} performanceData is an array of 6 objects. Example:
 *	 { value: 80,
 *    	kind: 1 }
 *  @returns a div including the 6 values in a radarChart
 */
function PerformanceChart({ performanceData }) {
	/* formatXAxis takes a number and returns a string to be displayed in the XAxis of the radar Chart */
	const formatXAxis = (tickItem) => {
		switch (tickItem) {
			case 1:
				return "Cardio";
			case 2:
				return "Energie";
			case 3:
				return "Endurance";
			case 4:
				return "Force";
			case 5:
				return "Vitesse";
			case 6:
				return "Intensité";
			default:
				return "";
		}
	};

	/* Takes an array, returns a new array, with the same values in reverse order.
	 * This is done to cope with the Figma picture                                 */
	function reverseArray(Array) {
		const reversedArray = [];
		for (let i = 0; i < Array.length; i++) {
			reversedArray[5 - i] = Array[i];
		}
		return reversedArray;
	}

	return (
		<div className="PerformanceChartContainer">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart
					cx="50%"
					cy="50%"
					innerRadius="10%"
					outerRadius={window.innerWidth > 1340 ? "70%" : "55%"}
					data={reverseArray(performanceData)}>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis
						dataKey="kind"
						tickLine={false}
						tick={{ fontSize: 12, fontWeight: 500 }}
						stroke={"#ffffff"}
						tickFormatter={formatXAxis}
					/>
					<Radar name={"User"} dataKey="value" fill="#FF0101" fillOpacity={0.7} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
}

PerformanceChart.propTypes = {
	performanceData: propTypes.array.isRequired,
};

export default PerformanceChart;
