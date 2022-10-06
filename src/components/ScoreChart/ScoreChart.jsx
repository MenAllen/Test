import React from "react";
import propTypes from "prop-types";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import "./ScoreChart.css";

/**
 * ScoreChart is a React component in charge of displaying the user performance score, in %,
 *  in a pieChart.
 *
 *  @prop {Number} scoreData containing score or todayScore value
 *  @returns a div including the score in a pieChart
 */
function ScoreChart({ scoreData }) {
	/* calculates the score in degrees to be get the endAngle of the pie */
	const scoreAngle = 225 - Math.round(scoreData * 360);

	/* calculates the score in percentage */
	function ObjectivPerCent() {
		return Math.round(scoreData * 100);
	}

	return (
		<div className="scoreChartContainer">
			<h2 className="scoreChartTitle">Score</h2>
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						data={[{ score: scoreData }]}
						dataKey="score"
						startAngle={225}
						endAngle={scoreAngle}
						innerRadius="70%"
						outerRadius="80%"
						cornerRadius="50%"
						fill="#ff0000"
					/>

					<Pie
						data={[{ name: "circle", score: 100 }]}
						dataKey="score"
						startAngle={225}
						endAngle={-135}
						outerRadius="70%"
						fill="white"
					/>
				</PieChart>
			</ResponsiveContainer>
			<div className="objectivContainer">
				<p>
					<strong>{ObjectivPerCent()}%</strong>
					<br />
					de votre
					<br />
					objectif
				</p>
			</div>
		</div>
	);
}

ScoreChart.propTypes = {
	scoreData: propTypes.number.isRequired,
};

export default ScoreChart;
