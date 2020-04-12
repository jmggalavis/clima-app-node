const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccón de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(err => {
//         console.log(err.message);
//     })

// clima.getClima(38, -6)
//     .then(console.log)
//     .catch(console.log);

const getInfo = (dir) => {

    lugar.getLugarLatLng(dir)
        .then(datosLugar => {
            clima.getClima(datosLugar.lat, datosLugar.lng)
                .then(datosClima => {
                    console.log(`El clima de ${ datosLugar.direccion } es ${ datosClima}`);
                })
        })
        .catch(err => console.log(`No se puede determinar el clima de ${ dir }: ${ err.message}`));


}

getInfo(argv.direccion);