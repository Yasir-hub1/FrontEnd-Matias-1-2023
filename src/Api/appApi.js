import axios from "axios";

const appApi= axios.create({
    baseURL:'coloca las variables de entorno aqui o directo la ruta de la API'
})
//TODO: Configurar las intercepciones



export default appApi;
