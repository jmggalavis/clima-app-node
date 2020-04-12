const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=ab5c4bd49368ea3a194a141593ed77dd&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}