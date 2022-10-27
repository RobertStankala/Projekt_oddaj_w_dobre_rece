

import "./scss/App.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";

function App() {
	return (
		<Router className="App">
			<Routes>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
