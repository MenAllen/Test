import React from "react";
import propTypes from "prop-types";
import {
	ResponsiveContainer,
	LineChart,
	CartesianGrid,
	XAxis,
	Tooltip,
	Line,
	Rectangle,
} from "recharts";
import "./SessionsChart.css";

/**
 *  SessionChart is a React component in charge of displaying session average data for a user
 *  It is based on lineChart from Recharts
 *
 *  @prop {Array} sessionsData contains an array of user session information. Example:
 * 			{	day: 1,
 *				sessionLength: 30 }
 *  @returns a div including the SessionChart based on lineChart from Recharts
 */
function SessionsChart({ sessionsData }) {
	/* Format the day date from number to string representig the first letter of the day */
	const xAxisFormatter = (day) => {
		switch (day) {
			case 1:
				return "L";
			case 2:
				return "M";
			case 3:
				return "M";
			case 4:
				return "J";
			case 5:
				return "V";
			case 6:
				return "S";
			case 7:
				return "D";
			default:
				return "";
		}
	};

	/* customize the tootip to cope with the FIGMA */
	function CustomizedTooltip({ active, payload }) {
		if (active && payload) {
			return (
				<div className="custom-tooltip">
					<p>{`${payload[0].value}`} min</p>
				</div>
			);
		}
		return null;
	}

	/* Darken the right part of the chart when the cursor points to a value */
	function CustomizedCursor({ points }) {
		return <Rectangle fill="black" opacity={0.1} x={points[1].x} width={500} height={300} />;
	}

	return (
		<div className="sessionsChartContainer">
			<h2 className="sessionChartTitle">Durée moyenne des sessions</h2>

			<ResponsiveContainer width="100%" height="100%">
				<LineChart data={sessionsData} margin={{ top: 40, right: 10, left: 10, bottom: 40 }}>
					<CartesianGrid horizontal={false} vertical={false} />
					<XAxis
						dataKey="day"
						type="category"
						tickFormatter={xAxisFormatter}
						axisLine={false}
						tickLine={false}
						tick={{ fontSize: 12, fontWeight: 500 }}
						stroke="rgba(255, 255, 255, 0.8)"
						tickMargin={40}
					/>
					<Line
						type="natural"
						dataKey="sessionLength"
						stroke="#ffffff"
						dot={false}
						strokeWidth={2}
					/>
					<Tooltip content={<CustomizedTooltip />} cursor={<CustomizedCursor />} />
					onMouseMove={(e) => {}}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

SessionsChart.propTypes = {
	sessionsData: propTypes.array.isRequired,
};

export default SessionsChart;
