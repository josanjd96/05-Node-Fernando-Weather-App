

const axios = require('axios');

const getLugarLatLng = async ( direccion ) => {

    const encodeUlr  = encodeURI( direccion );

    const instance   = axios.create({
        baseURL: `https://geocode.xyz/?locate=location?city=${encodeUlr}&auth=437020159378417594238x7061&json=1`,
        headers: {'auth': '437020159378417594238x7061',}
    });

    const resp = await instance.get();

    if ( resp.data.length === 0 ) {
    throw new Error(`No hay resultados para la dirección ${ direccion }`);
    }

    const name    = resp.data.standard.city;
    const country = resp.data.standard.countryname;
    const lat     = resp.data.latt;
    const lon     = resp.data.longt;


    return {
        name,
        country,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLng,
}