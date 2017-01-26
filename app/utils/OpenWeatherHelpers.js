import axios from 'axios'

const key = process.env.WEATHER_KEY
const params = "?appid=" + key;

module.exports = ({
  getLocationForecast: function(location) {
    return axios.get("api.openweathermap.org/data/2.5/forecast?q=" + location + "us&mode=xml" + params);
  }
});