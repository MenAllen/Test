import React from "react";
import styled from "styled-components";
import useFetchData from "../utils/api";
import Error from "./Error";
import { LoaderWrapper, Loader } from "../utils/Atoms";
import SideBar from "../components/SideBar/SideBar";
import Title from "../components/Title/Title";
import Nutrients from "../components/Nutrients/Nutrients";
import SessionsChart from "../components/SessionsChart/SessionsChart";
import PerformanceChart from "../components/PerformanceChart/PerformanceChart";
import ScoreChart from "../components/ScoreChart/ScoreChart";
import ActivityChart from "../components/ActivityChart/ActivityChart";
import { useParams } from "react-router-dom";

/* ============================= USERBOARD ARCITECTURE ============================= */
/*   +----------------------------------------------------------------------------+  */
/*   |    MAIN                                                                    |  */
/*   | +---------+  +------------------------------------------------------------+|  */
/*   | | SideBar |  |  UserContainer                                             ||  */
/*   | |         |  | +--------------------------------------------------------+ ||  */
/*   | |         |  | | Title                                                  | ||  */
/*   | |         |  | |                                                        | ||  */
/*   | |         |  | +--------------------------------------------------------+ ||  */
/*   | |         |  | +--------------------------------------------------------+ ||  */
/*   | |         |  | | AllChartsContainer                                     | ||  */
/*   | |         |  | | +-----------------------------------------+ +-  -----+ | ||  */
/*   | |         |  | | | GraphicalsContainer                     | |Nutri   | | ||  */
/*   | |         |  | | |+---------------------------------------+| |ents    | | ||  */
/*   | |         |  | | ||  ActivityChart                        || |        | | ||  */
/*   | |         |  | | ||                                       || |        | | ||  */
/*   | |         |  | | ||                                       || |        | | ||  */
/*   | |         |  | | |+------------------------------- -------+| |        | | ||  */
/*   | |         |  | | |+---------------------------------------+| |        | | ||  */
/*   | |         |  | | ||  SquaresContainer                     || |        | | ||  */
/*   | |         |  | | ||+-----------++-----------++-----------+|| |        | | ||  */
/*   | |         |  | | ||| Session   ||Performan  || Score     ||| |        | | ||  */
/*   | |         |  | | ||| Chart     ||Chart      || Chart     ||| |        | | ||  */
/*   | |         |  | | |||           ||           ||           ||| |        | | ||  */
/*   | |         |  | | ||+-----------++-----------++-----------+|| |        | | ||  */
/*   | |         |  | | |+---------------------------------------+| |        | | ||  */
/*   | |         |  | +-------------------------------------------+ +--------+ | ||  */
/*   | |         |  +----------------------------------------------------------+ ||  */
/*   | +---------+  +------------------------------------------------------------+|  */
/*   +----------------------------------------------------------------------------+  */
/* ================================================================================= */
/* styled components declaration */
const Main = styled.main`
	display: flex;
	width: 100%;
	height: auto;
`;

const UserContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	padding: 1rem;
`;

const AllChartsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
	height: auto;
`;

const GraphicalsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 58vw;
`;

const SquaresContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: auto;
	margin-top: 40px;
`;

/**
 * UserBoard is a function that returns a React Fragment that contains all the charts to be displayed from user data.
 * @returns A React Fragment. Main with aside and section containing all charts.
 */
function UserBoard() {
	/* userId is extracted from the url */
	const { userId } = useParams();

	/* customized hook is called to retrieve user data */
	const { userData, isLoading, error } = useFetchData(userId);

	/* on error, display error panel */
	if (error) {
		return <Error />;
	}

	/* if data loading, display loader. If not, data is available to display full page */
	return isLoading ? (
		<LoaderWrapper>
			<Loader />
		</LoaderWrapper>
	) : (
		<Main>
			<SideBar />
			<UserContainer>
				<Title firstname={userData.getFirstName()} />
				<AllChartsContainer>
					<GraphicalsContainer>
						<ActivityChart activityData={userData.getActivityData()} />
						<SquaresContainer>
							<SessionsChart sessionsData={userData.getSessionsData()} />
							<PerformanceChart performanceData={userData.getPerformanceData()} />
							<ScoreChart scoreData={userData.getScoreData()} />
						</SquaresContainer>
					</GraphicalsContainer>
					<Nutrients nutrientsData={userData.getNutrientData()} />
				</AllChartsContainer>
			</UserContainer>
		</Main>
	);
}

export default UserBoard;
