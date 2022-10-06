import React from "react";
import { Link } from "react-router-dom";
import StatusMock from "../components/StatusMock/StatusMock";
import styled from "styled-components";

const Welcome = styled.p`
	font-size: 3rem;
	font-weight: 500;
	margin: 75px;
`;

const Paragraph = styled.p`
	font-size: 2rem;
	font-weight: 400;
	color: #74798c;
	margin: 75px;
`;

const Button = styled.button`
	align-items: center;
	background-color: #ff0000;
	opacity: 0.8;
	border: 2px solid #000;
	border-radius: 10px;
	cursor: pointer;
	display: inline-flex;
	flex-shrink: 0;
	font-size: 2rem;
	gap: 80px;
	justify-content: center;
	line-height: 3rem;
	overflow: hidden;
	padding: 1.5rem 2rem;
	margin: 0 2rem;
	text-decoration: none;
	text-overflow: ellipsis;
	transition: all 0.14s ease-out;
	white-space: nowrap;
	&:hover {
		box-shadow: 4px 4px 0 #000;
		transform: translate(-4px, -4px);
	}
	&:focus-visible {
		outline-offset: 1px;
	}
`;

/**
 * Home is a function that returns a React Fragment that contains a Welcome, a Paragraph, a Link, a
 * Button, and a StatusMock.
 * @returns A React Fragment. Welcome message and links for list of user.
 */
function Home() {
	return (
		<React.Fragment>
			<Welcome>
				Bienvenue sur <strong>SportSee !</strong>
			</Welcome>
			<Paragraph>Choisissez un utilisateur pour afficher son tableau de bord</Paragraph>
			<Paragraph>
				<Link to={`/user/12`}>
					<Button>
						<em>Utilisateur</em> <em>12</em>
					</Button>
				</Link>
				<Link to={`/user/18`}>
					<Button>
						<em>Utilisateur</em> <em>18</em>
					</Button>
				</Link>
			</Paragraph>
			<StatusMock />
		</React.Fragment>
	);
}

export default Home;
