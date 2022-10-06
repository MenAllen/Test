import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserBoard from "./pages/UserBoard";
import Header from "./components/Header/Header";
import Error from "./pages/Error";
import "./App.css";

/**
 * The App function returns a div with a Router component, a Header component, and a Routes component.
 * The Routes component has three Route components, each with a path and an element.
 * @returns The return statement is returning a div, the JSX code that will be rendered to the DOM.
 */
function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/user/:userId" element={<UserBoard />} />
					<Route path="/*" element={<Error />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
