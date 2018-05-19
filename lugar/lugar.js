const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encondeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondeUrl}&key=AIzaSyDCT8kgWssXeXgOv-pbeOKcdQpj85VSD2M`)

    if (resp.data.status === 'ZERO_RESULTS')
        throw new Error(`No hay resultados para la ciudad ${direccion}`);

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    //console.log('Dirección: ', location.formatted_address);
    //console.log('Latitud: ', coors.lat);
    //console.log('Longitud: ', coors.lng);
    //console.log(JSON.stringify(resp.data, undefined, 2));

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
};