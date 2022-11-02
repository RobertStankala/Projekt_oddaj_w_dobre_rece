import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";

import "./scss/App.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";

function App() {
	return (
		<Router className="App">
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
