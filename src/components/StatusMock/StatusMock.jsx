import { MOCKED_DATA } from "../../utils/api";
import "./StatusMock.css";

/**
 * A function that reads a global variable called MOCKED_DATA to inform the user of the data source: API or mocked Data.
 *
 * @returns A div with a text message.
 */
function StatusMock() {
	return MOCKED_DATA ? (
		<div className="statusMockContainer">
			<em>Données mockées</em>
		</div>
	) : (
		<div className="statusMockContainer">
			<em>Données API</em>
		</div>
	);
}

export default StatusMock;
