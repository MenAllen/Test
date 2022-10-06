import React from "react";
import propTypes from "prop-types";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import "./ActivityChart.css";

/**
 *  ActivityChart is a React component in charge of displaying daily activity data for a user.
 *  It is based on barChart from Recharts
 *
 *  @prop {Array} activityData an array of objects containing user activity information. Example:
 * 			{	day: "2020-07-01",
 *				kilogram: 80,
 *				calories: 240, }
 *  @returns a div including the ActivityChart component based on BarChart from Recharts
 */
function ActivityChart({ activityData }) {
	
	/* formatXAxis is used to adapt day format to the required format */
	/* from string day format "YYYY-MM-DD" to day number (last D)     */
	const formatXAxis = (day) => {
		return Number(day.slice(8));
	};

	/* Function attached to Tooltip
	 * When Tooltip active and payload available (managed by Recharts), display the information as required */
	function ActivityTooltip({ active, payload }) {
		if (active && payload) {
			return (
				<div className="activityTooltipStyle">
					<p>{`${payload[0].value}`}kg</p>
					<p>{`${payload[1].value}`}Kcal</p>
				</div>
			);
		}
		return null;
	}

	return (
		<div className="activityChartContainer">
			<h2 className="activityChartTitle">Activité quotidienne</h2>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={activityData}
					margin={{
						top: 10,
						right: 5,
						left: 5,
						bottom: 10,
					}}
					barGap={6}>
					<CartesianGrid vertical={false} strokeDasharray="3 3" />
					<XAxis dataKey="day" tickMargin="20" tickSize="0" tickFormatter={formatXAxis} />
					<YAxis
						datakey="kilogram"
						yAxisId="right"
						orientation="right"
						type="number"
						axisLine={false}
						domain={["dataMin-1", "dataMax"]}
						tickCount="3"
						tickSize="0"
						tickMargin="30"
					/>
					<YAxis hide="true" datakey="calories" yAxisId="left" />
					<Tooltip content={<ActivityTooltip />} wrapperStyle={{ top: -40, left: -5 }} />
					<Legend
						verticalAlign="top"
						height={60}
						align="right"
						iconType="circle"
						iconSize="10"
						formatter={(value, entry, index) => (
							<span className="activityLegendColor">{value}</span>
						)}
					/>
					<Bar
						name={"Poids (kg)"}
						yAxisId="right"
						dataKey="kilogram"
						fill="#282D30"
						barSize={8}
						radius={[5, 5, 0, 0]}
					/>
					<Bar
						name={"Calories brûlées (Kcal)"}
						yAxisId="left"
						dataKey="calories"
						fill="#E60000"
						barSize={8}
						radius={[5, 5, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

ActivityChart.propTypes = {
	activityData: propTypes.array.isRequired,
};

export default ActivityChart;
