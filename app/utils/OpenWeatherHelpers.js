import axios from 'axios'

const key = process.env.WEATHER_KEY
const keyParams = "&APPID=" + key;

module.exports = ({
  getFiveDayForecast: function(location) {
    return axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + location + "&type=accurate&units=imperial&" + keyParams + "&cnt=5");
  }
});