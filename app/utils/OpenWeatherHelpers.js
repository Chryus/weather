import axios from 'axios'

const key = process.env.WEATHER_KEY
const keyParams = "&APPID=" + key;

module.exports = ({
  getFiveDayForecast: function(location) {
    return axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + location + "&type=accurate&" + keyParams + "&cnt=5");
  },

  getOneDayForecast: function(location, timestamp) {
    return axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + location + "&dt=" + timestamp + "&type=accurate&" + keyParams + "&cnt=1");
  }
});