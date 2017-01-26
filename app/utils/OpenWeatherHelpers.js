import axios from 'axios'

const key = process.env.WEATHER_KEY
const params = "&APPID=" + key;

console.log(key);

module.exports = ({
  getLocationForecast: function(location) {
    return axios.get("http://api.openweathermap.org/data/2.5/forecast?q=" + location + ",us&mode=json" + params);
  }
});