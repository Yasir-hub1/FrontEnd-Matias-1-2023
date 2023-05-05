import axios from "axios";

const appApi = axios.create({
	baseURL: "coloca las variables de entorno aqui o directo la ruta de la API",
});
//TODO: Configurar las intercepciones

appApi.interceptors.request.use(config => {
    config.headers={
        ...config.headers,
        'x-token':localStorage.getItem('token')

    }
    return config;
});

export default appApi;
