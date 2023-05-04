import "./App.css";
import Login from "./components/Login/Login";
import Contenido from "./components/Cotenido/Contenido.jsx"
import { Route, Routes } from "react-router-dom";
function App() {
	return (
		<>
   
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="content" element={<Contenido/>}/>
				<Route />
			</Routes>
		</>
	);
}

export default App;
