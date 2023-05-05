import { useDispatch, useSelector } from "react-redux";
import appApi from "../Api/appApi";
import {
	clearErrorMessage,
	onChecking,
	onLogin,
	onLogout,
} from "../store/auth/authSlice";

const useAuthStore = () => {
	const { status, user, errorMessage } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	//* Metodo para enviar las creadenciales por la API

	const startLogin = async ({ email, password }) => {
		dispatch(onChecking());
		try {
			const { data } = await appApi.post("/", { email, password }); // poner la ruta de login
			localStorage.setItem("token", data.token); // resguardo del JWT
			localStorage.setItem("token-init-date", new Date().getTime()); // Captura la fecha de guardado
			dispatch(onLogin({ name: data.name, id: data.id })); //* resguardamos los datos del users
		} catch (error) {
			dispatch(onLogout("Credenciales incorrectas"));

			setTimeout(() => {
				dispatch(clearErrorMessage());
			}, 10);
		}
	};

	//* Metodo para registrar usuarios
	const startRegister = async ({ email, password,name }) => {
		dispatch(onChecking());
		try {
			const { data } = await appApi.post("/", { email, password,name }); // poner la ruta de login
			localStorage.setItem("token", data.token); // resguardo del JWT
			localStorage.setItem("token-init-date", new Date().getTime()); // Captura la fecha de guardado
			dispatch(onLogin({ name: data.name, id: data.id })); //* resguardamos los datos del users
		} catch (error) {
			dispatch(onLogout(error.response.data?.msg || 'error peji'));

			setTimeout(() => {
				dispatch(clearErrorMessage());
			}, 10);
		}
	};








	return {
		//* propiedades
		status,
		user,
		errorMessage,

		//* metodos
		startLogin,
		startRegister
	};
};

export default useAuthStore;
