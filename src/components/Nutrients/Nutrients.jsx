import React from "react";
import NutrientCard from "../NutrientCard/NutrientCard";
import propTypes from "prop-types";
import "./Nutrients.css";

/**
 * Nutrients is a React component in charge of taking in a prop called nutrientsData and
 * rendering 4 other components called NutrientCard.
 *
 *  @prop {Object} nutrientsData contains an object. example :
 *		{ calorieCount: 1930,
 *		proteinCount: 155,
 *		carbohydrateCount: 290,
 *		lipidCount: 50 }
 *  @returns a div with 4 NutrientCard components displays the 4 values
 */
function Nutrients({ nutrientsData }) {
	return (
		<div className="nutrientsContainer">
			<NutrientCard item="Calories" data={nutrientsData.calorieCount} />
			<NutrientCard item="Proteines" data={nutrientsData.proteinCount} />
			<NutrientCard item="Glucides" data={nutrientsData.carbohydrateCount} />
			<NutrientCard item="Lipides" data={nutrientsData.lipidCount} />
		</div>
	);
}

Nutrients.propTypes = {
	nutrientsData: propTypes.object.isRequired,
};

export default Nutrients;
