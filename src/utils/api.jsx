import { useState, useEffect } from "react";
import User from "../models/UserClass";
import {
	USER_MAIN_DATA,
	USER_ACTIVITY,
	USER_AVERAGE_SESSIONS,
	USER_PERFORMANCE,
} from "../data/mockedData";

/* A constant that is used to determine whether to use mocked data or not. */
export const MOCKED_DATA = false;

/**
 * It fetches data from a server and returns an object with the fetched data, a boolean for loading
 * state and a boolean for error state.
 * @param {Number} id The user Id to fetch. fetch is either from mocked data or from urls depending on MOCKED_DATA value
 * @returns {Object}  An object with 3 properties: userData, isLoading, error.
 * 					userData includes the necessaru data to display charts
 * 					isLoading (Boolean) indicates fetch is in progress or complete
 * 					error (Boolean) indicates an error
 */
export function useFetchData(id) {
	const server = "http://localhost:3000";

	const [userData, setUserData] = useState({});
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	function isValidData(userData) {
		if (!userData[0].data || !userData[1].data || !userData[2].data || !userData[3].data) {
			return false;
		}
		if (
			userData[0] === "can not get user" ||
			userData[1] === "can not get user" ||
			userData[2] === "can not get user" ||
			userData[3] === "can not get user"
		) {
			return false;
		}
		return true;
	}

	useEffect(() => {
		if (MOCKED_DATA === true) {
			const mainDataMocked = USER_MAIN_DATA;
			const activityDataMocked = USER_ACTIVITY;
			const sessionsDataMocked = USER_AVERAGE_SESSIONS;
			const performanceDataMocked = USER_PERFORMANCE;

			const userMainDataMocked = mainDataMocked.find((element) => element.id.toString() === id);
			const userActivityDataMocked = activityDataMocked.find(
				(element) => element.userId.toString() === id
			);
			const userSessionsDataMocked = sessionsDataMocked.find(
				(element) => element.userId.toString() === id
			);
			const userPerformanceDataMocked = performanceDataMocked.find(
				(element) => element.userId.toString() === id
			);

			if (
				!userMainDataMocked ||
				!userMainDataMocked ||
				!userMainDataMocked ||
				!userMainDataMocked
			) {
				setError(true);
			} else {
				setUserData(
					new User(
						userMainDataMocked,
						userActivityDataMocked,
						userSessionsDataMocked,
						userPerformanceDataMocked
					)
				);
				setLoading(false);
			}
		} else {
			const urlMainData = server + "/user/" + id;
			const urlActivityData = server + "/user/" + id + "/activity";
			const urlSessionsData = server + "/user/" + id + "/average-sessions";
			const urlPerformanceData = server + "/user/" + id + "/performance";

			Promise.all([
				fetch(urlMainData),
				fetch(urlActivityData),
				fetch(urlSessionsData),
				fetch(urlPerformanceData),
			])
				.then((res) => Promise.all(res.map((r) => r.json())))
				.then((mainData) => {
					if (isValidData(mainData)) {
						setUserData(
							new User(mainData[0].data, mainData[1].data, mainData[2].data, mainData[3].data)
						);
					} else {
						setError(true);
					}
				})
				.catch((err) => {
					console.log(err);
					setError(true);
				})
				.finally(() => setLoading(false));
		}
	}, [id]);

	return { userData, isLoading, error };
}

export default useFetchData;
