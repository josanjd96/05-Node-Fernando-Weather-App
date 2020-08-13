


const { getWeather }     = require("./clima/clima");
const { getLugarLatLng } = require("./lugar/lugar");


const argv = require("yargs").options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Pedir localizacion de una ciudad'
    }
}).help()
    .argv;

// getWeather( 38.53996, -0.50579 )
//     .then( resp => console.log( resp ) )
//     .catch( e => console.log( e ) );

// getLugarLatLng( argv.direccion )
//     .then( getWeather() )
//     .then( resp => console.log( resp ) )
//     .catch( e => console.log( e ) );

const getInfo = async ( direccion ) => {

    try {

        const coords = await getLugarLatLng( direccion );
        const temp    = await getWeather( coords.lat, coords.lon );

        return `El clima de ${ coords.name }, ${ coords.country }  es de  ${ temp }`

    } catch ( e ) {
        throw new Error( `No se pudo determinar el clima de ${ direccion }` );
    }

}

getInfo( argv.direccion )
    .then( resp => console.log( resp ) )
    .catch( e => console.log( e ) );