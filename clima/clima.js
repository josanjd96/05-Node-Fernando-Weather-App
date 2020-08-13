

const axios = require('axios');

const getWeather = async ( lat, lon ) => {

    const appid = '837c60aa6fdc22a9a709934af67075c9'

    const resp = await axios.get( `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=${ appid }&` )

    return resp.data.main.temp

}

module.exports = {
    getWeather
}