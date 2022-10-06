import React from "react";
import iconclap from "../../assets/iconclap.png";
import propTypes from "prop-types";
import "./Title.css";

/**
 * This function is a React component that takes a firstname prop and returns a div with a h1 and a p
 * element.
 * @returns A React component.
 */
function Title({ firstname }) {
	return (
		<div className="titleContainer">
			<h1>
				Bonjour <span>{firstname}</span>
			</h1>
			<p>
				Félicitation ! vous avez explosé vos objectifs hier{" "}
				<img src={iconclap} className="iconClap" alt="bravo" />
			</p>
		</div>
	);
}

Title.propTypes = {
	firstname: propTypes.string.isRequired,
};

export default Title;
