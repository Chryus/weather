import axios from 'axios'

const key = process.env.WEATHER_KEY
const keyParams = "&APPID=" + key;

console.log(key);

module.exports = ({
  getLocationForecast: function(location) {
    return axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + location + "&type=accurate&" + keyParams + "&cnt=5");
  }
});