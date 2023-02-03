import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather?lat',
})


export default api;

// https://api.openweathermap.org/data/2.5/weather?lat=-22.9710597&lon=-43.3346586&appid=453d5754ff46b5aa37422bee730a7f6d