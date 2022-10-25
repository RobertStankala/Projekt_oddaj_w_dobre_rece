import "./scss/App.scss";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


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

// TODO: dodawanie obrazu svg

// import reactLogo from './assets/react.svg'
// <img src={reactLogo} className="logo react" alt="React logo" />
