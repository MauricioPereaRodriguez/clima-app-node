const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=9377350895161f361deaa5ba1856d21b`);

    if (resp.data.cod === '400')
        throw new Error(`No hay resultados para la latitud ${lat}  y longitud ${lng}`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}